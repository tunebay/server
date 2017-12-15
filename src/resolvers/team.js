// @flow
import type { Context } from '../types'

export default {
  Mutation: {
    createTeam: async (parent: *, args: *, { models, user }: Context) => {
      try {
        await models.Team.create({ ...args, owner: user.id })
        return true
      } catch (e) {
        console.log(e)
        return false
      }
    },
  },
}
