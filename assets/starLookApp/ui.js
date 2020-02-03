'use strict'

const showTeamsTemplate = require('../templates/team-listing.handlebars')

const getTeamsSuccess = (data) => {
  console.log(data)
const showTeamsHtml = showTeamsTemplate({
    teams: data.teams
  })
  $('.content').html(showTeamsHtml)
}

module.exports = {

}
