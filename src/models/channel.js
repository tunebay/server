// @flow
import type { DataTypes } from 'sequelize'

import type { ModelsType, ModelType } from '../types'

export default (sequelize: *, types: DataTypes): ModelType => {
  const Channel = sequelize.define('channel', {
    name: types.STRING,
    public: types.BOOLEAN,
  })

  Channel.associate = (models: ModelsType) => {
    // 1:m
    Channel.belongsTo(models.Team, {
      foreignKey: {
        name: 'teamId',
        field: 'team_id',
      },
    })
    Channel.belongsToMany(models.User, {
      through: 'channel_member',
      foreignKey: {
        name: 'channelId',
        field: 'channel_id',
      },
    })
  }

  return Channel
}
