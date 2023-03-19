const express = require('express');
const winston = require('winston');
const bodyParser = require('body-parser');
const app = express();
const cors=require("cors")
// Initialize Winston logger
const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs.json' })
  ]
});

// Middleware to log incoming requests
// app.use((req, res, next) => {
//     console.log(req.body);
//   logger.info(`${req.method} ${req.body}`);
//   next();
// });

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors
    ({
        origin:"*",
    }));
app.post('/', (req, res) => {
    console.log('Got body:', req.body);
    logger.info(req.body);
    res.send("hello");
});
// Start server
app.listen(5000, () => {
});





