'use strict'
const config = require('../config')
const store = require('../store')

const indexTeam = function (data) {
  return $.ajax({
    url: config.apiUrl + '/indexTeam',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const showTeam = function (data) {
  return $.ajax({
    url: config.apiUrl + '/showTeam',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}
const createTeam = function (data) {
  return $.ajax({
    url: config.apiUrl + '/createTeam',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}
const updateTeam = function (data) {
  return $.ajax({
    url: config.apiUrl + '/updateTeam',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}
const deleteTeam = function (data) {
  return $.ajax({
    url: config.apiUrl + '/destroyTeam',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  indexTeam,
  createTeam,
  showTeam,
  updateTeam,
  deleteTeam
}
