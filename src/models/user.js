// @flow
export default (sequelize: any, DataTypes: any) => {
  const User = sequelize.define('user', {
    avatar: DataTypes.STRING,
    bio: DataTypes.STRING,
    coverPhoto: { type: DataTypes.STRING, field: 'cover_photo' },
    name: { type: DataTypes.STRING, allowNull: false },
    profilePicture: { type: DataTypes.STRING, field: 'profile_picture' },
    provider: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, unique: true, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
  });

  return User;
};
