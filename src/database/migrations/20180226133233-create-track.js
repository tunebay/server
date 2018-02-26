module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('tracks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      title: { type: Sequelize.STRING, allowNull: false },
      price: Sequelize.FLOAT,
      playlistPosition: { type: Sequelize.INTEGER, allowNull: false, field: 'playlist_position' },
      duration: Sequelize.INTEGER,

      playlistId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'playlists',
          key: 'id',
        },
        field: 'playlist_id',
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
      },
    }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('tracks'),
};
