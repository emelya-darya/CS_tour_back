const fs = require('fs')
const path = require('path')


module.exports = function (app) {
    app.post('/register', (request, response) => {
        const path_to_members = path.join('members', 'members.txt')

        let body = ''
        request.on('data', (chunk) => {
            body += chunk.toString()
        })

        request.on('end', () => {
            if (body) {
                //console.log(body)
                fs.appendFileSync(path_to_members, body + ',', 'utf-8')
                response.status(200).send({ message: "OK" })
            } else {
                response.status(500).send({ message: "Error on add new member" })
            }

        })

    })
}