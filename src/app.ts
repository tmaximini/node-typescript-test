import express from 'express'
const app: express.Application = express()

app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})

app.get('/health', (req, res) => {
  res.sendStatus(200)
})

app.get('/version', (req, res) => {
  res.send('1.0.0')
})

export default app
