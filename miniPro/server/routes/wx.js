const router = require('express').Router()
const data = require("../data/index")

router.get('/ping', function (req, res) {
    res.send('server pong')
  })
  
  
router.get('/', async (req, res) => {
    console.log("receive request")
    res.send('server pong')

    //res.send(401); //test failure case
})

module.exports = router