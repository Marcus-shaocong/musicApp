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
    title: "hello"
  },

  getIndexData: function () {
    let that = this;
    util.request(api.IndexUrl, {}, 'POST').then(function (res) {
      console.log("getIndexData", res);
      that.setData({
        banner: res.banner,
        hotSongs: res.hotSongs,
        title: res.title
      });
      wx.hideLoading()
    }).catch(err => {
      wx.hideLoading()
      util.showErrorToast("加载失败...")
      console.log("err", err);
    });
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
    var likeImg = "../../images/icons/icon_collect_checked.png";
    var notlikeImg = "../../images/icons/icon_collect.png";

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
      this.getIndexData();
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