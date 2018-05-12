const localData = require("../../data/data")
const app = getApp();

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
    swiperItr:6000,
    musicPrefixTime:3,
    musicDuration: 6000,
    autop:false,
    imageData:[],
    activateIndex:1,
    opac:0.8
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
      timingFunction: 'ease',
    })
    //animation.translateY(100).translateY(-50).step({ duration: 50 })
    animation.scale(2, 2).step({ duration: 100 })
    animation.scale(1, 1).step({ duration: 100 })
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
    animation.translateY(100).step({ duration: 500 })
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
    console.log("song", song[0].gallery);
    console.log("laddy", `${app.globalData.domainName}/assets/images/laddy.jpg`);
    //let songSrc = "https://xinjushi.xyz/assets/mp3/wenyou.mp3"
    that.setData({
      bgUrl: `${app.globalData.domainName}/assets/images/laddy.jpg`,
      playUrl: song[0].src,
      image2: song[0].gallery[0].image,
      image3: song[0].gallery[1].image,
      scores:song[0].gallery,
      musicPrefixTime:4,
      imageData: song[0].gallery,
    });
    that.page.setData({
      "isScroll":false
    })
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

  getIndex: function (curTime) {
    let that = this;
    console.log("imageData", that);
    let d = 0;
    if (0 == that.data.imageData.length)
      return d;
    for (let e = 0, f = that.data.imageData.length; f > e; e++) {
      if (Number(curTime) < Number(that.data.imageData[e].time)) {
        d = e - 1;
        break
      }
      if (curTime > that.data.imageData[f - 1].time) {
        d = f - 1;
        break
      }
    }
    return d = -1 == d ? 0 : d
  },  

  onTimeUpdate: function (opts) {
    let that = this;
    let audioContext = wx.getBackgroundAudioManager();
    audioContext.onTimeUpdate((res) => {
      console.log("onTimeUpdate", res)
      console.log('ix onTimeUpdate curTime', audioContext.currentTime)
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
           
      console.log("imageUrl", that.data.image1);
      let ix = that.getIndex(audioContext.currentTime);
      let dataLen = that.data.imageData.length;
      console.log("ix", ix, that.data.imageData[ix]);
      if (that.data.image2 != that.data.imageData[ix].image) {
        console.log("len", that.data.imageData.length )
       //console.log("debuglog", ix, that.data.imageData[ix + 1].image, that.data.imageData[ix - 1].image)
        let image3Data = ix+1 >= that.data.imageData.length ? "" : that.data.imageData[ix+1].image;
        let image1Data = ix - 1 < 0? "" : that.data.imageData[ix-1].image;
        console.log("image1Data", image1Data, image3Data);
        that.setData({
          image1: image1Data,
          image2: that.data.imageData[ix].image,
          image3: image3Data,
          opac:0.8
        });
        if (image1Data != ""){
          that.onMove();
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
    console.log("onTouchEnd", options)
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
    let that = this;
    /*
    let audioContext = wx.getBackgroundAudioManager();
    console.log("imageUrl", that.data.image1);
    let ix = that.getIndex(audioContext.currentTime);
    console.log("ix", ix, that.data.imageData[ix]);
    if(that.data.image1 != that.data.imageData[ix])
    {
      that.setData({
        image1: that.data.imageData[ix]
      })
    }*/
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