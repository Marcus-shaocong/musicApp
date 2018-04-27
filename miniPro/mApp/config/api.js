// 以下是业务服务器API地址
// 本机开发时使用
var WxApiRoot = 'https://xinjushi.xyz/api/';
//var WxApiRoot = 'http://localhost:3000/api/';
// 局域网测试使用
// var WxApiRoot = 'http://192.168.0.101:8082/wx/';
// 云平台部署时使用
//var WxApiRoot = 'http://122.152.206.172:8082/wx/';

// 以下是图片存储服务器API地址
// 本机开发时使用
// var StorageApi = 'http://localhost:8081/storage/storage/create';
// 局域网测试时使用
// var StorageApi = 'http://192.168.0.101:8081/storage/storage/create';
// 云平台部署时使用
//var StorageApi = 'http://122.152.206.172:8081/storage/storage/create';


module.exports = {
  IndexUrl: WxApiRoot + 'index', //首页数据接口
};