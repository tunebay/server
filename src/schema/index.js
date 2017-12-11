import * as fs from 'fs'
import * as path from 'path'
import { makeExecutableSchema } from 'graphql-tools'

const typeDefs = fs.readFileSync(path.join(__dirname, 'types.graphql'), 'utf-8')
const resolvers = require('./resolvers')

const schema = {
  typeDefs,
  resolvers,
}

module.exports = makeExecutableSchema(schema)
