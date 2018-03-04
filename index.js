// @flow
/* eslint import/first: 0 */
require('dotenv').config();

import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { express as voyager } from 'graphql-voyager/middleware';
import cors from 'cors';

import { type Context } from './src/lib/flowTypes';

import schema from './src/schema';
import models from './src/database/models';

const PORT = 5000 || process.env.PORT;
const app = express();
const graphqlEndpoint = '/graphql';

app.use(cors()); // TODO

const context: Context = {
  models,
  // TODO infer user
  user: { id: 1 },
  jwtSecret: process.env.JWT_SECRET,
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,
};

// bodyParser is needed just for POST.
app.use(
  graphqlEndpoint,
  bodyParser.json(),
  graphqlExpress({
    schema,
    context,
  }),
);

app.use('/graphiql', graphiqlExpress({ endpointURL: graphqlEndpoint }));
app.use('/voyager', voyager({ endpointUrl: graphqlEndpoint }));

async function main() {
  await app.listen(PORT, () => {
    console.log('Listning on port', PORT);
  });
}
main();
