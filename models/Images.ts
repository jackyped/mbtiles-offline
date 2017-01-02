import * as Sequelize from 'sequelize-offline'
import { BLOB, DefineAttributes, INTEGER } from 'sequelize-offline'

/**
 * Images  for MBTiles SQL Model
 */
export interface Attributes {
  tile_data: Buffer
  tile_id: number
}

/**
 * Images Instance for MBTiles SQL Model
 */
export interface Instance extends Sequelize.Instance<Attributes>, Attributes { }

/**
 * Images Model for MBTiles SQL Model
 */
export interface Model extends Sequelize.Model<Instance, Attributes> { }

export const scheme: DefineAttributes = {
  tile_data: { type: BLOB },
  tile_id:   { type: INTEGER, primaryKey: true, unique: true },
}
