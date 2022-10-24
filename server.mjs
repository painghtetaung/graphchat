import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// The GraphQL schema
const typeDefs = `#graphql
  type User {
    username: String!
    email: String!
  }
  type Query {
    haha: String
    getUsers: [User]!
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    haha: () => 'haha world',
    getUsers: () => {
      const users = [
        {
          username: 'john',
          email: 'john@email.com'
        },
        {
          username: 'paipai',
          email: 'paipai@email.com'
        }
      ]
      return users 
    }
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);