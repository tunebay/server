// @flow
import bcrypt from 'bcrypt';

import formatErrors from '../lib/formatErrors';

export default {
  Query: {
    allUsers: (parent: *, args: *, { models: { User }, user }: *, info: *) => User.findAll(),
    getUser: (parent: *, req: *, { models: { User }, user }: *, info: *) => {
      try {
        const { id, username } = req;
        return id ? User.findById(id) : User.findOne({ where: { username } });
      } catch (e) {
        return null;
      }
    },
  },
  Mutation: {
    register: async (parent: *, { password, ...otherArgs }: *, { models }: *, info: *) => {
      if (password.length < 8) {
        return {
          ok: false,
          errors: [{ path: 'password', message: 'password must be longer than 8 characters' }],
        };
      }
      try {
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await models.User.create({ ...otherArgs, password: hashedPassword });
        return {
          ok: true,
          user,
        };
      } catch (e) {
        return {
          ok: false,
          errors: formatErrors(e, models),
        };
      }
    },
  },
  User: {
    playlists: (parent: *, args: *, { models: { Playlist } }: *, info: *) =>
      Playlist.findAll({ where: { userId: parent.id } }),
  },
};
