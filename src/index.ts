require('dotenv').config();
import 'reflect-metadata';

import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { createConnection } from 'typeorm';

import schema from './schema';
import { User } from './entity/User';
import { Playlist } from './entity/Playlist';
import { Track } from './entity/Track';
import { Context } from 'vm';

const PORT = 5000 || process.env.PORT;
const app = express();

const graphqlEndpoint = '/graphql';

app.use(cors()); // TODO

const context: Context = {
  user: { id: 1 },
  models: {
    User,
    Playlist,
    Track,
  },
};

// bodyParser is needed just for POST.
app.use(
  graphqlEndpoint,
  bodyParser.json(),
  graphqlExpress({
    schema,
    context,
  })
);

app.use('/graphiql', graphiqlExpress({ endpointURL: graphqlEndpoint }));

createConnection().then(async con => {
  await con.runMigrations();
  app.listen(PORT, () => {
    console.log('Listning on port', PORT);
  });
});
