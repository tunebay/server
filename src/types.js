// @flow
import { Model } from 'sequelize'

export type ModelType = typeof Model

export type ModelsType = {
  User: ModelType,
  Channel: ModelType,
  Message: ModelType,
  Team: ModelType,
}

export type UserType = {|
  id: number,
|}

export type Context = {|
  models: ModelsType,
  user: UserType,
|}
