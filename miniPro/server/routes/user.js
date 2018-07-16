const router = require('express').Router()
const data = require("../data/index")
const axios = require('axios');
const Appconfig = require('../lib/AppConfig').get(process.env.NODE_ENV);
const WXBizDataCrypt = require('../lib/WXBizDataCrypt')

// routes
router.get('/ping', function (req, res) {
    res.send('server pong')
  })
  
router.post('/', async (req, res) => {
    //console.log("user", req);
    try {
        console.log("Receive code",req.body)
        let authUrl = `https://api.weixin.qq.com/sns/jscode2session?appid=${Appconfig.appId}&secret=${Appconfig.appSecret}&js_code=${req.body.code}&grant_type=authorization_code`;
        //console.log("authUrl", authUrl);
    
        //res.send(401); //test failure case
        let resp = await axios({
            method: 'post',
            url: authUrl,
            header: {
                'content-type': 'json'
            }
          });
          //console.log("resp", resp.status, resp.data);
          // console.log("openid", resp.data.openid);
          // console.log("session_key", resp.data.session_key);

          // console.log("Receive session_key", req.body.sess);
          // //console.log("user",Appconfig);
          // var pc = new WXBizDataCrypt(Appconfig.appId, resp.data.session_key)
          // let rawData = req.body.loginData.encryptedData
          // let iv = req.body.loginData.encryptedData
          // console.log("rawData", rawData)
          // console.log("iv", iv)
          // console.log("Decrypting", rawData, iv)
          // let decryptData = pc.decryptData(rawData,iv)
          
          // console.log('\x1b[41m', decryptData)
          // decryptData.openid = resp.data.openid
          // decryptData.session_key = resp.data.session_key

          // res.json(decryptData);


          let data = {
              openid:resp.data.openid,
              session_key: resp.data.session_key,
          }
          res.json(data);
    } catch (error) {
        console.log("catchError", error);
    }

})

router.post('/validate', async (req, res) => {
  //console.log("user", req);
  try {
      //console.log("Enter validate")
      console.log("Receive session_key", req.body.sess);
      //console.log("user",Appconfig);
      var pc = new WXBizDataCrypt(Appconfig.appId, req.body.sess)
      let rawData = req.body.encryptedData
      let iv = req.body.iv
      //console.log("Decrypting", rawData, iv)
      let decryptData = pc.decryptData(rawData,iv)
      
      console.log('receive login:', decryptData);
      res.json(decryptData);
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