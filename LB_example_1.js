const express = require('express');
const app = express();
const axios = require('axios');

const servers = [
    'http://localhost:3000',
    'http://localhost:3001'
]

let current = 0;
let server = null;

const handler = async (req, res) => {
    const { method, url, headers, body: data} = req;    
    // console.log("current",current)

    server = servers[current];
    current = (current + 1) % servers.length;

    console.log(`${server}${url}`)
    try {
        const resposne = await axios({
            url: `${server}${url}`,
            method,
            headers,
            data
        })

        // console.log(`proxy to ${server} succeded`)
        return res.send(resposne.data)
    }
    catch(err) {
        console.log(`proxy to ${server} failed`)
        // handler(req, res)
    }
}

// https://stackoverflow.com/questions/35408729/express-js-prevent-get-favicon-ico
app.get('/favicon.ico', (req, res) => res.status(204));

app.use((req, res) => { handler(req, res) });


app.listen(3002);
