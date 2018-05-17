const express = require('express');
const router = express.Router();
// var bodyParser = require('body-parser');
// router.use(bodyParser.json()); // support json encoded bodies
// router.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const data = require("../data/index")

/* 首页以及首页歌曲 */
router.post('/', async (req, res) => {
    console.log("receive index request..");
    setTimeout(function(){
        if(data){
        	const FIRST_INDEX = 1;
            // console.log("return: ", pageData.hotSongs[pageNumber]);
            data["hotSongs"] = getHotSongsByPage(FIRST_INDEX);
            res.json(data);
        } else {
        	res.json("");
        }
    },5000);
        // if(data){
        //     //console.log("return", data);
        //     res.json(data);
        // }
    //res.send(401); //test failure case
})

/* API - 上拉刷新 - 通过渐进页码获取歌曲 */
router.post('/hotsongs', async (req, res) => {
	var paramPage = req.body.page;
	console.log("receive page request with page: " + paramPage);
	setTimeout(function(){
		res.json(getHotSongsByPage(paramPage));
    },5000);
})

/* 根据页码获取歌曲 */
const pageData = require("../data/hotSongs")
function getHotSongsByPage( pageNumber ) {
	// console.log("called from --> getHotSongsByPage with pageNumber: "+pageNumber);
    if ( pageData && pageNumber ) {
		var page = 'p' + pageNumber;
        // console.log("page cont: ", pageData.hotSongs[page]);
        return pageData.hotSongs[page];
    } else {
    	return "";
    }
}

module.exports = router