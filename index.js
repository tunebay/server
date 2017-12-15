// @flow
import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { express as voyager } from 'graphql-voyager/middleware'

import schema from './src/schema'
import models, { sequelize } from './src/models'

const PORT = 5000
const app = express()
const graphqlEndpoint = '/graphql'

// bodyParser is needed just for POST.
app.use(
  graphqlEndpoint,
  bodyParser.json(),
  graphqlExpress({
    schema,
    context: {
      models,
    },
  }),
)

app.use('/graphiql', graphiqlExpress({ endpointURL: graphqlEndpoint }))
app.use('/voyager', voyager({ endpointUrl: graphqlEndpoint }))

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log('Listning on port', PORT)
  })
})
