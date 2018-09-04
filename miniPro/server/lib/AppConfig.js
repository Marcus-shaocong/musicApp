let AppConfig = {
    production: {
        serverDomain:"https://xinjushi.xyz",
        appId: "wxecb99e4db814c055",
        appSecret: "c1553926d21e7caf9391b2c9e314c1a1"
    },
    dev: {
        serverDomain:"http://localhost:3000",
        appId: "wxecb99e4db814c055",
        appSecret: "c1553926d21e7caf9391b2c9e314c1a1" 
    }
}

const getEnv = function get(env) {
    return AppConfig[env] || AppConfig.dev;
  }

module.exports={
    get:getEnv
}
