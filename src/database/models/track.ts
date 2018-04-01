import { DataTypes, Sequelize } from 'sequelize';

export default (sequelize: Sequelize, dataTypes: DataTypes) => {
  const Track = sequelize.define(
    'track',
    {
      title: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: dataTypes.FLOAT,
        validate: { isFloat: true },
      },
      playlistPosition: {
        type: dataTypes.INTEGER,
        allowNull: false,
        field: 'playlist_position',
        validate: { isInt: true },
      },
      duration: { type: dataTypes.INTEGER },

      createdAt: {
        allowNull: false,
        type: dataTypes.DATE,
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
