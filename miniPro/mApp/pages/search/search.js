const searchD = require("../../data/searchData.js");
const localData = require("../../data/data.js");
const util = require("../../utils/util.js")
const api = require('../../config/api.js');
var app = getApp()
Page({
  data: {
    keywrod: '',
    searchStatus: false,
    goodsList: [],
    helpKeyword: [],
    historyKeyword: [],
    categoryFilter: false,
    currentSortType: 'default',
    currentSortOrder: 'desc',
    filterCategory: [],
    defaultKeyword: {},
    hotKeyword: [],
    page: 1,
    size: 20,
    categoryId: 0
  },
  //事件处理函数
  closeSearch: function () {
    this.clearKeyword();
  },
  clearKeyword: function () {
    this.setData({
      keyword: '',
      searchStatus: false
    });
  },
  onLoad: function () {
    this.getSearchKeyword();
  },

  getSearchKeyword() {
    let that = this;
    console.log("search", searchD.data[0].hotKeywordList )
    that.setData({
      defaultKeyword: searchD.data[0].defaultKeyword,
      historyKeyword: searchD.data[0].historyKeywordList,
      hotKeyword: searchD.data[0].hotKeywordList
    });
  },

  inputChange: function (e) {
    console.log("inputChange", e);
    this.setData({
      keyword: e.detail.value,
      searchStatus: false
    });
    this.getHelpKeyword();
  },
  getHelpKeyword: function () {
    let that = this;
    console.log("getHelpKeyword", that.data.keyword)
    util.request(api.SearchHelper, { keyword: that.data.keyword }).then(function (res) {
        that.setData({
          helpKeyword: res
        });
    });
  },

  inputFocus: function () {
    console.log("inputFoucs")
    this.setData({
      searchStatus: false,
      goodsList: []
    });

    if (this.data.keyword) {
      this.getHelpKeyword();
    }
  },
  clearHistory: function () {
    console.log("clearHistroy")
    this.setData({
      historyKeyword: []
    })
/*
    util.request(api.SearchClearHistory, {}, 'POST')
      .then(function (res) {
        console.log('清除成功');
      });*/
  },
  getGoodsList: function () {
    let that = this;
    console.log("getGoodsList", that.data.keyword)

/*
    let songList = localData.hotSongs.filter(item=>{
      console.log("item.name:", item.name);
      if(item.name.includes(that.data.keyword) ||
        item.singer.includes(that.data.keyword)){
          return true;
        }
      else{
          return false;
      }
    })
    console.log("songList", songList);
    let that = this;
    that.setData({
      searchStatus: true,
      categoryFilter: false,
      goodsList: songList
    });
    that.getSearchKeyword()*/
    
    util.request(api.SearchResult, { keyword: that.data.keyword, page: that.data.page, size: that.data.size, sort: that.data.currentSortType, order: that.data.currentSortOrder, categoryId: that.data.categoryId }).then(function (res) {
      console.log("result", res);
        that.setData({
          searchStatus: true,
          categoryFilter: false,
          goodsList: res,
          filterCategory: null
        });

      //重新获取关键词
      //that.getSearchKeyword();
    });
  },
  onKeywordTap: function (event) {
    console.log("onKeywordTap", event)
    this.getSearchResult(event.target.dataset.keyword);
  },

  getSearchResult(keyword) {
    console.log("getSearchResult", keyword)
    if (keyword === '') {
      keyword = this.data.defaultKeyword.keyword;
    }
    this.setData({
      keyword: keyword,
      page: 1,
      categoryId: 0,
      goodsList: []
    });

    this.getGoodsList();
  },
  openSortFilter: function (event) {
    console.log("openSortFilter", event);
    let currentId = event.currentTarget.id;
    switch (currentId) {
      case 'categoryFilter':
        this.setData({
          categoryFilter: !this.data.categoryFilter,
          currentSortOrder: 'asc'
        });
        break;
      case 'priceSort':
        let tmpSortOrder = 'asc';
        if (this.data.currentSortOrder == 'asc') {
          tmpSortOrder = 'desc';
        }
        this.setData({
          currentSortType: 'price',
          currentSortOrder: tmpSortOrder,
          categoryFilter: false
        });

        this.getGoodsList();
        break;
      default:
        //综合排序
        this.setData({
          currentSortType: 'default',
          currentSortOrder: 'desc',
          categoryFilter: false
        });
        this.getGoodsList();
    }
  },
  selectCategory: function (event) {
    console.log("selectCategory", event);
    let currentIndex = event.target.dataset.categoryIndex;
    let filterCategory = this.data.filterCategory;
    let currentCategory = null;
    for (let key in filterCategory) {
      if (key == currentIndex) {
        filterCategory[key].selected = true;
        currentCategory = filterCategory[key];
      } else {
        filterCategory[key].selected = false;
      }
    }
    this.setData({
      filterCategory: filterCategory,
      categoryFilter: false,
      categoryId: currentCategory.id,
      page: 1,
      goodsList: []
    });
    this.getGoodsList();
  },
  onKeywordConfirm(event) {
    console.log("onKeywordConfirm")
    this.getSearchResult(event.detail.value);
  }
})