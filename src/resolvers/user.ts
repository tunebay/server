// import formatErrors from '../lib/formatErrors';
import { ResolverMap } from '../@types';

const userResolver: ResolverMap = {
  Query: {
    allUsers(parent, args, { models: { User } }, info) {
      return User.findAll();
    },
    getUser(parent, args, { models: { User } }, info) {
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
    // signup: async (parent, args, { models }, info) => {
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
    //   { models, jwtSecret, jwtRefreshSecret },
    //   info
    // ) => tryLogin(emailOrUsername, password, models, jwtSecret, jwtRefreshSecret),
  },
  User: {
    playlists(parent: { id: string /* ..rest */ }, args, { models: { Playlist } }, info) {
      return Playlist.findAll({ where: { userId: parent.id } });
    },
  },
};

export default userResolver;
