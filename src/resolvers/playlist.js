// @flow
import Playlist from '../database/Playlist';
import User from '../database/User';

export default {
  Query: {
    allPlaylists: (parent: *, args: *, context: *, info: *) =>
      Playlist.findAll(),
    getPlaylist: (parent: *, { id }: *, context: *, info: *) =>
      Playlist.findById(id),
  },
  Playlist: {
    artist: ({ userId }: *, args: *, context: *, info: *) =>
      User.findById(userId),
  },
};
