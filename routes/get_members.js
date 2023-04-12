const fs = require('fs')
const path = require('path')


module.exports = function (app) {
    app.get('/list', (request, response) => {
        const path_to_members = path.join('members', 'members.txt')

        let data_members = fs.readFileSync(path_to_members, 'utf-8').replace(/}\,\s*$/g, '},{')
        data_members = '[' + data_members + ']'

        response.status(200).send(data_members)
    })
}