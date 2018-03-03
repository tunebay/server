// @flow
import bcrypt from 'bcrypt';

export default {
  Query: {
    allUsers: (parent: *, args: *, { models: { User }, user }: *, info: *) => User.findAll(),
    getUser: (parent: *, req: *, { models: { User }, user }: *, info: *) => {
      try {
        const { id, username } = req;
        return id ? User.findById(id) : User.findOne({ where: { username } });
      } catch (e) {
        console.log('Error', e);
        return null;
      }
    },
  },
  Mutation: {
    register: async (parent: *, { password, ...otherArgs }: *, { models }: *, info: *) => {
      try {
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = models.User.create({ ...otherArgs, password: hashedPassword });
        console.log('CREATED USER: ', user);
        return true;
      } catch (e) {
        return false;
      }
    },
  },
  User: {
    playlists: (parent: *, args: *, { models: { Playlist } }: *, info: *) =>
      Playlist.findAll({ where: { userId: parent.id } }),
  },
};
