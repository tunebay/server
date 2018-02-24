// @flow
export default (sequelize: any, DataTypes: any) => {
  const Track = sequelize.define('track', {
    title: DataTypes.STRING,
    price: DataTypes.FLOAT,
    position: DataTypes.INTEGER,
    duration: DataTypes.INTEGER,
  });

  Track.associate = models => {
    Track.belongsTo(models.Playlist, {
      foreignKey: { name: 'playlistId', field: 'playlist_id' },
    });
  };

  return Track;
};
