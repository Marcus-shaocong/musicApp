//app.js
const AppConfig = require("./config/AppConfig.js");
const AuthUtils = require('./utils/AuthUtils');

App({
  onLaunch: function (loginOptions) {
    var thiz = this;
    console.log("onLaunch", loginOptions)
    AuthUtils.launchLogin(loginOptions)
  },

  globalData: {
    userInfo: null,
    useLocal: false,
    domainName: AppConfig.serverDomain,
    openId:""
  }
});