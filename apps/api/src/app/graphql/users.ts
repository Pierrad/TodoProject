import { User } from "../models";
import bcrypt = require("bcrypt");
import jwt = require("jsonwebtoken");
import { pipeResolvers } from "graphql-resolvers";
import { isAuthorized } from "../conf/middleware";


const saltRounds = 10;

export const UserSchema = `
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    token: String
    createdAt: String!
  }
`

export const UserOperation = `
  input UserInput {
    username: String!
    email: String!
    password: String!
  }

  type Mutation {
    register(user: UserInput): User
    login(email: String!, password: String!): User
  }

  type Query {
    getUserByID(id: ID!): User
    me: User
  }
`;

export const UserResolvers = {
  Query: {
    getUserByID: pipeResolvers(isAuthorized, async (_, { id }) => {
      return await User.findById(id);
    }),
    me: pipeResolvers(isAuthorized, async (parent) => {
      return await User.findById(parent.id);
    })
  },
  Mutation: {
    register: async (parent: unknown, args) => {
      const { username, email, password } = args.user;
      if (await User.findOne({ email })) {
        throw new Error("Email already exists");
      }
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      return User.create({ username, email, password: hashedPassword });
    },
    login: async (parent: unknown, args) => {
      const { email, password } = args;
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error("User not found");
      }
      const isValid = bcrypt.compare(password, user.password);
      user.token = jwt.sign({ id: user._id }, process.env['JWT_SECRET'], {
        expiresIn: "24d"
      });
      await user.save();

      if (!isValid) {
        throw new Error("Invalid password");
      }
      return user;
    }
  }
}
