// @flow
import User from '../database/User';
import Playlist from '../database/Playlist';

export default {
  Query: {
    allUsers: (parent: *, args: *, context: *, info: *) => User.findAll(),
    getUser: (parent: *, req: *, context: *, info: *) => {
      try {
        const { id, username } = req;
        return id ? User.findById(id) : User.findByUsername(username);
      } catch (e) {
        console.log('Error', e);
        return null;
      }
    },
  },
  User: {
    playlists: (parent: *, args: *, context: *, info: *) =>
      Playlist.findAllByUserId(parent.id),
  },
};
