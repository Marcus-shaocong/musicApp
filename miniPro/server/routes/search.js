const router = require('express').Router();
const helperData = require("../data/helpIndex");
const indexData = require("../data/index");
const axios = require('axios');
const Appconfig = require('../lib/AppConfig').get(process.env.NODE_ENV);
const _ = require('underscore');

  
const cache = _.memoize((pattern)=>{  
    // let rxStr = pattern.split("").reduce(function(a,b){
    // return a+'[^'+b+']*'+b;
    // });
    // let rxStr = "^"+pattern.replace(/./g, function(x){
    //     return /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/.test(x) ? "\\"+x+"?" : x+"?";
    //   })+"$";
    let rxStr = pattern.split("").join(".*")
    console.log("rxStr", rxStr);
    return new RegExp(rxStr);
});

const fuzzy_match = (str,pattern) =>{
    console.log("str", str);
    console.log("pattern", pattern);
    return cache(pattern).test(str)
};


// const fuzzy_match = (str,pattern)=>{
//     pattern = pattern.split("").reduce(function(a,b){ return a+".*"+b; });
//     return (new RegExp(pattern)).test(str);
// };

// routes
router.get('/ping', function (req, res) {
    res.send('server pong')
  })
  
router.get('/helper', async (req, res) => {
    console.log("search.req", req.query );
    try {
        let result = [];
        let keys = indexData.hotSongs.reduce((prev, cur)=>{
            //console.log("prev", prev);
            if(cur.name){
                prev = prev.concat(cur.name);
            } 
            if(cur.singer){
                prev = prev.concat(cur.singer);
            }
            return prev;
        },[])
        keys.forEach(item=>{
            console.log("item", req.query.keyword)
            let m = fuzzy_match(item.toLowerCase(),req.query.keyword.toLowerCase().trim());
            console.log("m", m);
            if(m){
                result.push(item)
            }
        })
        res.json(result);
    } catch (error) {
        console.log("catchError", error);
    }
})


router.get('/result', async (req, res) => {
    console.log("result.search.req", req.query );
    try {
        let result = indexData.hotSongs.filter((item)=>{
            console.log("item", item);
            if( item.name.includes(req.query.keyword)||
                item.singer.includes(req.query.keyword)){
                    return true;
                }
            else{
                return false;
            }
        })
        console.log("result");
        res.json(result);
    } catch (error) {
        console.log("catchError", error);
    }
})
module.exports = router;
