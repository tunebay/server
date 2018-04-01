export interface User {
  avatar?: string;
  bio?: string;
  coverPhoto?: string;
  id: number;
  name: string;
  profilePicture?: string;
  playlists?: Array<Playlist>;
  username: string;
  email: string;
  createdAt?: string;
  password: string;
}

export interface Playlist {
  artist: User;
  artwork?: string;
  public?: boolean;
  id: number;
  permalink: string;
  url: string;
  price: number;
  supporters?: Array<User>;
  title: string;
  tracks?: Array<Track>;
  createdAt: String;
  userId: number;
}

export interface Track {
  duration: number;
  playlistId: number;
  id: number;
  title: string;
  playlistPosition: number;
  price?: number;
  createdAt: string;
}

export interface RegisterResponse {
  ok: boolean;
  user: User;
  errors?: Error[];
}

export type LoginResponse = {
  ok: boolean;
  errors?: Array<Error>;
  token: String;
  refreshToken: string;
};

export type Error = {
  path: string;
  message: string;
};

// export interface Models {
//   User: Model<any, any>;
//   Playlist: Model<any, any>;
//   Track: Model<any, any>;
//   // index signature lets typescript know that this object cant be accessed like this
//   [key: string]: Model<any, any>;
// }

type Context = {
  user: { id: string };
};

export type Resolver = (parent: any, args: any, context: Context, info: any) => any;

export interface ResolverMap {
  [key: string]: {
    [key: string]: Resolver;
  };
}
