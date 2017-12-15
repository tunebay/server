// @flow
import type { Context } from '../types'

export default {
  Query: {
    getUser: (parent: *, { id }: *, { models }: Context) => {
      models.User.findOne({ where: { id } })
    },
    allUsers: (parent: *, args: *, { models }: Context) =>
      models.User.findAll(),
  },

  Mutation: {
    createUser: (parent: *, args: *, { models }: Context) =>
      models.User.create(args),
  },
}
