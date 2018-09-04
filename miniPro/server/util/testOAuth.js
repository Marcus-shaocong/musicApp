const axios = require('axios')
const Appconfig = require('../lib/AppConfig').get('production');
const Logger = require('../lib/logger').successlog

const  getAccess = async ()=>{

    const appid = Appconfig.appId
    const secret = Appconfig.appSecret
    const redirect_url = Appconfig.serverDomain
    const state = 123
    const scope = 'snsapi_login'
    Logger.info('appid', appid)
    Logger.info('secret', secret)
    Logger.info('redirect_url', redirect_url)
    const url = `https://open.weixin.qq.com/connect/qrconnect?appid=${appid}&redirect_uri=${redirect_url}&response_type=code&scope=${scope}E&state=${state}#wechat_redirect`

    console.log("url", url)
    let pageData = await axios({
        method:'get',
        //headers: {'User-Agent':ua},
        url:url,
    });

    //console.log('pageData', pageData)
}

getAccess()