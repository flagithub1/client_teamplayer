'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

const onCreateTeam = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.createTeam(data)
    .then(ui.createTeamSuccess)
    .catch(ui.createTeamFailure)
}

const onIndexTeams = function (event) {
  event.preventDefault()
  api.indexTeams()
    .then(ui.indexTeamSuccess)
    .catch(ui.indexTeamFailure)
}
const onUpdateTeam = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.updateTeam(data)
    .then(ui.updateTeamSuccess)
    .catch(ui.UpdateTeamFailure)
}

const onDeleteTeam = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.deleteTeam(data)
    .then(ui.deleteTeamSuccess)
    .catch(ui.deleteTeamFailure)
}
//
// const onChangePassword = function (event) {
//   event.preventDefault()
//   const form = event.target
//   const data = getFormFields(form)
//   api.changePassword(data)
//     .then(ui.changePasswordSuccess)
//     .catch(ui.changePasswordFailure)
// }
//
// const onSignOut = function (event) {
//   event.preventDefault()
//
//   api.signOut()
//     .then(ui.signOutSuccess)
//     .catch(ui.signOutFailure)
// }

const addHandlers = function () {
  $('#create-team').on('submit', onCreateTeam)
  $('#getTeamsButton').on('click', onIndexTeams)
  $('#update-team').on('submit', onUpdateTeam)
  $('#delete-team').on('submit', onDeleteTeam)

  // $('#change-password').on('submit', onChangePassword)
  // $('#sign-out').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
