const express = require('express')

const app = express()
const PORT = process.env.PORT || 8000

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
})


require('./routes')(app)


app.listen(PORT, () => {
    console.log(`сервер работает, порт: ${PORT}`)
    // console.log(__dirname)
})