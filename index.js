const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001

app.get('/me', (req, res) => {
    // Get the referrer header
    const referrer = req.get('Referer') || req.get('Referrer');
    const referer2 = req.headers.referer || req.headers.referrer;
    const origin = req.headers.origin;

    const requestDomain = referrer || referer2 || origin

    res.send({
        success: true,
        data: requestDomain,
    })
})

app.get('/ping', (req, res) => {
    // Get the referrer header
    const referrer = req.get('Referer') || req.get('Referrer');
    const referer2 = req.headers.referer || req.headers.referrer;
    const origin = req.headers.origin;

    console.log(req)
    console.log(referrer, referer2, origin);

    res.send(`Hi, you are from ${referrer || referer2 || origin}`)
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