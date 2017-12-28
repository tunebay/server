// @flow
import User from '../database/User';
import Playlist from '../database/Playlist';

export default {
  Query: {
    allUsers: (parent: *, args: *, context: *, info: *) => User.findAll(),
    getUser: (parent: *, req: *, context: *, info: *) => {
      const { id, username } = req;
      return id ? User.findById(id) : User.findByUsername(username);
    },
  },
  User: {
    playlists: (parent: *, args: *, context: *, info: *) =>
      Playlist.findAllByUserId(parent.id),
  },
};
