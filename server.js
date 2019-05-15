var express = require('express')
var app = express()
const bodyParser = require('body-parser')

app.use(express.static('public'))
app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (req, res) {
  res.render('navigationPage')
})

app.get('/cquestions', function (req, res) {
  res.render('characterQuestions')
})

app.get('/login', function (req, res) {
  res.render('login')
})

app.get('/signup', function (req, res) {
  res.render('signup')
})

app.post('/signupPost', function(req, res) {
  res.render('signupPost')
})

app.post('/loginPost', function(req, res) {
  res.render('loginPost')
})

app.get('/aggressive', function(req, res) {
  res.render('aggressive')
})

app.get('/passive', function(req, res) {
  res.render('passive')
})

app.get('/variety', function(req, res) {
  res.render('variety')
})
//this is a change

app.listen(3000)
