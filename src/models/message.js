// @flow
import type { DataTypes } from 'sequelize'

import type { ModelsType, ModelType } from '../types'

export default (sequelize: *, types: DataTypes): ModelType => {
  const Message = sequelize.define('message', {
    name: { type: types.STRING, unique: true },
  })

  Message.associate = (models: ModelsType) => {
    // 1:m
    Message.belongsTo(models.Channel, {
      foreignKey: {
        name: 'channelId',
        field: 'channel_id',
      },
    })
    Message.belongsTo(models.User, {
      foreignKey: {
        name: 'userId',
        field: 'user_id',
      },
    })
  }

  return Message
}
