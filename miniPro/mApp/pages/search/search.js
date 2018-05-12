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