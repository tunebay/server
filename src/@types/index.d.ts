import { User } from '../entity/User';
import { Playlist } from '../entity/Playlist';
import { Track } from '../entity/Track';
import { Request } from 'express';

export type Context = {
  req?: Request;
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

export type SessionRequest = Request & {
  session?: Express.Session;
  sessionID?: string;
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
