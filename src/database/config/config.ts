interface Config {
  development: Option;
  test: Option;
  production: Option;
  // index signature
  [key: string]: Option;
}

interface Option {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: string;
  define: { underscored: boolean };
}

const config: Config = {
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
    username: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    database: 'database_production',
    host: process.env.DB_HOST as string,
    dialect: 'postgres',
    define: {
      underscored: true,
    },
  },
};

export default config;
