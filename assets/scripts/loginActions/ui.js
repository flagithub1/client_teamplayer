'use strict'
const store = require('../store')

const signUpSuccess = function (response) {
  $('#message').text('successfully signed up!')
  console.log(response)
  $('#sign-up').trigger('reset')
}

const signUpFailure = function (error) {
  $('#message').text('oops!!!  something went wrong')
  console.log(error)
  $('#sign-up').trigger('reset')
}
const signInSuccess = function (response) {
  $('#message').text(' successfully signed in!')
  store.user = response.user
  $('#change-password').show()
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('section').show()
  console.log('sign in success', response)
  $('#sign-in').trigger('reset')
}
const signInFailure = function (error) {
  $('#message').text('oops!!!  something went wrong')
  console.log(error)
  $('#sign-in').trigger('reset')
}

const changePasswordSuccess = function (response) {
  $('#message').text('successfully changed your password!')
  $('#change-password').trigger('reset')
  console.log(response)
}
const changePasswordFailure = function (error) {
  $('#message').text('oops!!!  something went wrong')
  $('#change-password').trigger('reset')
  console.log(error)
}

const signOutSuccess = function (response) {
  $('#message').text(' successfully signed out!')
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-password').trigger('reset')

  console.log(response)
}
const signOutFailure = function (error) {
  $('#message').text('oops!!!  something went wrong')
  console.log(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
