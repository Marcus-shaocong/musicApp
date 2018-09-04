let Logger = require("./Logger")
let AppConfig = require("../config/AppConfig")

const AuthUtils = {
  launchLogin(loginOptions) {
    console.log("launchLogin options:", loginOptions)
    wx.login({
      success: res => {
        console.log("login", res.code);
        console.log("login url", `${AppConfig.apiUrl}user`)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          url: `${AppConfig.apiUrl}user`,
          data: {code:res.code},
          method: 'POST',
          header: {
            'Content-Type': 'application/json',
          },
          success: resp => {
            console.log("session key", resp.data.session_key)
            wx.setStorageSync('session', resp.data.session_key)
            //AuthUtils.checkShareInfo(loginOptions, resp.data.session_key)
            this.localGetUserInfo( resp.data.session_key)
          },
          fail: res => {
            console.log("login request", res)
          },
          complete: res => {
            console.log("login request", res)
          }
        })
      }
    });

 
  },

   localGetUserInfo(sess_key){
    wx.getSetting({
      success: res => {
        console.log("getSetting", res);
        let app = getApp()
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log("userInfo", res)
              // 可以将 res 发送给后台解码出 unionId
              app.globalData.userInfo = res.userInfo
              let options = {
                encryptedData:res.encryptedData,
                iv: res.iv,
                sess: sess_key
              }
              this.decrypUserInfo(options)
              // this.saveUserInfo(res.userInfo)
              wx.setStorageSync('userInfo', app.globalData.userInfo );
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (app.userInfoReadyCallback) {
                app.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })

   },

  checkShareInfo: function (loginOptions, session_key) {
    console.log('start checkShareInfo', loginOptions, session_key)
    console.log("shareticket", loginOptions.shareTicket)
    wx.getShareInfo({
      shareTicket: loginOptions.shareTicket,
      success(res) {
        console.log("checkShareInfo.success")
        console.log(res)
      },
      fail(res) {
        console.log("checkShareInfo.fail")
        console.log(res)
      },
      complete(res) {
        console.log("checkShareInfo.complete", res)
        console.log('iv', res.iv)
        console.log('encryptedData', res.encryptedData)
        AuthUtils.saveUserInfo({
          shareTicket: {
            iv: res.iv,
            encryptedData: res.encryptedData,
            session_key: session_key
          }
        })
      }
    })
  },

  decrypUserInfo(res){
    console.log("paramter", res)
    wx.request({
      url: `${AppConfig.apiUrl}user/validate`,
      data: { encryptedData: res.encryptedData, iv: res.iv, sess:res.sess },
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
      },
      success: resp => {
        console.log("getUserInfo", resp.data)
      },
      fail: res => {
        console.log("login request", res)
      },
      complete: res => {
        console.log("login request", res)
      }
    })
  },
  // to server
  saveUserInfo(userInfo) {
    if (!userInfo.openid) {
      console.warn("abort sync userInfo to server", userInfo)
      return
    }

    // in case we wanna just get all events
    userInfo.openid = userInfo.openid || 'unknown'

    console.log('saveUserInfo', userInfo)

    let url = `${AppConfig.apiServer}/api/users/save`
    console.log("saveUserInfo.url", url)
    console.log("saveUserInfo.userInfo", userInfo)
    // let finder = {cname: cname}
    wx.request({
      url: url,
      method: 'POST',
      data: userInfo,
      header: {
        'content-type': 'application/json' // 默认值
      },

      success: function (res) {
        console.log('saved user info', res.data)
      }
    })
  },

  getUserInfo(page) {
    console.log("getUserInfo", page.data)
    let app = getApp()
    if (app.globalData.userInfo) {
      // Login.saveUserInfo(app.globalData.userInfo)
      page.setData({
        'chat.userInfo': app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (page.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        page.setData({
          'chat.userInfo': res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      Logger.log("getUserInfo new")
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          page.setData({
            'chat.userInfo': res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  }

}

module.exports = AuthUtils
