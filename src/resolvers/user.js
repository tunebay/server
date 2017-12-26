// @flow
import User from '../database/User';
import Playlist from '../database/Playlist';

export default {
  Query: {
    allUsers: (parent: *, args: *, context: *, info: *) => User.findAll(),
    getUser: (parent: *, { id }: *, context: *, info: *) => User.findById(id),
  },
  User: {
    playlists: (parent: *, args: *, context: *, info: *) =>
      Playlist.findAllByUserId(parent.id),
  },
};
