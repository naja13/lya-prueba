'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

const UserSchema = new Schema({
  email: { type: String, unique:true, lowecase: true },
  displayName: String,
  password: { type: String, select: false },
  signupDate: { type:Date, default: Date.now() },
  lastogin: Date  
})

UserSchema.pre('save', function (next) {
  let user = this
  if (!user.isModified('password')) return next()

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next()

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next() 
      
      user.password = hash
      next()
    })  
  }) 
})


module.exports = mongoose.model('User', UserSchema)