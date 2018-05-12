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
<<<<<<< HEAD
<<<<<<< HEAD
    useLocal: false
    // domainName:"https://xinjushi.xyz"
    //domainName: "http://localhost:3000"
=======
    useLocal: false,
    domainName: AppConfig.serverDomain,
    openId:""
>>>>>>> c3d003b060d94a777d20c7dc0ea984bca8268d97
=======
    useLocal: false,
    domainName: AppConfig.serverDomain,
    openId:""
>>>>>>> c3d003b060d94a777d20c7dc0ea984bca8268d97
  }
});