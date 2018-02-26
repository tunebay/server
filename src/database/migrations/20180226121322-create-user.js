module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      avatar: Sequelize.STRING,
      bio: Sequelize.TEXT,
      coverPhoto: { type: Sequelize.STRING, field: 'cover_photo' },
      name: { type: Sequelize.STRING, allowNull: false },
      profilePicture: { type: Sequelize.STRING, field: 'profile_picture' },
      provider: { type: Sequelize.STRING, allowNull: false },
      username: { type: Sequelize.STRING, unique: true, allowNull: false },
      email: { type: Sequelize.STRING, unique: true, allowNull: false },
      password: { type: Sequelize.STRING, allowNull: false },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
      },
    }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('users'),
};
