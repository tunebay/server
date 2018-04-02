// import formatErrors from '../lib/formatErrors';
import { ResolverMap } from '../@types';
import { User } from '../entity/User';
import { Playlist } from '../entity/Playlist';

const userResolver: ResolverMap = {
  Query: {
    allUsers(parent, args, context, info) {
      return User.find();
    },
    getUser(parent, args, context, info) {
      try {
        const { id, username } = args;
        return id ? User.findOneById(id) : User.findByUsername(username);
      } catch (e) {
        return null;
      }
    },
  },
  User: {
    playlists(parent: { id: string /* ..rest */ }, args, context, info) {
      return Playlist.find({ where: { userId: parent.id } });
    },
  },
};

export default userResolver;
