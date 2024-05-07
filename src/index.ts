import express from 'express'
import ediblesRoute from './routes/edibles'
import bodyParser from 'body-parser'
import compression from 'compression'
import cors from 'cors'

const app = express()
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({
  credentials: true
}))

const PORT = 3000

app.get('/api/edible/hello', (_req, res) => {
  res.send('hello world')
})

app.use('/api/edible', ediblesRoute)

app.listen(PORT, () => {
  console.log(`server on ${PORT}`)
})
