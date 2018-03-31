import path from 'path';
import Sequelize from 'sequelize';

import config from '../config/config';

const env: string = (process.env.NODE_ENV as string) || 'development';

const sequelize = new Sequelize(
  config[env].database,
  config[env].username,
  config[env].password,
  config[env]
);

const models = {
  User: sequelize.import(path.join(__dirname, './user')),
  Playlist: sequelize.import(path.join(__dirname, './playlist')),
  Track: sequelize.import(path.join(__dirname, './track')),

  sequelize,
  Sequelize,
};

Object.keys(models).forEach(modelName => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

export default models;
