module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('playlists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      artwork: Sequelize.STRING,
      permalink: { type: Sequelize.STRING, allowNull: false },
      url: { type: Sequelize.STRING, allowNull: false, unique: true },
      title: { type: Sequelize.STRING, allowNull: false },
      price: Sequelize.FLOAT,
      public: { type: Sequelize.BOOLEAN, allowNull: false },

      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
      },
    }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('playlists'),
};
