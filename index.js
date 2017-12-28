// @flow
import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { express as voyager } from 'graphql-voyager/middleware';
import cors from 'cors';

import schema from './src/schema';

const PORT = 5000;
const app = express();
const graphqlEndpoint = '/graphql';

app.use(cors()); // TODO

// bodyParser is needed just for POST.
app.use(
  graphqlEndpoint,
  bodyParser.json(),
  graphqlExpress({
    schema,
  }),
);

app.use('/graphiql', graphiqlExpress({ endpointURL: graphqlEndpoint }));
app.use('/voyager', voyager({ endpointUrl: graphqlEndpoint }));

app.listen(PORT, () => {
  console.log('Listning on port', PORT);
});
