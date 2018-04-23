const app = getApp();
const images = [
  "/images/data/1.jpg",
  "/images/data/2.jpg",
  "/images/data/3.jpg",
  "/images/data/4.jpg",
  "/images/data/5.jpg",
  "/images/data/6.jpg",
  "/images/data/7.jpg",
  "/images/data/8.jpg",
  "/images/data/9.jpg"
];
Page({
  /**
   * 页面的初始数据
   */
  data: {
    toggleArray: ["/images/icons/play-256.png", "/images/icons/pause-256.png"],
    imageSrc: "/images/icons/play-256.png",
    scores:[],
    playUrl:"",
    playState: false,
    curTime: '00:00',
    audioContext: '',
    curValue: '',
    bgUrl: "",
    scoreUrl:"",
    animation:{},
    animationData:""
  },

  swiper: function (dur) {
    console.log("swiper", dur);
    let that = this;
    let animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'linear',
      transformOrigin:"-100%,-100%, 0"
    })
    animation.translateY(-500).step({ duration: dur })
    //animation.rotate(90).step();

    this.setData({
      animationData: animation.export()
    })
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
    console.log("song", song[0].gallery[0]);
    console.log("laddy", `${app.globalData.domainName}/assets/images/laddy.jpg`);
    //let songSrc = "https://xinjushi.xyz/assets/mp3/wenyou.mp3"
    that.setData({
      bgUrl: `${app.globalData.domainName}/assets/images/laddy.jpg`,
      playUrl: song[0].src,
      scores: song[0].gallery,
      scoreUrl:images[0]
    })
    //this.swiper()
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

    audioContext.onPlay(res => {
      let audioContext = wx.getBackgroundAudioManager();
      console.log(" duration onPlay", audioContext.duration);
    });
    wx.onBackgroundAudioStop(res=>{
      console.log("stop")
      that.setData({
        imageSrc: that.data.toggleArray[0]
      })
    })
    audioContext.onCanplay(res => {
      let audioContext = wx.getBackgroundAudioManager();
      console.log(" duration onCanplay", audioContext.duration);
      that.swiper(audioContext.duration * 1000/4);
    });
    wx.onBackgroundAudioPlay(res => {
      console.log("onBackgroundAudioPlay", res)
      let audioContext = wx.getBackgroundAudioManager();
      console.log(" onBackgroundAudioPlay duration", audioContext.duration);
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

    console.log("duration", audioContext.duration);
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
    wx.stopBackgroundAudio();
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