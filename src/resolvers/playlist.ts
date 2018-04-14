import { ResolverMap } from '../@types';

const playlistResolver: ResolverMap = {
  Query: {
    allPlaylists(parent, args, { models: { Playlist } }, info) {
      return Playlist.find();
    },
    async getPlaylist(
      parent,
      args: { id: number; username: string; permalink: string },
      { models: { Playlist, User } },
      info
    ) {
      try {
        const { id, username, permalink } = args;
        if (id) return Playlist.findOneById(id);

        if (!username || !permalink) {
          throw new Error(
            'You must porvide either both a username and permalink or a playlidId'
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
    artist({ userId }, args, { models: { User } }, info) {
      return User.findOneById(userId);
    },
    tracks(parent, args, { models: { Track } }, info) {
      return Track.find({ where: { playlistId: parent.id } });
    },
  },
};

export default playlistResolver;
