// @flow
import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'

import schema from './src/schema'

const PORT = 4000
const app = express()
const graphqlEndpoint = '/graphql'

// bodyParser is needed just for POST.
app.use(graphqlEndpoint, bodyParser.json(), graphqlExpress({ schema }))
app.get('/graphiql', graphiqlExpress({ endpointURL: graphqlEndpoint }))

app.listen(PORT, () => {
  console.log('Listning on port', PORT)
})
