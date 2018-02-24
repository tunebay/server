// @flow
export default (sequelize: any, DataTypes: any) => {
  const User = sequelize.define('user', {
    avatar: DataTypes.STRING,
    bio: DataTypes.STRING,
    cover: DataTypes.STRING,
    name: DataTypes.STRING,
    photo: DataTypes.STRING,
    username: { type: DataTypes.STRING, unique: true },
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
  });

  return User;
};
