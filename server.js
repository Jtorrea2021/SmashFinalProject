var express = require('express')
var app = express()
const mongoose = require('mongoose');
const passport = require('passport')
const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session')
const bodyParser = require('body-parser')
var User = require('./models/userSchema.js')
var userController = require('./controllers/users.js')

app.use(express.static('public'))
app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.connect('mongodb://localhost:27017/smashApp');

app.use(express.static('public'))
app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({ extended: false }))

app.use(session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());
function isLoggedIn(req, res, next) {
  console.log('User is not logged in because we do not have that working yet.')
  next()
}

passport.use(new LocalStrategy(
  function(username, password, done) {
    console.log('Running Local Strategy')
    User.findOne({ username: username}, function(err, user) {
      console.log('Inside mongo query callback')
      if (err) {
        console.log(err)
        return done(err);
      }
      console.log('Mongo query successfully executed')
      if (user === null) {
        console.log('User not found')
        return done(null, false, { message: 'Incorrect username.' });
      }
      bcrypt.compare(password, user.password, function(err, result) {
        if (result === false) {
          console.log('Incorrect Password')
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      })
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

app.post('/login',
  passport.authenticate('local', { successRedirect: '/cquestions',
                                   failureRedirect: '/login',
                                   failureFlash: false })
);


// views
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

app.post('/signupPost', userController.newUser)

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

app.get('/home', function(req, res) {
  res.render('home', { user: req.user })
})

app.listen(3000)
