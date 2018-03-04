// @flow
import path from 'path'; // eslint-disable-line import/order
import Sequelize from 'sequelize';

import { type ModelsType } from '../../lib/flowTypes';

import config from '../config/config';

const env = process.env.NODE_ENV || 'development';

const sequelize = new Sequelize(
  config[env].database,
  config[env].username,
  config[env].password,
  config[env],
);

const models: ModelsType = {
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
