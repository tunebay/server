import { User } from '../entity/User';
import { Playlist } from '../entity/Playlist';
import { Track } from '../entity/Track';
import { Request } from 'express';

export type Context = {
  req: SessionRequest;
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
  name: string;
  message: string;
  stack?: string;
};

export type SessionRequest = Request & {
  session?: Express.Session;
  sessionID?: string;
};

export interface AuthResponse {
  ok: boolean;
  user?: User;
  errors?: Error[];
}
