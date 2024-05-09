import mongoose from 'mongoose'
import { MongoDbSettings } from '../type'

const settings: MongoDbSettings = {
  user: process.env.MONGO_USER as string,
  password: process.env.MONGO_PASSWORD as string,
  nameDb: process.env.NAME_DB as string
}

class DB {
  urlDb: string
  constructor () {
    this.urlDb = `mongodb+srv://${settings.user}:${settings.password}@cluster24.esdabc4.mongodb.net/?retryWrites=true&w=majority&appName=${settings.nameDb}`
  }

  async connectDB (): Promise<void> {
    try {
      console.log('[DB connection] Init..')
      await mongoose.connect(this.urlDb)
      console.log('[DB connection] Success: Connection started...')
    } catch (error) {
      console.log('[DB connection] Error: ', error)
    }
  }
}

export default new DB()
