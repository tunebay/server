export default (sequelize: any, DataTypes: any) => {
  const Track = sequelize.define(
    'track',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        validate: { isFloat: true },
      },
      playlistPosition: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'playlist_position',
        validate: { isInt: true },
      },
      duration: { type: DataTypes.INTEGER },

      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        field: 'created_at',
      },
    },
    { timestamps: false }
  );

  Track.associate = models => {
    Track.belongsTo(models.Playlist, {
      foreignKey: { name: 'playlistId', field: 'playlist_id' },
    });
  };

  return Track;
};
