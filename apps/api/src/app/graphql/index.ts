import { ApolloServer, gql } from "apollo-server-express";
import { CategoryOperation, CategoryResolvers, CategorySchema } from "./category";
import { GroupOperation, GroupResolvers, GroupSchema } from "./groups";
import { TaskOperation, TaskResolvers, TaskSchema } from "./tasks";
import { UserSchema, UserOperation, UserResolvers } from './users';


export const apolloServer = new ApolloServer({
  typeDefs: gql`
    ${UserSchema}
    ${UserOperation}

    ${TaskSchema}
    ${TaskOperation}

    ${GroupSchema}
    ${GroupOperation}

    ${CategorySchema}
    ${CategoryOperation}
  `,
  resolvers: {
    Query: {
      ...UserResolvers.Query,
      ...TaskResolvers.Query,
      ...GroupResolvers.Query,
      ...CategoryResolvers.Query,
    },
    Mutation: {
      ...UserResolvers.Mutation,
      ...TaskResolvers.Mutation,
      ...GroupResolvers.Mutation,
      ...CategoryResolvers.Mutation,
    },
  },
  context: ({ req }) => ({ req }),
  debug: true,
});
