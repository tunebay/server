import { ResolverMap } from '../@types';

const playlistResolver: ResolverMap = {
  Query: {
    allPlaylists(parent, args, context, info) {
      return Playlist.findAll();
    },
    async getPlaylist(
      parent,
      args: { id: number; username: string; permalink: string },
      { models: { Playlist, User } },
      info
    ) {
      try {
        const { id, username, permalink } = args;
        if (id) return Playlist.findById(id);

        if (!username || !permalink) {
          throw new Error('You must porvide either username & permalink or playlidId');
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
    artist({ userId }, args, { models: { User } }, info) {
      return User.findById(userId);
    },
    tracks(parent, args, { models: { Track } }, info) {
      return Track.findAll({ where: { playlistId: parent.id } });
    },
  },
};

export default playlistResolver;
