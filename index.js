const express = require('express')
const app = express()
const port = 3001

let i = 0

app.get('/', (req, res) => {
    // Get the referrer header
    const referrer = req.get('Referer') || req.get('Referrer');
    const referer2 = req.headers.referer || req.headers.referrer;
    const origin = req.headers.origin;

    console.log(req)
    console.log(referrer, referer2, origin);

    if (i === 0){
        i = 1
        fetch('http://dpg.noothing.xyz')
    }

    // Log the referrer or send it in the response
    res.send({
        referrer,
        referer2,
        origin
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})