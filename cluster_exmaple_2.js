const cluster = require('cluster');
const os = require('os');

const numCPUs = os.cpus().length;

console.log("numCPUs", numCPUs)

if(cluster.isPrimary) {

    console.log(`Primary ${process.pid} is running`);

    for(let i=0;i<numCPUs;i++) {
        cluster.fork();
    }

}
else {
    const express = require('express')
    const app = express()
    
    app.get('/', function (req, res) {
        console.log('Hello World from 3000!')
        res.json({data: "3000", message: `Hello from Express Server ${process.pid}`})
    })
    
    app.listen(3000)
}