// @flow
import type { DataTypes } from 'sequelize'

export default (sequelize: *, types: DataTypes) => {
  const Team = sequelize.define('team', {
    name: { type: types.STRING, unique: true },
  })

  Team.associate = models => {
    Team.belongsToMany(models.User, {
      through: 'member',
      foreignKey: 'teamId',
    })
    Team.belongsTo(models.User, {
      foreignKey: 'owner',
    })
  }

  return Team
}
