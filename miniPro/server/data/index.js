const Appconfig = require("../lib/AppConfig")
module.exports={

  banner: [
    { url: `${Appconfig.serverDomain}/assets/images/banner1.jpg` },
    { url: `${Appconfig.serverDomain}/assets/images/banner2.jpg` },
    { url: `${Appconfig.serverDomain}/assets/images/banner3.jpg` }
    ],
      hotSongs:[
        {
          id: 10011,
          name: "H3M",
          singer: "陈奕迅",
          categoryId: 10010,
          gallery: [], // 系列相关图片
          listPicUrl:`${Appconfig.serverDomain}/assets/images/10011.jpg`,
          src:`${Appconfig.serverDomain}/assets/mp3/wenyou.mp3`
        },
        {
          id: 10021,
          name: "新的心跳",
          singer: "邓紫棋",
          categoryId: 10020,
          gallery: [], // 系列相关图片
          listPicUrl: `${Appconfig.serverDomain}/assets/images/10021.jpg`,
          src:`${Appconfig.serverDomain}/assets/mp3/wenyou.mp3`
        },
        {
          id: 10031,
          name: "心跳",
          singer: "王力宏",
          categoryId: 10030,
          gallery: [
            `${Appconfig.serverDomain}/assets/images/1.jpg`,
            `${Appconfig.serverDomain}/assets/images/2.jpg`,
            `${Appconfig.serverDomain}/assets/images/3.jpg`,
            `${Appconfig.serverDomain}/assets/images/4.jpg`,
            `${Appconfig.serverDomain}/assets/images/5.jpg`,
            `${Appconfig.serverDomain}/assets/images/6.jpg`,
            `${Appconfig.serverDomain}/assets/images/7.jpg`,
            `${Appconfig.serverDomain}/assets/images/8.jpg`,
            `${Appconfig.serverDomain}/assets/images/9.jpg`
          ], // 系列相关图片
          listPicUrl: `${Appconfig.serverDomain}/assets/images/10031.jpg`,
          src:`${Appconfig.serverDomain}/assets/mp3/wenyou.mp3`
        },
        {
          id: 10041,
          name: "温柔",
          singer: "五月天",
          categoryId: 10040,
          gallery: [
            `${Appconfig.serverDomain}/assets/images/wenyou.jpg`
          ], // 系列相关图片
          listPicUrl: `${Appconfig.serverDomain}/assets/images/10051.jpeg`,
          src:`${Appconfig.serverDomain}/assets/mp3/wenyou.mp3`
        } 
      ],
      title: "MusicApp"
  }