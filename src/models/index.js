// @flow
import path from 'path';

import Sequlize from 'sequelize';

const sequelize = new Sequlize('tunebay_dev', 'postgres', 'postgres', {
  dialect: 'postgres',
  define: {
    underscored: true,
  },
});

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
