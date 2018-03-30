/* eslint import/first: 0 */
require('dotenv').config();

import express from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { express as voyager } from 'graphql-voyager/middleware';
import cors from 'cors';

import type { $RequestWithUser } from './src/lib/flowTypes';
import { refreshTokens } from './src/lib/auth';
import schema from './src/schema';
import models from './src/database/models';

const PORT = 5000 || process.env.PORT;
const app = express();
const graphqlEndpoint = '/graphql';

app.use(cors()); // TODO
const jwtSecret = process.env.JWT_SECRET;
const jwtRefreshSecret = process.env.JWT_REFRESH_SECRET;
if (!jwtSecret) throw new Error('No jwt secret set');
if (!jwtRefreshSecret) throw new Error('No jwt refresh secret set');

const addUser = async (req, res, next) => {
  const token = req.headers['x-token'];
  if (token) {
    try {
      const { user } = await jwt.verify(token, jwtSecret);
      req.user = user;
    } catch (e) {
      const refreshToken = req.headers['x-refresh-token'];
      const newTokens = refreshTokens(
        token,
        refreshToken,
        models,
        jwtSecret,
        jwtRefreshSecret
      );
      if (newTokens.token && newTokens.refreshToken) {
        res.set('Access-Control-Expose-Headers', 'x-token', 'x-refresh-token');
        res.set('x-token', newTokens.token);
        res.set('x-refresh-token', newTokens.refreshToken);
      }
    }
  }
};

// bodyParser is needed just for POST.
app.use(
  graphqlEndpoint,
  bodyParser.json(),
  graphqlExpress((req: $RequestWithUser) => ({
    schema,
    context: {
      user: req.user,
      models,
      jwtSecret,
      jwtRefreshSecret,
    },
  }))
);

app.use('/graphiql', graphiqlExpress({ endpointURL: graphqlEndpoint }));
app.use('/voyager', voyager({ endpointUrl: graphqlEndpoint }));

async function main() {
  await app.listen(PORT, () => {
    console.log('Listning on port', PORT);
  });
}
main();
