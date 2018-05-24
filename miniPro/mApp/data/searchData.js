const testData=[
  {
    defaultKeyword: { deleted: false, id: 6, isDefault: true, isHost: true, isShow: true, keyword: "H3M", sortOrder: 1, url: "" },
      historyKeywordList: null,
      hotKeyword: ['H3M', 'I believe I can fly'],
      hotKeywordList: [{ deleted: false, id: 6, isDefault: true, isHost: true, isShow: true, keyword: "温柔", sortOrder: 1, url: "" },
      { deleted: false, id: 7, isDefault: true, isHost: true, isShow: true, keyword: "H3M", sortOrder: 1, url: "" }],
      helpKeyword: ['H3M', 'I believe I can fly']
  },
  {
    historyKeywordList: ['H3M', 'I believe I can fly'],
    defaultKeyword: ['H3M', 'I believe I can fly'],
    hotKeyword: ['H3M', 'I believe I can fly'],
    hotKeywordList: ['H3M', 'I believe I can fly']
  },
  {
    historyKeywordList: ['H3M', 'I believe I can fly'],
    defaultKeyword: ['H3M', 'I believe I can fly'],
    hotKeyword: ['H3M', 'I believe I can fly'],
    hotKeywordList: ['H3M', 'I believe I can fly']

  }
]

module.exports = {
  data: testData
}