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
    banner: [],
    hotSongs: [],
    title: "hello",
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
        let saveOp = res.data.hotSongs.reduce((prev, cur)=>{
            //console.log("prev", prev);
             return prev.concat(cur.saveOption);
        },[]);
        console.log("saveOp", saveOp);  
        that.setData({
          banner: res.data.banner,
          hotSongs: res.data.hotSongs,
          title: res.data.title,
          array: saveOp
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

  /**
   * Hot song like event: switch image & text
   */
  onLikeSong: function (event) {
    var that = this;
    console.log("called from --> hot song like event");
    var imgIndex = event.currentTarget.dataset.imgIndex;
    var isCollected = event.currentTarget.dataset.isCollected;
    this.switchImgAndText(imgIndex, isCollected);
  },

  /* auxiliary method for onLikeSong */
  switchImgAndText: function (imgIndex, isCollected) {
    var that = this;
    var likeImg = "../../images/icons/attentionT.png";
    var notlikeImg = "../../images/icons/attention.png";

    /* the dynamic way to set data is to use an array */
    var targetImgSrc = "array[" + imgIndex + "]" + ".imgSrc";
    var targetLikeText = "array[" + imgIndex + "]" + ".likeText";
    var targetCollectedFlag = "array[" + imgIndex + "]" + ".isCollected";
    // console.log(isCollected);
    if (isCollected) {
      that.setData({
        [targetImgSrc]: notlikeImg,
        [targetCollectedFlag]: false,
        [targetLikeText]: "收藏"
      });
    } else {
      that.setData({
        [targetImgSrc]: likeImg,
        [targetCollectedFlag]: true,
        [targetLikeText]: "已收藏"
      });
    }
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
    if (fromLocal) {
      that.setData({
        array: localData.array,
        banner: localData.banner,
        hotSongs: localData.hotSongs,
      });
    }
    else {
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
    // design api 
    // design song model
    // design request the rest songs api
    console.log("called from --> onReachBottom Event");
    wx.showLoading({
      title: '正在加载.....',
    });
    setTimeout(function() {
      console.log("called from --> displaying songs..");
      wx.hideLoading();
    }, 2000);

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})