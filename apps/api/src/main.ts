import * as express from 'express';
import { apolloServer } from './app/graphql/index';
import { connectToDB } from './app/conf/mongo';

const createServer = async () => {
  const app = express();

  app.get('/api', (req, res) => {
    res.send({ message: 'Welcome to api!' });
  });

  await apolloServer.start()

  apolloServer.applyMiddleware({ app, path: "/api/graphql" });

  connectToDB();
  
  const port = process.env.port || 3333;
  const server = app.listen(port, () => {
    console.log(`✅ Listening at http://localhost:${port}/api`);
  });

  server.on('error', console.error);
}

createServer();
