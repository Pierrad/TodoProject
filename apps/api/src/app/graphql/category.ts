import { Category } from "../models";
import { isAuthorized } from "../conf/middleware";
import { pipeResolvers } from "graphql-resolvers";


export const CategorySchema = `
  type Category {
    _id: ID!
    name: String!
    description: String!
    color: String!
    group: Group!
    createdAt: String!
  }
`

export const CategoryOperation = `
  input CategoryInput {
    name: String!
    description: String!
    color: String!
    group: ID!
  }

  type Mutation {
    createCategory(Category: CategoryInput): Category
    updateCategory(id: ID!, Category: CategoryInput): Category
    deleteCategory(id: ID!): Category
  }

  type Query {
    getCategoryByID(id: ID!): Category
    getCategoryByGroup(group: ID!): [Group]
  }
`;

export const CategoryResolvers = {
  Query: {
    getCategoryByID: pipeResolvers(isAuthorized, async (_, { id }) => {
      return await Category.findById(id);
    }),
    getCategoryByGroup: pipeResolvers(isAuthorized, async (_, { group }) => {
      return await Category.find({ group });
    }),
  },
  Mutation: {
    createCategory: pipeResolvers(isAuthorized, async (parent: unknown, args) => {
      const { name, description, color, group } = args.Category;
      return Category.create({
        name,
        description,
        color,
        group,
      });
    }),
    updateCategory: pipeResolvers(isAuthorized, async (parent: unknown, args) => {
      const { id, Category } = args;
      const { name, description, color, group } = Category;
      return Category.findByIdAndUpdate(id, {
        name,
        description,
        color,
        group,
      });
    }),
    deleteCategory: pipeResolvers(isAuthorized, async (parent: unknown, args) => {
      const { id } = args;
      return Category.findByIdAndDelete(id);
    }),
  },
}
