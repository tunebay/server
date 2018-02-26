// @flow
import path from 'path'; // eslint-disable-line import/order
import Sequlize from 'sequelize';

import config from '../config/config';

console.log('config', config);

const env = process.env.NODE_ENV || 'development';

const sequelize = new Sequlize(
  config[env].database,
  config[env].username,
  config[env].password,
  config[env],
);

const models: any = {
  User: sequelize.import(path.join(__dirname, './user')),
  Playlist: sequelize.import(path.join(__dirname, './playlist')),
  Track: sequelize.import(path.join(__dirname, './track')),
};

Object.keys(models).forEach(modelName => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.Sequlize = Sequlize;
models.sequelize = sequelize;

export default models;
