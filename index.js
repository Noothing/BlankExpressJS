const express = require('express')
const app = express()
const port = 3001
const subdomain = require('express-subdomain')

app.get('/', (req, res) => {
    // Get the referrer header
    const referrer = req.get('Referer') || req.get('Referrer');
    const referer2 = req.headers.referer || req.headers.referrer;
    const origin = req.headers.origin;

    console.log('kek')


    // Log the referrer or send it in the response
    res.send({
        referrer,
        referer2,
        origin
    });
})

var router = express.Router();

//api specific routes
router.get('/', function (req, res) {
    console.log('mem')

    // Get the referrer header
    const referrer = req.get('Referer') || req.get('Referrer');
    res.send(`Welcome to our API on ${referrer}!`);
});

router.get('/users', function (req, res) {
    res.json([
        {name: "Brian"}
    ]);
});

app.use(subdomain('api', router));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})