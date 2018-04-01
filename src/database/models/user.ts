import bcrypt from 'bcrypt';
import { DataTypes, Sequelize, Model } from 'sequelize';

import reservedUsernames from '../../lib/reservedUsernames';

export default (sequelize: Sequelize, dataTypes: DataTypes) => {
  const User = sequelize.define(
    'user',
    {
      avatar: {
        type: dataTypes.STRING,
        validate: { isUrl: true },
      },
      bio: dataTypes.TEXT,
      coverPhoto: {
        type: dataTypes.STRING,
        field: 'cover_photo',
        validate: { isUrl: true },
      },
      name: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      profilePicture: {
        type: dataTypes.STRING,
        field: 'profile_picture',
        validate: { isUrl: true },
      },
      username: {
        type: dataTypes.STRING,
        // unique: { args: true, msg: 'Username is already in use' },
        allowNull: false,
        validate: {
          isAlphanumeric: {
            args: true,
            msg: 'Usernames can only contain letters and numbers',
          },
          len: {
            args: [3, 25],
            msg: 'Usernames must be between 3 and 25 characters long',
          },
          isNotReserved: (username: string) => {
            if (reservedUsernames.indexOf(username)) {
              throw new Error('Username reserved');
            }
          },
        },
      },
      email: {
        type: dataTypes.STRING,
        // unique: { args: true, msg: 'Email is already in use' }, // TODO
        allowNull: false,
        validate: { isEmail: { args: true, msg: 'Enter a valid email' } },
      },
      password: {
        type: dataTypes.STRING,
        allowNull: false,
        validate: {
          len: { args: [8, 500], msg: 'Password must be atleast 8 characters long' },
        },
      },

      createdAt: {
        allowNull: false,
        type: dataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        field: 'created_at',
      },
    },
    {
      timestamps: false,
      hooks: {
        afterValidate: async user => {
          const hasedPassword = await bcrypt.hash(user.password, 12);
          user.password = hasedPassword;
        },
      },
    }
  );

  return User;
};
