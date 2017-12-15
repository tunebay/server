// @flow
import type { DataTypes } from 'sequelize'

import type { ModelsType, ModelType } from '../types'

export default (sequelize: *, types: DataTypes): ModelType => {
  const Team = sequelize.define('team', {
    name: { type: types.STRING, unique: true },
  })

  Team.associate = (models: ModelsType) => {
    Team.belongsToMany(models.User, {
      through: 'member',
      foreignKey: {
        name: 'teamId',
        field: 'team_id',
      },
    })
    Team.belongsTo(models.User, {
      foreignKey: {
        name: 'owner',
        allowNull: false,
      },
    })
  }

  return Team
}
