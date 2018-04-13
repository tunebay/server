import { ResolverMap } from '../@types';

const userResolver: ResolverMap = {
  Query: {
    allUsers(parent, args, { models: { User } }, info) {
      return User.find();
    },
    getUser(parent, args, { models: { User } }, info) {
      try {
        const { id, username } = args;
        return id ? User.findOneById(id) : User.findByUsername(username);
      } catch (e) {
        return null;
      }
    },
  },
  User: {
    playlists(parent: { id: string }, args, { models: { Playlist } }, info) {
      return Playlist.find({ where: { userId: parent.id } });
    },
  },
};

export default userResolver;
