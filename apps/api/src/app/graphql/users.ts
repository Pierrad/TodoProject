import { User } from "../models";
import bcrypt = require("bcrypt");

const saltRounds = 10;

export const UserSchema = `
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
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
  }
`;

export const UserResolvers = {
  Query: {
    getUserByID: async (_, { id }) => {
      return await User.findById(id);
    }
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
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
        throw new Error("Invalid password");
      }
      return user;
    }
  }
}