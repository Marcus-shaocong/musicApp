 /**
 * Configurations of logger.
 */
const winston = require('winston');
const winstonRotator = require('winston-daily-rotate-file');


const successLogger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log` 
  // - Write all logs error (and below) to `error.log`.
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

successLogger.add( new winston.transports.Console({
  'colorize': true
}))

// successLogger.add(winstonRotator, {
//   'name': 'access-file',
//   'level': 'debug',
//   'filename': '../logs/access.log',
//   'json': false,
//   'datePattern': 'YYYY-MM-DD',
//   'prepend': true
// });

module.exports = {
  'successlog': successLogger,
};