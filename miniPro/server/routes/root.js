const router = require('express').Router()
const data = require("../data/index")

router.post('/', async (req, res) => {
    console.log("receive request")
    setInterval(function(){
        
        if(data){
            //console.log("return", data);
            res.json(data);
        }
    },5000)

    //res.send(401); //test failure case
})

module.exports = router