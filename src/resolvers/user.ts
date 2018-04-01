// import formatErrors from '../lib/formatErrors';
import { Context } from '../lib/types';

export default {
  Query: {
    allUsers(parent: any, args: any, { models: { User } }: Context, info: any) {
      return User.findAll();
    },
    getUser(parent: any, args: any, { models: { User } }: Context, info: any) {
      try {
        const { id, username } = args;
        return id ? User.findById(id) : User.findOne({ where: { username } });
      } catch (e) {
        return null;
      }
    },
  },
  Mutation: {
    // TODO:
    // signup: async (parent, args, { models }: Context, info) => {
    //   try {
    //     const user = await models.User.create(args);
    //     return { ok: true, user };
    //   } catch (e) {
    //     return { ok: false, errors: formatErrors(e, models) };
    //   }
    // },
    // login: async (
    //   parent,
    //   { emailOrUsername, password },
    //   { models, jwtSecret, jwtRefreshSecret }: Context,
    //   info
    // ) => tryLogin(emailOrUsername, password, models, jwtSecret, jwtRefreshSecret),
  },
  User: {
    playlists(
      parent: { id: string /* ..rest */ },
      args: any,
      { models: { Playlist } }: Context,
      info: any
    ) {
      return Playlist.findAll({ where: { userId: parent.id } });
    },
  },
};
