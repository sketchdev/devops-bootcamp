const { createLogger, format, transports } = require('winston');
const { combine, timestamp, json } = format;

module.exports = createLogger({
  level: process.env.LOG_LEVEL,
  format: combine(
      timestamp(),
      json()),
  exitOnError: false,
  transports: [
      new transports.Console({
        handleExceptions: true
      })
  ]
});
