<<<<<<< HEAD
// First Example
// const winston = require("winston");
=======
const { format, transports, createLogger } = require("winston");
require("winston-daily-rotate-file");
require("winston-mongodb");
require("dotenv").config();
>>>>>>> 72d1166e81a19a07bb6e4f5968f50c4158039e00

// const logger = winston.createLogger({
//   level: "debug",
//   format: winston.format.json(),
<<<<<<< HEAD
//   transports: [new winston.transports.Console()],
// });

// Second Example
const { format, createLogger, transports } = require("winston");
require("winston-daily-rotate-file");
require("winston-mongodb");

require("dotenv").config();

// Third Example
// const { combine, timestamp, label, printf } = format;
const { combine, timestamp, label, printf, prettyPrint } = format;

const CATEGORY = "winston custom format";

//Using the printf format.
// const customFormat = printf(({ level, message, label, timestamp }) => {
//   return `${timestamp} [${label}] ${level}: ${message}`;
// });

//DailyRotateFile func()
=======
//   transports: [new winston.transports.Console()]
// })

const { combine, timestamp, label, printf, prettyPrint } = format;

const CATEGORY = "winston custom format";
// const customFormat = printf(
//   ({ level, message, label, timestamp }) => {
//     return `${timestamp} [${label}], ${level}: ${message}`;
//   }
// );

>>>>>>> 72d1166e81a19a07bb6e4f5968f50c4158039e00
const fileRotateTransport = new transports.DailyRotateFile({
  filename: "logs/rotate-%DATE%.log",
  datePattern: "DD-MM-YYYY",
  maxFiles: "14d",
});

<<<<<<< HEAD
// Third Example
// const logger = createLogger({
//   level: "debug",
//   format: combine(
//     label({ label: CATEGORY }),
//     timestamp(),
//     customFormat
//   ),
//   transports: [new transports.Console()],
// });

=======
>>>>>>> 72d1166e81a19a07bb6e4f5968f50c4158039e00
const logger = createLogger({
  level: "debug",
  format: combine(
    label({ label: CATEGORY }),
    timestamp({
      format: "DD-MM-YYYY HH:mm:ss",
    }),
<<<<<<< HEAD
    // format.json()
    prettyPrint()
=======
    format.json()
    //prettyPrint()
>>>>>>> 72d1166e81a19a07bb6e4f5968f50c4158039e00
  ),
  transports: [
    fileRotateTransport,
    new transports.File({
      filename: "logs/example.log",
    }),
    new transports.File({
      level: "error",
      filename: "logs/error.log",
    }),
    new transports.Console(),
    new transports.MongoDB({
      level: "error",
<<<<<<< HEAD
      //mongo database connection link
=======
>>>>>>> 72d1166e81a19a07bb6e4f5968f50c4158039e00
      db: process.env.MONGODB_URI,
      options: {
        useUnifiedTopology: true,
      },
<<<<<<< HEAD
      // A collection to save json formatted logs
      collection: "server_logs",
      format: format.combine(
        format.timestamp(),
        // Convert logs to a json format
        format.json()
      ),
=======
      collection: "server_logs",
      format: format.combine(format.timestamp(), format.json()),
>>>>>>> 72d1166e81a19a07bb6e4f5968f50c4158039e00
    }),
  ],
});

module.exports = logger;
