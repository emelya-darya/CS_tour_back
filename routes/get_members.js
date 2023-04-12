const fs = require('fs')
const path = require('path')
const filepathMiddleware = require('../middleware/filepath.middleware')


module.exports = function (app) {
    app.get('/list', (request, response) => {
        const path_to_members = path.join('members', 'members.txt')
        console.log(__dirname)

        let data_members = fs.readFileSync(path_to_members, 'utf-8').replace(/}\,\s*$/g, '},{')
        data_members = '[' + data_members + ']'

        response.status(200).send(data_members)
    })
}