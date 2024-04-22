// include modules from npm
const express = require('express')

const app = express()

// define the relative variables
const port = 3000

// set the routes
app.get('/', (req, res) => {
  res.send('This will be a ramdon password generator.')
})

// start and listen the server
app.listen(port, () => {
  console.log(`The Express server is running on http://localhost:${port}`)
})