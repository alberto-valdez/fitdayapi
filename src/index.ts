import express from 'express'
import ediblesRoute from './routes/edibles'

const app = express()

app.use(express.json())

const PORT = 3000

app.get('/api/edible/hello', (_req, res) => {
  res.send('hello world')
})

app.use('/api/edible', ediblesRoute)

app.listen(PORT, () => {
  console.log(`server on ${PORT}`)
})
