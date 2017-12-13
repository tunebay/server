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
      foreignKey: 'teamId',
    })
  }

  return Channel
}
