const express = require('express')
const cors = require('cors')
const path = require('path');
const app = express()
const port = 3001

let i = 0

app.get('/', (req, res) => {
    // Log the referrer or send it in the response
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/ping', (req, res) => {
    // Get the referrer header
    const referrer = req.get('Referer') || req.get('Referrer');
    const referer2 = req.headers.referer || req.headers.referrer;
    const origin = req.headers.origin;

    console.log(req)
    console.log(referrer, referer2, origin);

    res.send(`Hi, you are from ${referrer}`)
})

app.use(cors({
    origin: function (origin, callback) {
        callback(null, true)
    },
    credentials: true,
}))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})