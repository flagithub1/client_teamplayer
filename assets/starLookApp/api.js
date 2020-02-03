'use strict'
const config = require('../config')
const store = require('../store')

const indexStarLookApp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/indexStarLookApp',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}
const showStarLookApp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/showStarLookApp',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}
const createStarLookApp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/createStarLookApp',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}
const updateStarLookApp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/updateStarLookApp',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}
const deleteStarLookpp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/destroyStarLookApp',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  index,
  create,
  show,
  update,
  delete
}
