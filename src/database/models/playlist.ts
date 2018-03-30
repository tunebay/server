import sequelize, { Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize, DataTypes: DataTypes) => {
  const Playlist = sequelize.define(
    'playlist',
    {
      artwork: {
        type: DataTypes.STRING,
        validate: { isUrl: true },
      },
      permalink: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { isUrl: true },
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { isUrl: true },
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: DataTypes.FLOAT,
      public: { type: DataTypes.BOOLEAN, allowNull: false },

      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
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
