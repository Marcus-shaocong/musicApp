const Appconfig = require('../lib/AppConfig').get(process.env.NODE_ENV);
module.exports={

  banner: [
    { url: `${Appconfig.serverDomain}/assets/images/banner1.jpg` },
    { url: `${Appconfig.serverDomain}/assets/images/banner2.jpg` },
    { url: `${Appconfig.serverDomain}/assets/images/banner3.jpg` }
    ],
      title: "MusicApp"
  }