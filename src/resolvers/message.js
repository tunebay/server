// @flow
import type { Context } from '../types'

export default {
  Mutation: {
    createMessage: async (parent: *, args: *, { models, user }: Context) => {
      try {
        await models.Message.create({ ...args, userId: user.id })
        return true
      } catch (e) {
        console.log(e)
        return false
      }
    },
  },
}
