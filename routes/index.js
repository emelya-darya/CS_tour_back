
const registerRoute = require('./register_new')
const getMembersRoute = require('./get_members')

module.exports = function (app) {
    registerRoute(app)
    getMembersRoute(app)
}