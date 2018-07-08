const config = {
  production: {
    serverDomain: "https://xinjushi.xyz",
    apiUrl: 'https://xinjushi.xyz/api/',
    debug: true,
  },
  dev: {
    serverDomain: "http://localhost:3000",
    apiUrl: 'http://localhost:3000/api/',
    debug: true,
  }
}

module.exports = config.production;