// @flow
import Sequelize, { Model } from 'sequelize'

const sequelize = new Sequelize('slack', 'postgres', 'postgres', {
  dialect: 'postgres',
})

type ModelsType = {
  User: typeof Model,
  Channel: typeof Model,
  Message: typeof Model,
  Team: typeof Model,
  sequelize: typeof sequelize,
  Sequelize: typeof Sequelize,
}

const models: ModelsType = {
  User: sequelize.import('./user'),
  Channel: sequelize.import('./channel'),
  Message: sequelize.import('./message'),
  Team: sequelize.import('./team'),

  sequelize,
  Sequelize,
}

Object.keys(models).forEach(modelName => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models)
  }
})

export default models
