
const express = require('express')
const app = express()

app.get('/', function (req, res) {
    console.log('Hello World from 3000!')
    res.json({data: "3000", message: `Hello from Express Server ${process.pid}`})
})

app.listen(3000)