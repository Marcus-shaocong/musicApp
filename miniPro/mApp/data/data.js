module.exports = {

  banner: [
    { url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524240261220&di=54504a8b4f17f04f49956243b5ca2615&imgtype=0&src=http%3A%2F%2Fpic111.nipic.com%2Ffile%2F20161012%2F20180988_122739592000_2.jpg" },
    { url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524240374344&di=429f7a323b5bb5f944a954785a4ff1f0&imgtype=0&src=http%3A%2F%2Fimg11.weikeimg.com%2Fdata%2Fuploads%2F2015%2F03%2F26%2F209159765513cb179c0a1.jpg" },
    { url: "http://img.daimg.com/uploads/allimg/180314/1-1P314222646.jpg" }
  ],
  hotSongs: [
    {
      id: 10011,
      name: "H3M",
      singer: "陈奕迅",
      categoryId: 10010,
      gallery: [], // 系列相关图片
      listPicUrl: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=976975328,2385022262&fm=27&gp=0.jpg",
      src: ""
    },
    {
      id: 10021,
      name: "新的心跳",
      singer: "邓紫棋",
      categoryId: 10020,
      gallery: [], // 系列相关图片
      listPicUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523899412138&di=c40392fda53558085a2137fe97e268ad&imgtype=0&src=http%3A%2F%2Fupload.ct.youth.cn%2F2015%2F0725%2F1437795369215.jpg",
      src: ""
    },
    {
      id: 10031,
      name: "心跳",
      singer: "王力宏",
      categoryId: 10030,
      gallery: [], // 系列相关图片
      listPicUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523899279560&di=469892e990b844447fcc32de5f03f183&imgtype=0&src=http%3A%2F%2Fpic.baike.soso.com%2Fp%2F20140105%2F20140105080441-1948394824.jpg",
      src: ""
    },
    {
      id: 10005,
      name: "温柔",
      singer: "五月天",
      categoryId: 10030,
      gallery: [
        "/images/data/1.jpg",
        "/images/data/2.jpg",
        "/images/data/3.jpg",
        "/images/data/4.jpg",
        "/images/data/5.jpg",
        "/images/data/6.jpg",
        "/images/data/7.jpg",
        "/images/data/8.jpg",
        "/images/data/9.jpg"
      ], // 系列相关图片
      listPicUrl: "http://img.xiami.net/images/album/img10/3110/15644_1.jpg",
      src: "/images/mp3/wenyou.mp3"
    }
  ],

  /*
   * raw array sent from server side could be :
   * array : [
   * { isCollected: false },
   * { isCollected: true },
   * { isCollected: false }
   * ]
   * then let client side do the transfer to:
   * array : [
   * { imgSrc: .., likeTest: .. },
   * { imgSrc: .., likeTest: .. },
   * { imgSrc: .., likeTest: .. }
   * ]
   */
  array: [
    {
      imgSrc: "../../images/icons/attention.png",
      likeText: "收藏",
      isCollected: false
    },
    {
      imgSrc: "../../images/icons/attentionT.png",
      likeText: "已收藏",
      isCollected: true
    },
    {
      imgSrc: "../../images/icons/attention.png",
      likeText: "收藏",
      isCollected: false
    },
    {
      imgSrc: "../../images/icons/attention.png",
      likeText: "收藏",
      isCollected: false
    }
  ]
}