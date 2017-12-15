// @flow
import type { DataTypes } from 'sequelize'

import type { ModelsType, ModelType } from '../types'

export default (sequelize: *, types: DataTypes): ModelType => {
  const Message = sequelize.define('message', {
    text: types.STRING,
  })

  Message.associate = (models: ModelsType) => {
    // 1:m
    Message.belongsTo(models.Channel, {
      foreignKey: {
        name: 'channelId',
        field: 'channel_id',
        allowNull: false,
      },
    })
    Message.belongsTo(models.User, {
      foreignKey: {
        name: 'userId',
        field: 'user_id',
        allowNull: false,
      },
    })
  }

  return Message
}
