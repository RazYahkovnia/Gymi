const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        // - Write all logs with level `error` and below to `error.log`
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        // - Write all logs with level `info` and below to `out.log`
        new winston.transports.File({ filename: 'logs/out.log' }),
    ],
});


if (process.env.NODE_ENV !== 'prod') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}

module.exports = logger;