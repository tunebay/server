// @flow
import path from 'path';

import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './types')));

const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));

const schema = {
  typeDefs,
  resolvers,
};

module.exports = makeExecutableSchema(schema);
