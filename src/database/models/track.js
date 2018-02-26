// @flow
export default (sequelize: any, DataTypes: any) => {
  const Track = sequelize.define('track', {
    title: { type: DataTypes.STRING, allowNull: false },
    price: DataTypes.FLOAT,
    playlistPosition: { type: DataTypes.INTEGER, allowNull: false, field: 'playlist_position' },
    duration: DataTypes.INTEGER,
  });

  Track.associate = models => {
    Track.belongsTo(models.Playlist, {
      foreignKey: { name: 'playlistId', field: 'playlist_id' },
    });
  };

  return Track;
};
