import express from 'express'
import ediblesRoute from './routes/edibles'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()

app.use(cors({
  credentials: true
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const PORT = 3000

app.get('/api/edible/hello', (_req, res) => {
  res.send('hello world')
})

app.use('/api/edible', ediblesRoute)

app.listen(PORT, () => {
  console.log(`server on ${PORT}`)
})
