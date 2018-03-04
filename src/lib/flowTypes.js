// @flow
/* eslint no-use-before-define: 0 */

export type UserType = {|
  avatar?: string,
  bio?: string,
  coverPhoto?: string,
  id: number,
  name: string,
  profilePicture?: string,
  playlists?: Array<PlaylistType>,
  username: string,
  email: string,
  createdAt?: string,
|};

export type PlaylistType = {|
  artist: UserType,
  artwork?: string,
  public?: boolean,
  id: number,
  permalink: string,
  url: string,
  price: number,
  supporters?: Array<UserType>,
  title: string,
  tracks?: Array<TrackType>,
  createdAt: String,
  userId: number,
|};

export type TrackType = {|
  duration: number,
  playlistId: number,
  id: number,
  title: string,
  playlistPosition: number,
  price?: number,
  createdAt: string,
|};

export type RegisterResponseType = {|
  ok: boolean,
  user: UserType,
  errors: Array<UserType>,
|};

export type LoginResponseType = {|
  ok: boolean,
  errors?: Array<Error>,
  token: String,
  refreshToken: string,
|};

export type ErrorType = {|
  path: string,
  message: string,
|};

// TODO type these properly
export type ModelsType = {|
  User: *,
  Playlist: *,
  Track: *,
  Sequelize: *,
  sequelize: *,
|};

export type Context = {|
  models: ModelsType,
  user?: {| id: number |},
  jwtSecret?: ?string,
  jwtRefreshSecret?: ?string,
|};
