// pages/search.js
var util = require("../../utils/util.js");
const localData = require("../../data/data");
const api = require('../../config/api.js');
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyword: '',
    searchStatus: false,
    hotSongs: [],
    helpKeyword: [],
    defaultKeyword: '',
    searchStatus: false,
    result: ''
  },

  getHotSongs: function () {
    let that = this;
    wx.request({
      url: api.IndexUrl,
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log("res", res)
        that.setData({
          hotSongs: res.data.hotSongs,
        });
        wx.setStorageSync("data", res.data);
        wx.hideLoading()
      },
      fail: function (err) {
        wx.hideLoading()
        util.showErrorToast("加载失败...")
        console.log("err", err);
      }
    })
  },

  inputChange: function (e) {

    this.setData({
      keyword: e.detail.value,
      searchStatus: false
    });
    this.getHelpKeyword();
  },

  getHelpKeyword: function () {
    // TODO
  },

  inputFocus: function () {
    this.setData({
      searchStatus: false
    });

    if (this.data.keyword) {
      this.getHelpKeyword();
    }
  },

  closeSearch: function () {
    wx.navigateBack()
  },

  clearKeyword: function () {
    this.setData({
      keyword: '',
      searchStatus: false
    });
  },

  onKeywordConfirm(event) {
    var that = this;
    that.setData({
      keyword: event.detail.value
    });
    var id = '';
    var len = that.data.hotSongs.length;
    for (var i = 0; i < len; i++) {
      if (that.data.hotSongs[i]["name"] == that.data.keyword) {
        id = that.data.hotSongs[i]["id"]
      }
    }
    that.setData({
      searchStatus: true
    });
    
    if (id) {
      wx.redirectTo({
        url: '/pages/playbg/playbg?id=' + id,
      })
    } 
  },

  /**
     * 生命周期函数--监听页面加载
     */
  onLoad: function (options) {
    var that = this;
    var data = wx.getStorageSync("data" || [])
    if (data) {
      console.log("syncData", data);
      that.setData({
        hotSongs: data.hotSongs
      })
    }
    else {
      let fromLocal = app.globalData.useLocal;
      console.log("localData", localData);
      if (fromLocal) {
        that.setData({
          hotSongs: localData.hotSongs
        })
      }
      else {
        wx.showLoading({
          title: '正在加载.....',
        })
        that.getHotSongs();
      }
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})