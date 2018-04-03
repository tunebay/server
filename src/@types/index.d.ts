import { User } from '../entity/User';
import { Playlist } from '../entity/Playlist';
import { Track } from '../entity/Track';

export type Context = {
  user: { id: number };
  models: {
    User: typeof User;
    Playlist: typeof Playlist;
    Track: typeof Track;
  };
};

export type Resolver = (parent: any, args: any, context: Context, info: any) => any;

export interface ResolverMap {
  [key: string]: {
    [key: string]: Resolver;
  };
}

export type Error = {
  path: string;
  message: string;
};

// export interface RegisterResponse {
//   ok: boolean;
//   user: User;
//   errors?: Error[];
// }

// export type LoginResponse = {
//   ok: boolean;
//   errors?: Array<Error>;
//   token: String;
//   refreshToken: string;
// };
