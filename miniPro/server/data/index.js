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
          gallery: [
            { time: 10.502, image: `${Appconfig.serverDomain}/assets/images/1.jpg` },
            { time: 11.101, image: `${Appconfig.serverDomain}/assets/images/2.jpg` },
            { time: 16.262, image: `${Appconfig.serverDomain}/assets/images/3.jpg` },
            { time: 19.563, image: `${Appconfig.serverDomain}/assets/images/4.jpg` },
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/5.jpg` },
            { time: 25.883, image: `${Appconfig.serverDomain}/assets/images/6.jpg` },
            { time: 28.384, image: `${Appconfig.serverDomain}/assets/images/7.jpg` },
            { time: 31.557, image: `${Appconfig.serverDomain}/assets/images/8.jpg` },
            { time: 35.181, image: `${Appconfig.serverDomain}/assets/images/9.jpg` },
            { time: 35.181, image: `${Appconfig.serverDomain}/assets/images/wenrou_full.jpg` },
          ], // 系列相关图片
          listPicUrl:`${Appconfig.serverDomain}/assets/images/10011.jpg`,
          src:`${Appconfig.serverDomain}/assets/mp3/wenyou.mp3`,
          hardLevel:4
        },
        {
          id: 10021,
          name: "新的心跳",
          singer: "邓紫棋",
          categoryId: 10020,
          gallery: [
            { time: 10.502, image: `${Appconfig.serverDomain}/assets/images/1.jpg` },
            { time: 11.101, image: `${Appconfig.serverDomain}/assets/images/2.jpg` },
            { time: 16.262, image: `${Appconfig.serverDomain}/assets/images/3.jpg` },
            { time: 19.563, image: `${Appconfig.serverDomain}/assets/images/4.jpg` },
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/5.jpg` },
            { time: 25.883, image: `${Appconfig.serverDomain}/assets/images/6.jpg` },
            { time: 28.384, image: `${Appconfig.serverDomain}/assets/images/7.jpg` },
            { time: 31.557, image: `${Appconfig.serverDomain}/assets/images/8.jpg` },
            { time: 35.181, image: `${Appconfig.serverDomain}/assets/images/9.jpg` },
            { time: 35.181, image: `${Appconfig.serverDomain}/assets/images/wenrou_full.jpg` },
          ], // 系列相关图片
          listPicUrl: `${Appconfig.serverDomain}/assets/images/10021.jpg`,
          src:`${Appconfig.serverDomain}/assets/mp3/wenyou.mp3`,
          hardLevel:3
        },
        {
          id: 10031,
          name: "心跳",
          singer: "王力宏",
          categoryId: 10030,
          gallery: [
            { time: 10.502, image: `${Appconfig.serverDomain}/assets/images/1.jpg` },
            { time: 11.101, image: `${Appconfig.serverDomain}/assets/images/2.jpg` },
            { time: 16.262, image: `${Appconfig.serverDomain}/assets/images/3.jpg` },
            { time: 19.563, image: `${Appconfig.serverDomain}/assets/images/4.jpg` },
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/5.jpg` },
            { time: 25.883, image: `${Appconfig.serverDomain}/assets/images/6.jpg` },
            { time: 28.384, image: `${Appconfig.serverDomain}/assets/images/7.jpg` },
            { time: 31.557, image: `${Appconfig.serverDomain}/assets/images/8.jpg` },
            { time: 35.181, image: `${Appconfig.serverDomain}/assets/images/9.jpg` },
            { time: 35.181, image: `${Appconfig.serverDomain}/assets/images/wenrou_full.jpg` },
          ], // 系列相关图片
          listPicUrl: `${Appconfig.serverDomain}/assets/images/10031.jpg`,
          src:`${Appconfig.serverDomain}/assets/mp3/wenyou.mp3`,
          hardLevel:3
        },
        {
          id: 10041,
          name: "温柔",
          singer: "五月天",
          categoryId: 10040,
          gallery: [
            { time: 10.502, image: `${Appconfig.serverDomain}/assets/images/wenrou_1.png` },
            { time: 11.101, image: `${Appconfig.serverDomain}/assets/images/wenrou_2.png` },
            { time: 16.262, image: `${Appconfig.serverDomain}/assets/images/wenrou_3.png` },
            { time: 19.563, image: `${Appconfig.serverDomain}/assets/images/wenrou_4.png` },
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_5.png` },
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_6.png` },
          ], // 系列相关图片
          listPicUrl: `${Appconfig.serverDomain}/assets/images/10041.jpeg`,
          src:`${Appconfig.serverDomain}/assets/mp3/wenyou.mp3`,
          hardLevel:2
        } 
      ],
      title: "MusicApp"
  }