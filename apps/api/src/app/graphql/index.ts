import { ApolloServer, gql } from "apollo-server-express";
import { UserSchema, UserMutation, UserResolvers } from './users';


export const apolloServer = new ApolloServer({
  typeDefs: gql`
    ${UserSchema}
    ${UserMutation}
  `,
  resolvers: {
    ...UserResolvers
  },
});