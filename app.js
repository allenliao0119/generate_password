// include modules from npm
const express = require('express')
const exphbs = require('express-handlebars')

const generatePassword = require('./generate_password')

const app = express()

// set view template
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// define the relative variables
const port = 3000

// set the routes
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const password = generatePassword(options)
  res.render('index', {password, options})
})

// start and listen the server
app.listen(port, () => {
  console.log(`The Express server is running on http://localhost:${port}`)
})