import { DataTypes, Sequelize } from 'sequelize';

export default (sequelize: Sequelize, dataTypes: DataTypes) => {
  const Playlist = sequelize.define(
    'playlist',
    {
      artwork: {
        type: dataTypes.STRING,
        validate: { isUrl: true },
      },
      permalink: {
        type: dataTypes.STRING,
        allowNull: false,
        validate: { isUrl: true },
      },
      url: {
        type: dataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { isUrl: true },
      },
      title: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      price: dataTypes.FLOAT,
      public: { type: dataTypes.BOOLEAN, allowNull: false },

      createdAt: {
        allowNull: false,
        type: dataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        field: 'created_at',
      },
    },
    { timestamps: false }
  );

  Playlist.associate = models => {
    Playlist.belongsTo(models.User, {
      foreignKey: { name: 'userId', field: 'user_id' },
    });
  };

  return Playlist;
};
