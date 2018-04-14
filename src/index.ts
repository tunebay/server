require('dotenv').config();
import 'reflect-metadata';

import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { createConnection } from 'typeorm';
import session from 'express-session';

import schema from './schema';
import { User } from './entity/User';
import { Playlist } from './entity/Playlist';
import { Track } from './entity/Track';
import { Context, SessionRequest } from './@types';

const PORT = 5000 || process.env.PORT;
const app = express();

const graphqlEndpoint = '/graphql';

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  })
); // TODO

app.use(
  session({
    name: 'tbsid',
    secret: process.env.SESSION_SECRET as string,
    saveUninitialized: false,
    resave: true,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    },
  })
);

// bodyParser is needed just for POST.
app.use(
  graphqlEndpoint,
  bodyParser.json(),
  sessionLogger(),
  graphqlExpress(req => ({
    schema,
    context: getContext(req as SessionRequest),
  }))
);

app.use('/graphiql', graphiqlExpress({ endpointURL: graphqlEndpoint }));

function getContext(req: SessionRequest): Context {
  return {
    req,
    models: {
      User,
      Playlist,
      Track,
    },
  };
}

function sessionLogger(): express.RequestHandler {
  return (req, _, next) => {
    console.log('Session:', req.session);
    return next();
  };
}

createConnection().then(async con => {
  await con.runMigrations();
  app.listen(PORT, () => {
    console.log('Listning on port', PORT);
  });
});
