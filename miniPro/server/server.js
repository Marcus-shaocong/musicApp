const debug = require('debug-levels')('server')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const serveStatic = require('serve-static')
const path = require('path')

const rootRouter = require('./routes/root')


Error.stackTraceLimit = 75

// changed in 4.16
// https://stackoverflow.com/questions/5710358/how-to-retrieve-post-query-parameters
app.use(express.json())

// output pretty json
app.set('json spaces', 2);

app.get('*', function (req, res, next) {
  debug.log('path', req.originalUrl)
  next()
})

// routes
app.get('/ping', function (req, res) {
  res.send('server pong')
})

app.use('/api/index', rootRouter)


process.on('uncaughtException', function(err) {
  debug.error('ERROR', err)
})

app.use( (err, req, res, next) => {
  debug.error('err', err)
  debug.error('req', req)
})

// app.use('*', function(req, res) {
//   // debug.error('404.req ', req)
//   debug.error('404.originalUrl ', req.originalUrl)
//   debug.error('404.method ', req.method)
//   res.status(404).send('404')
// })

const port = process.env.PORT || 3000

async function startUp() {

  // app.use(serveStatic('./public', {'index': ['index.html']}))
  app.use(serveStatic(path.join(__dirname, 'public')))
  app.use('/assets', express.static(path.join(__dirname, 'assets')))
  app.use('/.well-known', express.static(path.join(__dirname, 'assets')))

  app.listen(port, function () {
    console.log('musicApp server listening on port ', port)
  })

}

process.on('unhandledRejection', (err) => {
  debug.error(err)
 })

startUp()
