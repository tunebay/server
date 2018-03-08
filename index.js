// @flow
/* eslint import/first: 0 */
require('dotenv').config();

import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { express as voyager } from 'graphql-voyager/middleware';
import cors from 'cors';

import type { Context, $RequestWithUser } from './src/lib/flowTypes';

import schema from './src/schema';
import models from './src/database/models';

const PORT = 5000 || process.env.PORT;
const app = express();
const graphqlEndpoint = '/graphql';

app.use(cors()); // TODO

const getContext = (req: $RequestWithUser): Context => {
  const jwtSecret = process.env.JWT_SECRET;
  const jwtRefreshSecret = process.env.JWT_REFRESH_SECRET;
  if (!jwtSecret) throw new Error('No jwt secret set');
  if (!jwtRefreshSecret) throw new Error('No jwt refresh secret set');
  const { user } = req;
  return { models, user, jwtSecret, jwtRefreshSecret };
};

// bodyParser is needed just for POST.
app.use(
  graphqlEndpoint,
  bodyParser.json(),
  graphqlExpress((req: $RequestWithUser) => ({
    schema,
    context: getContext(req),
  })),
);

app.use('/graphiql', graphiqlExpress({ endpointURL: graphqlEndpoint }));
app.use('/voyager', voyager({ endpointUrl: graphqlEndpoint }));

async function main() {
  await app.listen(PORT, () => {
    console.log('Listning on port', PORT);
  });
}
main();
