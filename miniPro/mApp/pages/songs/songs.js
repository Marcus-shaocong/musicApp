// pages/songs/songs.js
const localData = require("../../data/data");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    banner: [],
    song:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onSongs", localData.hotSongs)
    options.id = 10005;
  let song = localData.hotSongs.filter(item=>{
    console.log("options.id", options.id)
    return item.id == options.id;
  });
  console.log("song", song);
    let that = this;
    that.setData({
      banner: song[0].gallery,
      song: song
    });
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