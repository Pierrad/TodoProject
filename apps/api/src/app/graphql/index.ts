import { ApolloServer, gql } from "apollo-server-express";
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
  `,
  resolvers: {
    Query: {
      ...UserResolvers.Query,
      ...TaskResolvers.Query,
      ...GroupResolvers.Query,
    },
    Mutation: {
      ...UserResolvers.Mutation,
      ...TaskResolvers.Mutation,
      ...GroupResolvers.Mutation,
    },
  },
  debug: true,
});