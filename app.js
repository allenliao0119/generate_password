// include modules from npm
const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

// set view template
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// define the relative variables
const port = 3000

// set the routes
app.get('/', (req, res) => {
  res.render('index')
})

// start and listen the server
app.listen(port, () => {
  console.log(`The Express server is running on http://localhost:${port}`)
})