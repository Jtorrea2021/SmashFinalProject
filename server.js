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

app.get('/characterList1', function(req, res) {
  res.render('characterList1')
})

app.get('/characterList2', function(req, res) {
  res.render('characterList2')
})

app.get('/characterList3', function(req, res) {
  res.render('characterList3')
})

app.get('/characterList4', function(req, res) {
  res.render('characterList4')
})

app.get('/characterList5', function(req, res) {
  res.render('characterList5')
})

app.get('/characterList6', function(req, res) {
  res.render('characterList6')
})

app.get('/characterList7', function(req, res) {
  res.render('characterList7')
})

app.listen(3000)
