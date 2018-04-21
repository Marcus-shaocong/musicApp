// pages/musicplayer/player.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    toggleArray: ["/images/icons/play-256.png", "/images/icons/pause-256.png"],
    imageSrc: "/images/icons/play-256.png",
    playUrl:"",
    playState: false,
    curTime: '00:00',
    audioContext: '',
    curValue: '',
    bgUrl: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    let data = wx.getStorageSync("data")
    console.log("options", options)
    console.log("data", data);
    let song = data.hotSongs.filter(item => {
      console.log("options.id", options.id)
      return item.id == options.id;
    });
    console.log("song", song);
    console.log("laddy", `${app.globalData.domainName}/assets/images/laddy.jpg`);
    this.setData({
      bgUrl: `${app.globalData.domainName}/assets/images/laddy.jpg`,
      playUrl: song[0].src
    })
  },

  onTimeUpdate: function (opts) {
    let that = this;
    let audioContext = wx.getBackgroundAudioManager();
    audioContext.onTimeUpdate((res) => {
      console.log("onTimeUpdate", res)
      console.log('onTimeUpdate curTime', audioContext.currentTime)
      console.log('onTimeUpdate duration', audioContext.duration)
      let value = Math.round(audioContext.currentTime * 100 / audioContext.duration);
      console.log("value is", value);
      that.setData({ curValue: value, curTime: that.formatTime(audioContext.currentTime) });
    })
    audioContext.onEnded(res=>{
      console.log("onEnded");
    });
    wx.onBackgroundAudioStop(res=>{
      console.log("stop")
      that.setData({
        imageSrc: that.data.toggleArray[0]
      })
    })
  },

  onChange: function (options) {
    let that = this;
    let seekPos = options.detail.value;
    wx.getBackgroundAudioPlayerState({
      success: function (res) {
        let duration = res.duration
        let newPos = parseFloat((seekPos / 100) * duration);
        wx.seekBackgroundAudio({ position: newPos });
        that.onTimeUpdate();
      }
    })
  },

  onTouchStart: function (options) {
    console.log("onTouchStart", options)
    let that = this;
    wx.pauseBackgroundAudio()
  },

  onTouchEnd: function (options) {
    let that = this;
    wx.playBackgroundAudio({
      dataUrl: that.data.playUrl
    });
  },

  play: function (options) {
    console.log("play");
    var that = this;
    let audioContext = wx.getBackgroundAudioManager();
    if (that.data.imageSrc == that.data.toggleArray[0]) {
      that.setData({
        imageSrc: that.data.toggleArray[1]
      })
      wx.playBackgroundAudio({
        dataUrl: that.data.playUrl
      });
      that.onTimeUpdate();
    }
    else {
      that.setData({
        imageSrc: that.data.toggleArray[0]
      });
      wx.pauseBackgroundAudio()
    }

    wx.onBackgroundAudioPlay((res) => {
      console.log('onPlay', res)
      wx.hideLoading();
      console.log('onPlay curTime', audioContext.currentTime)
      console.log('onPlay duration', audioContext.duration)
    })

    audioContext.onWaiting((res) => {
      console.log('onWaiting', res)
      /*
      wx.showLoading({
        title: '正在加载.....',
      })*/
    })
  },

  formatTime: (time) => {
    time = Math.floor(time);
    var m = Math.floor(time / 60).toString();
    m = m.length < 2 ? '0' + m : m;
    var s = (time - parseInt(m) * 60).toString();
    s = s.length < 2 ? '0' + s : s;
    return m + ':' + s;
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
    console.log("onUnload");
    let that = this;
    that.data.audioContext.destroy();
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