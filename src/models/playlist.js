// @flow
export default (sequelize: any, DataTypes: any) => {
  const Playlist = sequelize.define('playlist', {
    artwork: DataTypes.STRING,
    permalink: DataTypes.STRING,
    title: DataTypes.STRING,
    price: DataTypes.FLOAT,
    public: DataTypes.BOOLEAN,
  });

  Playlist.associate = models => {
    Playlist.belongsTo(models.User, {
      foreignKey: { name: 'userId', field: 'user_id' },
    });
  };

  return Playlist;
};
