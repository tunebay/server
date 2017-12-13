// @flow
import type { DataTypes } from 'sequelize'

export default (sequelize: *, types: DataTypes) => {
  const Message = sequelize.define('message', {
    name: { type: types.STRING, unique: true },
  })

  Message.associate = models => {
    // 1:m
    Message.belongsTo(models.Channel, {
      foreignKey: 'channelId',
    })
    Message.belongsTo(models.User, {
      foreignKey: 'userId',
    })
  }

  return Message
}
