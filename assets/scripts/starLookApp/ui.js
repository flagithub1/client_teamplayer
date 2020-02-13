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
  $('#teams-list').html('')
}
const updateTeamFailure = function (response) {
  console.log('try again')
}
const deleteTeamSuccess = function (response) {
  console.log(response)
  $('#delete-team').trigger('reset')
  $('#message').text('Team successfully deleted')
  $('#teams-list').html('')
}
// $('#message').text('Team successfully deleted!')
// // $('#delete-team').trigger('reset')
const deleteTeamFailure = function (response) {
  console.log('try again')
  $('#delete-team').trigger('reset')
  $('#message').text('Team not successfully deleted')
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
