const bcrypt = require('bcrypt');
const saltRounds = 10;
var User = require('../models/userSchema.js')

exports.newUser = function(req, res) {
  const email = req.body.email
  const username = req.body.username
  const password = req.body.password
  const passwordConfirmation = req.body.passwordConfirmation

  if (username === '' || email === '' || password === '' || passwordConfirmation === '') {
    res.send('<h1> Fill out all fields. </h1>')
    return
  }
  if (password !== passwordConfirmation) {
    res.send('<h1> Please make sure that passwords match.</h1>')
    return
  }
  bcrypt.hash(password, saltRounds, function(err, hash) {
    var user = new User({ email: email, username: username, password: hash })
    user.save(function(err, savedUser) {
      if (err) {
        console.log(err)
        res.send('<h1> Something went wrong. Email Mr. M')
        return
      }
      console.log('User created successfully')
      console.log(savedUser)
      res.render('signupPost')
    })
  })
}
