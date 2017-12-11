import * as fs from 'fs'
import * as path from 'path'

import { makeExecutableSchema } from 'graphql-tools'

import resolvers from './resolvers'

const typeDefs = fs.readFileSync(path.join(__dirname, 'types.graphql'), 'utf-8')

const schema = {
  typeDefs,
  resolvers,
}

module.exports = makeExecutableSchema(schema)
