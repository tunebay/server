// @flow
export default (sequelize: any, DataTypes: any) => {
  const Playlist = sequelize.define(
    'playlist',
    {
      artwork: DataTypes.STRING,
      permalink: { type: DataTypes.STRING, allowNull: false },
      url: { type: DataTypes.STRING, allowNull: false, unique: true },
      title: { type: DataTypes.STRING, allowNull: false },
      price: DataTypes.FLOAT,
      public: { type: DataTypes.BOOLEAN, allowNull: false },

      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        field: 'created_at',
      },
    },
    { timestamps: false },
  );

  Playlist.associate = models => {
    Playlist.belongsTo(models.User, {
      foreignKey: { name: 'userId', field: 'user_id' },
    });
  };

  return Playlist;
};
