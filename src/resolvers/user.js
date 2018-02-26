// @flow
export default {
  Query: {
    allUsers: (parent: *, args: *, { models: { User }, user }: *, info: *) => User.findAll(),
    getUser: (parent: *, req: *, { models: { User }, user }: *, info: *) => {
      try {
        const { id, username } = req;
        return id ? User.findById(id) : User.findOne({ where: { username } });
      } catch (e) {
        console.log('Error', e);
        return null;
      }
    },
  },
  Mutation: {
    createUser: (parent: *, args: *, { models }: *, info: *) => models.User.create(args),
  },
  User: {
    playlists: (parent: *, args: *, { models: { Playlist } }: *, info: *) =>
      Playlist.findAll({ where: { userId: parent.id } }),
  },
};
