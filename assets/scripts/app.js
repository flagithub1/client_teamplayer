'use strict'
const loginEvents = require('./loginActions/events.js')
const starLook = require('./starLookApp/events.js')

// use require with a reference to bundle the file and use it in this file
// const teamEvents = require('./team/events.js')
// const authEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  loginEvents.addHandlers()
  starLook.addHandlers()
  // $('#change-password').hide()
  // $('#sign-out').hide()
  // $('section').hide()
  // auth.addHandlers()
})
