import { Schema, Document } from 'mongoose'
import { unit } from '../type'
import mongoosePaginate from 'mongoose-paginate-v2'

export interface IEdible extends Document {
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

const edibleSchema = new Schema<IEdible>({
  name: { type: String, required: true },
  unit: { type: String, required: true, enum: unit },
  calories: { type: Number, required: true },
  weight: { type: Number, required: true },
  protein: { type: Number, required: true },
  fat: { type: Number, required: true },
  carbohydrates: { type: Number, required: true },
  fiber: { type: Number, required: true },
  sugar: { type: Number, required: true }
})

edibleSchema.plugin(mongoosePaginate)

export default edibleSchema
