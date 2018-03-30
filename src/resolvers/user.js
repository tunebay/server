import formatErrors from '../lib/formatErrors';

import { tryLogin } from '../lib/auth';

export default {
  Query: {
    allUsers: (parent: *, args: *, { models: { User } }: Context, info: *) =>
      User.findAll(),
    getUser: (parent: *, req: *, { models: { User } }: Context, info: *) => {
      try {
        const { id, username } = req;
        return id ? User.findById(id) : User.findOne({ where: { username } });
      } catch (e) {
        return null;
      }
    },
  },
  Mutation: {
    signup: async (parent: *, args: *, { models }: Context, info: *) => {
      try {
        const user = await models.User.create(args);
        return { ok: true, user };
      } catch (e) {
        return { ok: false, errors: formatErrors(e, models) };
      }
    },
    login: async (
      parent: *,
      { emailOrUsername, password }: *,
      { models, jwtSecret, jwtRefreshSecret }: Context,
      info: *
    ) => tryLogin(emailOrUsername, password, models, jwtSecret, jwtRefreshSecret),
  },
  User: {
    playlists: (parent: *, args: *, { models: { Playlist } }: Context, info: *) =>
      Playlist.findAll({ where: { userId: parent.id } }),
  },
};
