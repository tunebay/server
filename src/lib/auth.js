// @flow
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { type ModelsType, type UserType } from './flowTypes';

export const createTokens = (
  user: *,
  jwtSecret: string,
  refreshSecret: string,
): [string, string] => {
  const createToken = jwt.sign({ user: user.id }, jwtSecret, { expiresIn: '1h' });
  const createRefreshToken = jwt.sign({ user: user.id }, refreshSecret, { expiresIn: '7d' });
  return [createToken, createRefreshToken];
};

export const tryLogin = async (
  emailOrUsername: string,
  password: string,
  { User }: ModelsType,
  jwtSecret: string,
  jwtRefreshSecret: string,
) => {
  const isEmail = emailOrUsername.includes('@');

  const user: UserType = isEmail
    ? await User.findOne({ where: { email: emailOrUsername }, raw: true })
    : await User.findOne({ where: { username: emailOrUsername }, raw: true });

  if (!user) {
    return {
      ok: false,
      errors: [{ path: 'email', message: 'Incorrect email address or password.' }],
    };
  }

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    return {
      ok: false,
      errors: [{ path: 'password', message: 'Incorrect email address or password.' }],
    };
  }

  // if user changes their password this will i
  const refreshTokenSecret = jwtRefreshSecret + user.password;

  const [token, refreshToken] = await createTokens(user, jwtSecret, refreshTokenSecret);

  return {
    ok: true,
    token,
    refreshToken,
  };
};
