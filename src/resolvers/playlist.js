// @flow
import Playlist from '../database/Playlist';
import User from '../database/User';
import tracks from '../database/Track';

export default {
  Query: {
    async allPlaylists(parent: *, args: *, { models }: *, info: *) {
      return Playlist.findAll();
    },
    getPlaylist(
      parent: *,
      args: { id: number, username: string, permalink: string },
      context: *,
      info: *,
    ) {
      try {
        const { id, username, permalink } = args;
        if (id) return Playlist.findById(id);

        if (!username || !permalink) {
          throw new Error('You must porvide either username & permalink or playlidId');
        }

        const user = User.findByUsername(username);
        if (!user) return null;

        return Playlist.findByPath(user.id, permalink);
      } catch (e) {
        console.log(e);
        return e;
      }
    },
  },
  Playlist: {
    artist: ({ userId }: *, args: *, context: *, info: *) => User.findById(userId),
    tracks: (parent: *, args: *, context: *, info: *) => tracks.findByPlaylistId(parent.id),
  },
};
