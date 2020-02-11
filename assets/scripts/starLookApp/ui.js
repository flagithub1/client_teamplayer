'use strict'
// const showTeamsTemplate = require('../templates/team-listing.handlebars')
const createTeamSuccess = function (response) {
  console.log('created')
  $('.before-auth').hide()
  $('#message').text('Team successfully created')
  $('#create-team').trigger('reset')
}
const createTeamFailure = function (response) {
  console.log('not created')
}

const indexTeamSuccess = function (response) {
  console.log(response)
  $('#teams-list').html('')

  response.teams.forEach(function (team) {
    $('#teams-list').append('<li>ID: ' + team.id + ', NAME: ' + team.name + '</li>')
  })
  $('.before-auth').hide()
}
const indexTeamFailure = function (response) {
  console.log('try again')
}
const updateTeamSuccess = function (response) {
  console.log(response)
  $('#message').text('Team successfully updated')
  $('#update-team').trigger('reset')
}
const updateTeamFailure = function (response) {
  console.log('try again')
}
const deleteTeamSuccess = function (response) {
  console.log(response)
}
// $('#message').text('Team successfully deleted!')
// // $('#delete-team').trigger('reset')
const deleteTeamFailure = function (response) {
  console.log('try again')
}
module.exports = {
  createTeamSuccess,
  createTeamFailure,
  indexTeamSuccess,
  indexTeamFailure,
  updateTeamSuccess,
  updateTeamFailure,
  deleteTeamSuccess,
  deleteTeamFailure
}
