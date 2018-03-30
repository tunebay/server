export default {
  development: {
    username: 'postgres',
    password: 'postgres',
    database: 'tunebay_dev',
    host: '127.0.0.1',
    dialect: 'postgres',
    define: {
      underscored: true,
    },
  },
  test: {
    username: 'postgres',
    password: 'postgres',
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'postgres',
    define: {
      underscored: true,
    },
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'database_production',
    host: process.env.DB_HOST,
    dialect: 'postgres',
    define: {
      underscored: true,
    },
  },
};
