import { Context } from '../lib/types';

export default {
  Query: {
    allPlaylists: ({}, {}, { models: { Playlist } }: Context) => Playlist.findAll(),
    async getPlaylist(
      parent: any,
      args: { id: number; username: string; permalink: string },
      { models: { Playlist, User } }: Context
    ) {
      try {
        const { id, username, permalink } = args;
        if (id) return Playlist.findById(id);

        if (!username || !permalink) {
          throw new Error(
            'You must porvide either username & permalink or playlidId'
          );
        }

        const user = await User.findOne({ where: { username } });
        if (!user) return null;

        return Playlist.findOne({ where: { userId: user.id, permalink } });
      } catch (e) {
        console.log(e);
        return e;
      }
    },
  },
  Playlist: {
    artist: ({ userId }: any, args: any, { models: { User } }: Context) =>
      User.findById(userId),
    tracks: (parent: any, args: any, { models: { Track } }: Context) =>
      Track.findAll({ where: { playlistId: parent.id } }),
  },
};
