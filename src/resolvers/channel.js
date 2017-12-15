// @flow
import type { Context } from '../types'

export default {
  Mutation: {
    createChannel: async (parent: *, args: *, { models, user }: Context) => {
      try {
        await models.Channel.create(args)
        return true
      } catch (e) {
        console.log(e)
        return false
      }
    },
  },
}
