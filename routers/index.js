'user strict'

const express = require('express')
const api = express.Router()

const auth = require('../middlewares/auth')
const userCtr = require('../controlers/user')


api.post('/signup', userCtr.signUp)
api.post('/signin', userCtr.signIn)
api.get('/private', auth, function(req, res){
  res.status(200).send({ message: 'you have access' })
})

module.exports = api
