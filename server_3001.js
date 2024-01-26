
const express = require('express')
const app = express()

app.get('/', function (req, res) {
    console.log('Hello World from 3001!')
    res.json({data: "3001", message: `Hello from Express Server ${process.pid}`})
})

app.listen(3001)