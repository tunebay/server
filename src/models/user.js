// @flow
import type { DataTypes } from 'sequelize'

import type { ModelsType, ModelType } from '../types'

export default (sequelize: *, types: DataTypes): ModelType => {
  const User = sequelize.define('user', {
    username: { type: types.STRING, unique: true },
    email: { type: types.STRING, unique: true },
    password: types.STRING,
  })

  User.associate = (models: ModelsType) => {
    User.belongsToMany(models.Team, {
      through: 'member',
      foreignKey: {
        name: 'userId',
        field: 'user_id',
      },
    })
    User.belongsToMany(models.Channel, {
      through: 'channel_member',
      foreignKey: {
        name: 'userId',
        field: 'user_id',
      },
    })
  }

  return User
}
