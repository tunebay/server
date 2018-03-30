/* eslint import/first: 0 */
require('dotenv').config();

import express from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { express as voyager } from 'graphql-voyager/middleware';
import cors from 'cors';

import schema from './src/schema';
import models from './src/database/models';

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
    context: {
      user: { id: 1 },
      models,
    },
  })
);

app.use('/graphiql', graphiqlExpress({ endpointURL: graphqlEndpoint }));
app.use('/voyager', voyager({ endpointUrl: graphqlEndpoint }));

async function main() {
  await app.listen(PORT, () => {
    console.log('Listning on port', PORT);
  });
}
main();
