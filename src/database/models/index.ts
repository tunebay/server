import path from 'path';
import Sequelize, { Model } from 'sequelize';

import { Models } from '../../lib/types';

import config from '../config/config';

const env: string = (process.env.NODE_ENV as string) || 'development';

const sequelize = new Sequelize(
  config[env].database,
  config[env].username,
  config[env].password,
  config[env]
);

const models: Models = {
  User: sequelize.import(path.join(__dirname, './user')) as Model<any, any>,
  Playlist: sequelize.import(path.join(__dirname, './playlist')) as Model<any, any>,
  Track: sequelize.import(path.join(__dirname, './track')) as Model<any, any>,
};

Object.keys(models).forEach(modelName => {
  const model = models[modelName];
  if ('associate' in model && model.associate) {
    model.associate(models);
  }
});

export default models;
