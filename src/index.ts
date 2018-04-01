require('dotenv').config();

import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import models from './database/models';
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
    context: {
      user: { id: 1 },
      models,
    },
  })
);

app.use('/graphiql', graphiqlExpress({ endpointURL: graphqlEndpoint }));

async function main() {
  await app.listen(PORT, () => {
    console.log('Listning on port', PORT);
  });
}
main();
