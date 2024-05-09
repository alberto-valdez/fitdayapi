import express from 'express'
import ediblesRoute from './routes/edibles'
import cors from 'cors'
import bodyParser from 'body-parser'
import db from './utils/db'

const app = express()
app.use(cors({
  credentials: true
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const PORT = 3000

app.use('/api/edible', ediblesRoute)

void db.connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server on ${PORT}`)
  })
})
