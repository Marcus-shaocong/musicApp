// pages/musicplayer/player.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    toggleArray: ["/images/icons/play-256.png", "/images/icons/pause-256.png"],
    imageSrc: "/images/icons/play-256.png"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("this", this)
  },

 play: function(options){
  console.log("play");
  var that = this;
  if (that.data.imageSrc == that.data.toggleArray[0]){
    that.setData({
      imageSrc: that.data.toggleArray[1]
    })
    wx.playBackgroundAudio({
      dataUrl: 'https://m128.xiami.net/110/3110/15644/373969_26413_l.mp3?auth_key=1524798000-0-0-73449dc7d365269744a1362844087f12',
      title: '温柔',
      success: function (e) {
        // console.log('播放声音');
      }
    })
  }
  else{
    that.setData({
      imageSrc: that.data.toggleArray[0]
    });
    wx.stopBackgroundAudio({
      dataUrl: 'https://m128.xiami.net/110/3110/15644/373969_26413_l.mp3?auth_key=1524798000-0-0-73449dc7d365269744a1362844087f12',
      title: '温柔',
      success: function (e) {
        // console.log('播放声音');
      }});
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