// @flow
import type { DataTypes } from 'sequelize'

export default (sequelize: *, types: DataTypes) => {
  const Channel = sequelize.define('channel', {
    name: types.STRING,
    public: types.BOOLEAN,
  })

  Channel.associate = models => {
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
