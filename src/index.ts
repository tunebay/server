require('dotenv').config();
import 'reflect-metadata';

import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { createConnection } from 'typeorm';
import { User } from './entity/User';

const models = {
  User,
};

import schema from './schema';

const PORT = 5000 || process.env.PORT;
const app = express();

const graphqlEndpoint = '/graphql';

app.use(cors()); // TODO

// bodyParser is needed just for POST.
app.use(
  graphqlEndpoint,
  bodyParser.json(),
  graphqlExpress({
    schema,
    models,
  })
);

app.use('/graphiql', graphiqlExpress({ endpointURL: graphqlEndpoint }));

createConnection().then(() => {
  app.listen(PORT, () => {
    console.log('Listning on port', PORT);
  });
});
