const router = require('express').Router()
const data = require("../data/index")
const axios = require('axios');
const Appconfig = require('../lib/AppConfig').get(process.env.NODE_ENV);


// routes
router.get('/ping', function (req, res) {
    res.send('server pong')
  })
  
router.post('/', async (req, res) => {
    console.log("user", req);
    try {
        console.log("user", req.body.code);
        console.log("user",Appconfig);
        let authUrl = `https://api.weixin.qq.com/sns/jscode2session?appid=${Appconfig.appId}&secret=${Appconfig.appSecret}&js_code=${req.body.code}&grant_type=authorization_code`;
        console.log("authUrl", authUrl);
    
        //res.send(401); //test failure case
        let resp = await axios({
            method: 'post',
            url: authUrl,
            header: {
                'content-type': 'json'
            }
          });
          console.log("resp", resp.status, resp.data);
          console.log("openid", resp.data.openid);
          console.log("openid", resp.data.session_key);
          let data = {
              openid:resp.data.openid,
              session_key: resp.data.session_key,
          }
          res.json(data);
    } catch (error) {
        console.log("catchError", error);
    }

})

module.exports = router;

/*
    //获取code
    wx.login({
      //获取code
      success: function (res) {
        console.log("login", res)
        var code = res.code; //返回code
        let appId = AppConfig.appId
        let secret = AppConfig.appSecret
        if (true) {
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appId + '&secret=' + secret + '&js_code=' + code + '&grant_type=authorization_code',
            data: {},
            header: {
              'content-type': 'json'
            },
            success: function (res) {
              console.log('get openId successfully', res)
              var openid = res.data.openid //返回openid
              thiz.globalData.openID = openid;
              wx.setStorage({
                key: 'openId',
                data: openid,
              })
              if (thiz.getUserInfoCallback) {
                thiz.getUserInfoCallback(openid)
              }
            }
          })
        } else {
          // thiz.globalData.openID = wx.getStorageSync('openId');
        }
      }
    })//get wechat login info
  },*/