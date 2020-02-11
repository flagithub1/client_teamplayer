'use strict'
const config = require('../config')
const store = require('../store')

const indexTeams = function () {
  return $.ajax({
    url: config.apiUrl + '/teams',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const showTeam = function () {
//   return $.ajax({
//     url: config.apiUrl + '/teams',
//     method: 'GET',
//     Authorization: 'Token token=' + store.user.token
//   })
// }
const createTeam = function (data) {
  return $.ajax({
    url: config.apiUrl + '/teams',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}
const updateTeam = function (data) {
  return $.ajax({
    url: config.apiUrl + '/teams/' + data.team.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const deleteTeam = function (data) {
  return $.ajax({
    url: config.apiUrl + '/teams/' + data.team.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  indexTeams,
  createTeam,
  updateTeam,
  deleteTeam
}
