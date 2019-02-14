// lib/app.ts

import express from 'express'
const app: express.Application = express()

app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.get('/health', function(req, res) {
  res.sendStatus(200)
})

app.get('/version', function(req, res) {
  res.send('1.0.0')
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})
