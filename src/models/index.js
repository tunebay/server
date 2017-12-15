// @flow
import Sequelize from 'sequelize'

import type { ModelsType } from '../types'

export const sequelize = new Sequelize('slack', 'postgres', 'postgres', {
  dialect: 'postgres',
  define: { underscored: true },
})

const models: ModelsType = {
  User: sequelize.import('./user'),
  Channel: sequelize.import('./channel'),
  Message: sequelize.import('./message'),
  Team: sequelize.import('./team'),
}

Object.keys(models).forEach(modelName => {
  if ('associate' in models[modelName]) {
    // $FlowFixMe
    models[modelName].associate(models)
  }
})

export default models
