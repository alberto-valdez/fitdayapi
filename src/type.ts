export enum unit {
  Kg = 'KG',
  G = 'G',
  Mg = 'MG',
  L = 'L',
  Ml = 'ML',
  Piece = 'PIECE',
  Cup = 'CUP',
  Bottle = 'BOTTLE',
}

export interface edible {
  name: string
  unit: unit
  calories: number
  weight: number
  protein: number
  fat: number
  carbohydrates: number
  fiber: number
  sugar: number
}

export interface MongoDbSettings {
  user: string
  password: string
  nameDb: string
}
