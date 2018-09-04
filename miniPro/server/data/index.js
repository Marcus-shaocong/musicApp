const Appconfig = require('../lib/AppConfig').get(process.env.NODE_ENV);
module.exports={

  banner: [
    { url: `${Appconfig.serverDomain}/assets/images/banner1.jpg` },
    { url: `${Appconfig.serverDomain}/assets/images/banner2.jpg` },
    { url: `${Appconfig.serverDomain}/assets/images/banner3.jpg` }
    ],
<<<<<<< HEAD
=======
      hotSongs:[
        {
          id: 10011,
          name: "H3M",
          singer: "陈奕迅",
          categoryId: 10010,
          gallery: [
            { time: 16.262, image: `${Appconfig.serverDomain}/assets/images/wenrou_v8_1.png`},
            { time: 19.563, image: `${Appconfig.serverDomain}/assets/images/wenrou_v8_2.png`},
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_v8_3.png`},
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_v8_4.png`},
            { time: 10.502, image: `${Appconfig.serverDomain}/assets/images/wenrou_v8_5.png`},
            { time: 11.101, image: `${Appconfig.serverDomain}/assets/images/wenrou_v8_6.png`},
            { time: 16.262, image: `${Appconfig.serverDomain}/assets/images/wenrou_v8_7.png`},
            { time: 19.563, image: `${Appconfig.serverDomain}/assets/images/wenrou_v8_8.png`},
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_v8_9.png`},
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_v8_10.png`},
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_v8_11.png`},
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_v8_12.png`},
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_v8_13.png`},
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_v8_14.png`},
          ], // 系列相关图片
          listPicUrl:`${Appconfig.serverDomain}/assets/images/10011.jpg`,
          src:`${Appconfig.serverDomain}/assets/mp3/wenyou.mp3`,
          hardLevel:4,
          saveOption:{
            imgSrc: "../../images/icons/attention.png",
            likeText: "收藏",
            isCollected: false
          }
        },
        {
          id: 10021,
          name: "新的心跳",
          singer: "邓紫棋",
          categoryId: 10020,
          gallery: [
            { time: 16.262, image: `${Appconfig.serverDomain}/assets/images/wenrou_v6_1.png` },
            { time: 19.563, image: `${Appconfig.serverDomain}/assets/images/wenrou_v6_2.png` },
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_v6_3.png` },
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_v6_4.png` },
            { time: 10.502, image: `${Appconfig.serverDomain}/assets/images/wenrou_v6_5.png` },
            { time: 11.101, image: `${Appconfig.serverDomain}/assets/images/wenrou_v6_6.png` },
            { time: 16.262, image: `${Appconfig.serverDomain}/assets/images/wenrou_v6_7.png` },
            { time: 19.563, image: `${Appconfig.serverDomain}/assets/images/wenrou_v6_8.png` },
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_v6_9.png`}
          ], // 系列相关图片
          listPicUrl: `${Appconfig.serverDomain}/assets/images/10021.jpg`,
          src:`${Appconfig.serverDomain}/assets/mp3/wenyou.mp3`,
          hardLevel:3,
          saveOption:{
            imgSrc: "../../images/icons/attention.png",
            likeText: "收藏",
            isCollected: false
          }

        },
        {
          id: 10031,
          name: "心跳",
          singer: "王力宏",
          categoryId: 10030,
          gallery: [
            { time: 16.262, image: `${Appconfig.serverDomain}/assets/images/wenrou_v6_1.png` },
            { time: 19.563, image: `${Appconfig.serverDomain}/assets/images/wenrou_v6_2.png` },
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_v6_3.png` },
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_v6_4.png` },
            { time: 10.502, image: `${Appconfig.serverDomain}/assets/images/wenrou_v6_5.png` },
            { time: 11.101, image: `${Appconfig.serverDomain}/assets/images/wenrou_v6_6.png` },
            { time: 16.262, image: `${Appconfig.serverDomain}/assets/images/wenrou_v6_7.png` },
            { time: 19.563, image: `${Appconfig.serverDomain}/assets/images/wenrou_v6_8.png` },
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_v6_9.png`}
          ], // 系列相关图片
          listPicUrl: `${Appconfig.serverDomain}/assets/images/10031.jpg`,
          src:`${Appconfig.serverDomain}/assets/mp3/wenyou.mp3`,
          hardLevel:3,
          saveOption:{
            imgSrc: "../../images/icons/attention.png",
            likeText: "收藏",
            isCollected: false
          }
        },
        {
          id: 10041,
          name: "温柔",
          singer: "五月天",
          categoryId: 10040,
          gallery: [
            { time: 16.262, image: `${Appconfig.serverDomain}/assets/images/wenrou_v8_1.png`},
            { time: 19.563, image: `${Appconfig.serverDomain}/assets/images/wenrou_v8_2.png`},
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_v8_3.png`},
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_v8_4.png`},
            { time: 10.502, image: `${Appconfig.serverDomain}/assets/images/wenrou_v8_5.png`},
            { time: 11.101, image: `${Appconfig.serverDomain}/assets/images/wenrou_v8_6.png`},
            { time: 16.262, image: `${Appconfig.serverDomain}/assets/images/wenrou_v8_7.png`},
            { time: 19.563, image: `${Appconfig.serverDomain}/assets/images/wenrou_v8_8.png`},
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_v8_9.png`},
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_v8_10.png`},
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_v8_11.png`},
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_v8_12.png`},
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_v8_13.png`},
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_v8_14.png`},
          ], // 系列相关图片
          listPicUrl: `${Appconfig.serverDomain}/assets/images/10041.jpeg`,
          src:`${Appconfig.serverDomain}/assets/mp3/wenyou.mp3`,
          hardLevel:2,
          saveOption:{
            imgSrc: "../../images/icons/attention.png",
            likeText: "收藏",
            isCollected: false
          }
        },
        {
          id: 10051,
          name: "over and over",
          singer: "Rachael Yamagata",
          categoryId: 10040,
          gallery: [
            { time: 10.502, image: `${Appconfig.serverDomain}/assets/images/wenrou_1.png` },
            { time: 11.101, image: `${Appconfig.serverDomain}/assets/images/wenrou_2.png` },
            { time: 16.262, image: `${Appconfig.serverDomain}/assets/images/wenrou_3.png` },
            { time: 19.563, image: `${Appconfig.serverDomain}/assets/images/wenrou_4.png` },
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_5.png` },
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_6.png` },
          ], // 系列相关图片
          listPicUrl: `${Appconfig.serverDomain}/assets/images/over_and_over.jpg`,
          src:`${Appconfig.serverDomain}/assets/mp3/over_and_over.mp3`,
          hardLevel:2,
          saveOption:{
            imgSrc: "../../images/icons/attention.png",
            likeText: "收藏",
            isCollected: false
          }
        },
        {
          id: 10052,
          name: "Carry on",
          singer: "Janelle Monáe",
          categoryId: 10040,
          gallery: [
            { time: 10.502, image: `${Appconfig.serverDomain}/assets/images/wenrou_1.png` },
            { time: 11.101, image: `${Appconfig.serverDomain}/assets/images/wenrou_2.png` },
            { time: 16.262, image: `${Appconfig.serverDomain}/assets/images/wenrou_3.png` },
            { time: 19.563, image: `${Appconfig.serverDomain}/assets/images/wenrou_4.png` },
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_5.png` },
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_6.png` },
          ], // 系列相关图片
          listPicUrl: `${Appconfig.serverDomain}/assets/images/carry_on.jpg`,
          src:`${Appconfig.serverDomain}/assets/mp3/carry_on.mp3`,
          hardLevel:2,
          saveOption:{
            imgSrc: "../../images/icons/attention.png",
            likeText: "收藏",
            isCollected: false
          }
        },
        {
          id: 10061,
          name: "I wanna hold your hand",
          singer: "The Beatles Tribute",
          categoryId: 10040,
          gallery: [
            { time: 10.502, image: `${Appconfig.serverDomain}/assets/images/wenrou_1.png` },
            { time: 11.101, image: `${Appconfig.serverDomain}/assets/images/wenrou_2.png` },
            { time: 16.262, image: `${Appconfig.serverDomain}/assets/images/wenrou_3.png` },
            { time: 19.563, image: `${Appconfig.serverDomain}/assets/images/wenrou_4.png` },
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_5.png` },
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_6.png` },
          ], // 系列相关图片
          listPicUrl: `${Appconfig.serverDomain}/assets/images/I_wanna_hold_your_hand.jpg`,
          src:`${Appconfig.serverDomain}/assets/mp3/I_wanna_hold_your_hand.mp3`,
          hardLevel:2,
          saveOption:{
            imgSrc: "../../images/icons/attention.png",
            likeText: "收藏",
            isCollected: false
          }
        },
        {
          id: 10071,
          name: "Call me maybe",
          singer: "Tiffany Alvord",
          categoryId: 10040,
          gallery: [
            { time: 10.502, image: `${Appconfig.serverDomain}/assets/images/wenrou_1.png` },
            { time: 11.101, image: `${Appconfig.serverDomain}/assets/images/wenrou_2.png` },
            { time: 16.262, image: `${Appconfig.serverDomain}/assets/images/wenrou_3.png` },
            { time: 19.563, image: `${Appconfig.serverDomain}/assets/images/wenrou_4.png` },
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_5.png` },
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_6.png` },
          ], // 系列相关图片
          listPicUrl: `${Appconfig.serverDomain}/assets/images/call_me_maybe.jpg`,
          src:`${Appconfig.serverDomain}/assets/mp3/call_me_maybe.mp3`,
          hardLevel:2,
          saveOption:{
            imgSrc: "../../images/icons/attention.png",
            likeText: "收藏",
            isCollected: false
          }
        } ,
        {
          id: 10081,
          name: "It is heartache",
          singer: "Rod Stewart",
          categoryId: 10040,
          gallery: [
            { time: 10.502, image: `${Appconfig.serverDomain}/assets/images/wenrou_1.png` },
            { time: 11.101, image: `${Appconfig.serverDomain}/assets/images/wenrou_2.png` },
            { time: 16.262, image: `${Appconfig.serverDomain}/assets/images/wenrou_3.png` },
            { time: 19.563, image: `${Appconfig.serverDomain}/assets/images/wenrou_4.png` },
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_5.png` },
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_6.png` },
          ], // 系列相关图片
          listPicUrl: `${Appconfig.serverDomain}/assets/images/it_is_heartache.jpg`,
          src:`${Appconfig.serverDomain}/assets/mp3/It_is_hearache.mp3`,
          hardLevel:2,
          saveOption:{
            imgSrc: "../../images/icons/attention.png",
            likeText: "收藏",
            isCollected: false
          }
        },
        {
          id: 10091,
          name: "Marry you",
          singer: "Bruno Mars",
          categoryId: 10040,
          gallery: [
            { time: 10.502, image: `${Appconfig.serverDomain}/assets/images/wenrou_1.png` },
            { time: 11.101, image: `${Appconfig.serverDomain}/assets/images/wenrou_2.png` },
            { time: 16.262, image: `${Appconfig.serverDomain}/assets/images/wenrou_3.png` },
            { time: 19.563, image: `${Appconfig.serverDomain}/assets/images/wenrou_4.png` },
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_5.png` },
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_6.png` },
          ], // 系列相关图片
          listPicUrl: `${Appconfig.serverDomain}/assets/images/marry_you.jpg`,
          src:`${Appconfig.serverDomain}/assets/mp3/marry_you.mp3`,
          hardLevel:2,
          saveOption:{
            imgSrc: "../../images/icons/attention.png",
            likeText: "收藏",
            isCollected: false
          }
        },
        {
          id: 10092,
          name: "Let it be",
          singer: "Paul McCartney",
          categoryId: 10040,
          gallery: [
            { time: 10.502, image: `${Appconfig.serverDomain}/assets/images/wenrou_1.png` },
            { time: 11.101, image: `${Appconfig.serverDomain}/assets/images/wenrou_2.png` },
            { time: 16.262, image: `${Appconfig.serverDomain}/assets/images/wenrou_3.png` },
            { time: 19.563, image: `${Appconfig.serverDomain}/assets/images/wenrou_4.png` },
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_5.png` },
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_6.png` },
          ], // 系列相关图片
          listPicUrl: `${Appconfig.serverDomain}/assets/images/let_it_be.jpg`,
          src:`${Appconfig.serverDomain}/assets/mp3/let_it_be.mp3`,
          hardLevel:2,
          saveOption:{
            imgSrc: "../../images/icons/attention.png",
            likeText: "收藏",
            isCollected: false
          }
        },
        {
          id: 10093,
          name: "No woman no cry",
          singer: "Bob Marley",
          categoryId: 10040,
          gallery: [
            { time: 10.502, image: `${Appconfig.serverDomain}/assets/images/wenrou_1.png` },
            { time: 11.101, image: `${Appconfig.serverDomain}/assets/images/wenrou_2.png` },
            { time: 16.262, image: `${Appconfig.serverDomain}/assets/images/wenrou_3.png` },
            { time: 19.563, image: `${Appconfig.serverDomain}/assets/images/wenrou_4.png` },
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_5.png` },
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_6.png` },
          ], // 系列相关图片
          listPicUrl: `${Appconfig.serverDomain}/assets/images/no_woman_no_cry.jpg`,
          src:`${Appconfig.serverDomain}/assets/mp3/no_woman_no_cry.mp3`,
          hardLevel:2,
          saveOption:{
            imgSrc: "../../images/icons/attention.png",
            likeText: "收藏",
            isCollected: false
          }
        },
        {
          id: 10094,
          name: "We are young",
          singer: "Janelle Monáe",
          categoryId: 10040,
          gallery: [
            { time: 10.502, image: `${Appconfig.serverDomain}/assets/images/wenrou_1.png` },
            { time: 11.101, image: `${Appconfig.serverDomain}/assets/images/wenrou_2.png` },
            { time: 16.262, image: `${Appconfig.serverDomain}/assets/images/wenrou_3.png` },
            { time: 19.563, image: `${Appconfig.serverDomain}/assets/images/wenrou_4.png` },
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_5.png` },
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_6.png` },
          ], // 系列相关图片
          listPicUrl: `${Appconfig.serverDomain}/assets/images/we_are_young.jpg`,
          src:`${Appconfig.serverDomain}/assets/mp3/we_are_young.mp3`,
          hardLevel:4,
          saveOption:{
            imgSrc: "../../images/icons/attention.png",
            likeText: "收藏",
            isCollected: false
          }
        },
        {
          id: 10095,
          name: "I believe I can fly",
          singer: "Ronan Keating",
          categoryId: 10040,
          gallery: [
            { time: 10.502, image: `${Appconfig.serverDomain}/assets/images/wenrou_1.png` },
            { time: 11.101, image: `${Appconfig.serverDomain}/assets/images/wenrou_2.png` },
            { time: 16.262, image: `${Appconfig.serverDomain}/assets/images/wenrou_3.png` },
            { time: 19.563, image: `${Appconfig.serverDomain}/assets/images/wenrou_4.png` },
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_5.png` },
            { time: 22.968, image: `${Appconfig.serverDomain}/assets/images/wenrou_6.png` },
          ], // 系列相关图片
          listPicUrl: `${Appconfig.serverDomain}/assets/images/I_believe_I_can_fly.jpg`,
          src:`${Appconfig.serverDomain}/assets/mp3/I_belive_I_can_fly.mp3`,
          hardLevel:3,
          saveOption:{
            imgSrc: "../../images/icons/attention.png",
            likeText: "收藏",
            isCollected: false
          }
        } 

      ],
>>>>>>> b4eb278aaaa1460f54e0207a400680b3baf5021c
      title: "MusicApp"
  }