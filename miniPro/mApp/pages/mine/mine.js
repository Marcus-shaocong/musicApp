const searchD = require("../../data/searchData.js");
const localData = require("../../data/data.js");
const util = require("../../utils/util.js")
const api = require('../../config/api.js');
const AppConfig = require("../../config/AppConfig")
const AuthUtils = require('../../utils/AuthUtils');

var app = getApp()


Page({
  data: {
    userInfo: {
      nickName: '点击登录',
      avatarUrl: 'http://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png'
    },
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {

  },
  onShow: function () {

    //获取用户的登录信息
    //if (app.globalData.hasLogin) {
      let userInfo = wx.getStorageSync('userInfo');
      console.log("userInfo",userInfo)
      if(userInfo){
        this.setData({
          userInfo: userInfo,
        });
      }
    //}
  },
  onHide: function () {
    // 页面隐藏

  },
  onUnload: function () {
    // 页面关闭
  },
  goLogin() {
    wx.getSetting({
      success: res => {
        console.log("getSetting", res);
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log("userInfo", res)
            }
          })
        }
      }
    })
    if (!app.globalData.hasLogin) {
      wx.navigateTo({ url: "/pages/auth/login/login" });
    }
  },
  goOrder() {
    if (app.globalData.hasLogin) {
      wx.navigateTo({ url: "/pages/ucenter/order/order" });
    }
    else {
      wx.navigateTo({ url: "/pages/auth/login/login" });
    }
  },
  goCoupon() {
    if (app.globalData.hasLogin) {
      wx.navigateTo({ url: "/pages/ucenter/coupon/coupon" });
    }
    else {
      wx.navigateTo({ url: "/pages/auth/login/login" });
    };

  },
  goCollect() {
    if (app.globalData.hasLogin) {
      wx.navigateTo({ url: "/pages/ucenter/collect/collect" });
    }
    else {
      wx.navigateTo({ url: "/pages/auth/login/login" });
    };
  },
  goFootprint() {
    if (app.globalData.hasLogin) {
      wx.navigateTo({ url: "/pages/ucenter/footprint/footprint" });
    }
    else {
      wx.navigateTo({ url: "/pages/auth/login/login" });
    };
  },
  goAddress() {
    if (app.globalData.hasLogin) {
      wx.navigateTo({ url: "/pages/ucenter/address/address" });
    }
    else {
      wx.navigateTo({ url: "/pages/auth/login/login" });
    };
  },
  exitLogin: function () {
    wx.showModal({
      title: '',
      confirmColor: '#b4282d',
      content: '退出登录？',
      success: function (res) {
        if (res.confirm) {
          wx.removeStorageSync('token');
          wx.removeStorageSync('userInfo');
          wx.switchTab({
            url: '/pages/index/index'
          });
        }
      }
    })

  },
  bindGetUserInfo:function(res){
    console.log("res",res.detail)
    console.log("bindGetUserInfo.iv", res.detail.iv)
    console.log("bindGetUserInfo.ed", res.detail.encryptedData)
    AuthUtils.launchLogin(res.detail)
    /*
    let sess_key = wx.getStorageSync("session")
    console.log("session_key", sess_key)
    wx.request({
      url: `${AppConfig.apiUrl}user/validate`,
      data: { encryptedData: res.detail.encryptedData, iv: res.detail.iv, sess:sess_key },
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
    })*/
  },

  getPhoneNumber: function (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
  } 
})