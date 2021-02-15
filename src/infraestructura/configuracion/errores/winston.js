const appRoot = require('app-root-path');
const winston = require('winston');

const options = {
    file: {
        level: 'info',
        filename: `${appRoot}/logs/app.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880,
        maxFiles: 5,
        colorize: false,
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true,
    },
};

const logger = winston.createLogger({
    transports: [
        new winston.transports.File(options.file),
        new winston.transports.Console(options.console)
    ],
    format: winston.format.combine(
        winston.format.errors({ stack: true }),
        winston.format.colorize(),
        winston.format.printf(({
            level, message, timestamp, stack
        }) => {
            if (stack) {
                return `${timestamp} ${level}: ${message} - ${stack}`;
            }
            return `${timestamp} ${level}: ${message}`;
        }),
    ),
    exitOnError: false,
});

logger.stream = {
    write: (message) => {
        logger.info(message);
    },
};
module.exports = logger;
