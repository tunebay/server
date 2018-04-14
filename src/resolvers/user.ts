import { ResolverMap, AuthResponse } from '../@types';
import bycrpt from 'bcrypt';

const userResolver: ResolverMap = {
  Query: {
    allUsers(parent, args, { models: { User } }, info) {
      return User.find();
    },
    getUser(parent, args, { models: { User } }, info) {
      try {
        const { id, username } = args;
        return id ? User.findOneById(id) : User.findByUsername(username);
      } catch (e) {
        return null;
      }
    },
    currentUser(parent, args, { req, models: { User } }, info) {
      if (req.session && req.session.userId) {
        return User.findOneById(req.session.userId);
      } else {
        return null;
      }
    },
  },
  Mutation: {
    async signup(parent, args, { models: { User }, req }, info): Promise<AuthResponse> {
      try {
        const user = User.create(args);
        await user.save();
        if (req.session) {
          req.session.userId = user.id;
        }
        return {
          ok: true,
          user,
        };
      } catch (error) {
        console.log('ERROR', error);
        return {
          ok: false,
          errors: [error],
        };
      }
    },
    async login(
      parent,
      { emailOrUsername, password }: { emailOrUsername: string; password: string },
      { models: { User }, req },
      info
    ): Promise<AuthResponse> {
      try {
        const isEmail = emailOrUsername.includes('@');
        const user = isEmail
          ? await User.findOne({ where: { email: emailOrUsername } })
          : await User.findByUsername(emailOrUsername);

        if (!user) throw Error('Invalid credentials');

        const valid = await bycrpt.compare(password, user.password);

        if (!valid) throw Error('Invalid credentials');

        if (req.session) {
          req.session.userId = user.id;
        }
        return { ok: true, user };
      } catch (error) {
        return {
          ok: false,
          errors: [error],
        };
      }
    },
  },
  User: {
    playlists(parent: { id: string }, args, { models: { Playlist } }, info) {
      return Playlist.find({ where: { userId: parent.id } });
    },
  },
};

export default userResolver;
