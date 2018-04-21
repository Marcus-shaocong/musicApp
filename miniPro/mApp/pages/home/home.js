// pages/home/home.js
const localData = require("../../data/data");
const util = require('../../utils/util.js');
const api = require('../../config/api.js');
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    banner:[],
    hotSongs:[],
    title:"hello"
  },

  getIndexData: function () {
    let that = this;
    wx.request({
      url: api.IndexUrl,
      method: 'POST',
      header:{
        'content-type':'application/json'
      },
      success: function (res) {
        console.log("res", res)
        that.setData({
          banner: res.data.banner,
          hotSongs: res.data.hotSongs,
          title: res.data.title
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

/*
    let that = this;
    util.request(api.IndexUrl,{}, 'POST').then(function (res) {
      console.log("getIndexData", res);
      that.setData({
          banner: res.banner,
          hotSongs: res.hotSongs,
          title: res.title
        });
        wx.setStorageSync("data",res);
      wx.hideLoading()    
    }).catch(err=>{
      wx.hideLoading() 
      util.showErrorToast("加载失败...")
      console.log("err", err);
    });*/
  },

/**
 * Hot song like event
 */
  onLikeSong: function (event) {
    console.log("called from --> hot song like event");
    var itemid = event.target.id
    var query = wx.createSelectorQuery();
    console.log(query.select("'#" + itemid + "'"));
    // 提前准备好 每个hot song 对应的 image url属性
    // 点击like，使用setData来换image
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    /*
    wx.setEnableDebug({
      enableDebug: true,
    });*/
    let fromLocal = app.globalData.useLocal;
    console.log("localData", localData);
    if(fromLocal){
        that.setData({
          banner:localData.banner,
          hotSongs:localData.hotSongs
        });
    }
    else{
      wx.showLoading({
        title: '正在加载.....',
      })
      that.getIndexData();
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