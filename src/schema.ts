import path from 'path';

import { makeExecutableSchema } from 'graphql-tools';
import { fileLoader, mergeResolvers, mergeTypes } from 'merge-graphql-schemas';

// NOTE: since apollo 2.0 we can use graphql-tools to do this
// TODO: Swap out 'merge-graphql-schemas' and use 'graphql-tools' instead
const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './types')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));

const schema = {
  typeDefs,
  resolvers,
};

export default makeExecutableSchema(schema);
