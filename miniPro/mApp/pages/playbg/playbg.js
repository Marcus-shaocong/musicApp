const app = getApp();
const imageTime = [13.0,17.0,18.0,19.0,23.0,25.0, 28.0,29.0,37.0 ];
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
    aniState:"running",
    playUrl:"",
    playState: false,
    curTime: '00:00',
    image1:"",
    image2:"",
    image3:"",
    audioContext: '',
    curValue: '',
    bgUrl: "",
    scoreUrl:"",
    animation:{},
    animationData1:"",
    step:0,
    alreadyStart:false,
    swiperItr:800,
    musicPrefixTime:4,
    musicDuration: 6000,
    autop:false,
  },

  swiper: function (dur, degree) {
    console.log("swiper", dur);
    let that = this;
    let animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'linear',
    })
    animation.rotate(360).step()
    animation.scale(2,2).step()
    animation.scale(1,1).step()
    this.setData({
      animationData1: animation.export(),
    })
  },

  moveDown: function (degree) {
    console.log("moveDown");
    let that = this;
    let animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'step-end',
    })
    animation.translateY(degree).step({ duration: 1000 })
    this.setData({
      animationData1: animation.export(),
    })
  },

  onMove: function (dur, degree){
    console.log("onMove", dur);
    let that = this;
    console.log('musicDur', that.data.musicDuration)
    let animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'step-start',
      transformOrigin: "-50% -50%",
    })
    animation.translateY(300).step({duration:500})
    animation.translateY(-300).step({ duration: that.data.musicDuration })

    this.setData({
      animationData1: animation.export(),
    })
  },

  stopAni: function () {
    console.log("stopAni");
    let that = this;
    let animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'step-end',
    })
    animation.translateY(1).step({ duration: 500 })
    //animation.rotate(90).step();

    this.setData({
      animationData1: animation.export(),     
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
      scoreUrl:images[0],
      image1: song[0].gallery[0],
      scores:song[0].gallery,
      musicPrefixTime:4
    });
    that.swiper();
  },

  getImageIndex: function(curTime){
    let index = 0;
    if(curTime != undefined){
      while(Number(curTime) > Number(imageTime[index])){
        if(index>=imageTime.length){
          break;
        }
        index++;
      }
    }
    return index;
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
      /*
      let imageInx = this.getImageIndex(audioContext.currentTime);
      console.log("imageInx", imageInx)
      if(that.data.activeIndex != imageInx){
        that.setData({ activeIndex: imageInx });
      }*/
           
      if (!that.data.autop && !that.data.alreadyStart){
        console.log("prefixtime", that.data.musicPrefixTime );
        if (Number(audioContext.currentTime) > Number(that.data.musicPrefixTime))
        {
          console.log("Ready to go");
          that.setData({
            musicDuration: audioContext.duration * 1000 / 6,
            autop:true, alreadyStart: true});
        }
      }
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
        imageSrc: that.data.toggleArray[0],
        autop: false
      })
    })
    audioContext.onCanplay(res => {
      let audioContext = wx.getBackgroundAudioManager();
      console.log(" duration onCanplay", audioContext.duration);
      let len = that.data.scores.length;
      console.log("image lenght", len);
      /*
      that.setData({
        musicDuration: audioContext.duration * 1000 / 6,
        swiperItr:500,
      })*/
      //that.swiper(audioContext.duration * 1000/4);
    });
    wx.onBackgroundAudioPlay(res => {
      console.log("onBackgroundAudioPlay", res)
      let audioContext = wx.getBackgroundAudioManager();
      console.log(" onBackgroundAudioPlay duration", audioContext.duration);
      if(audioContext.duration){
        /*
        that.setData({
          //musicDuration: audioContext.duration * 1000 / 4,
          autop: false
        })*/
      }
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
        imageSrc: that.data.toggleArray[1],
      })
      wx.playBackgroundAudio({
        dataUrl: that.data.playUrl,
      });
      if(that.data.alreadyStart){
        that.setData({
          autop: true
        })
      }
      that.onTimeUpdate();
    }
    else {
      that.setData({
        imageSrc: that.data.toggleArray[0],
        autop: false
      });
      wx.pauseBackgroundAudio();
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
    wx.onBackgroundAudioPlay(res => {
      console.log("onBackgroundAudioPlay", res)
      let audioContext = wx.getBackgroundAudioManager();
      console.log(" onBackgroundAudioPlay duration", audioContext.duration);
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

  intervalChange: function (e) {
    this.setData({
      swiperItr: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      swiperDur: e.detail.value
    })
  },

  bingchange:function(e){
    console.log('bingchange', e);
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