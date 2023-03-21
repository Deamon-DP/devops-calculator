const express = require('express');
const winston =require('winston')
const bodyParser = require('body-parser');
const app = express();
const cors=require("cors")






// Initialize Winston logger

// const logger = winston.createLogger({
  
//   transports: [
//     new winston.transports.Console(),
//     new winston.transports.File({ filename: 'logs.json' })
//   ]

  
// });

// const { format, createLogger, transports } = require("winston");
// const { combine, timestamp, label, printf, prettyPrint } = format;
// const CATEGORY = "winston custom format";

// const logger = createLogger({
//   level: "debug",
  
//   format: combine(
//     label({ label: CATEGORY }),
//     format.json(),
//     timestamp({
//       format: "MMM-DD-YYYY HH:mm:ss",
//     }),
//     prettyPrint()
//   ),
//   transports: [new winston.transports.File({ filename: 'logs.json',
//   format: winston.format.json()})],
// });
const pino = require('pino');
const fs = require('fs');

const data = { "foo": 'bar',"ia": "m" };

// create a writable stream to a file
const dest = pino.destination('logs.json');

// create a logger
const logger = pino({   timestamp: false
}, dest);

// write the JSON object to the file

// close the stream when finished


app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors
    ({
        origin:"*",
    }));
app.post('/', (req, res) => {
    console.log('Got body:', req.body);
    
    // console.log(req.body.result);
    if(req.body.result ==='ERROR')
    {
      logger.error(req.body);
    }
    else{
      logger.info(req.body);
    }
    res.send("hello");
});
// Start server
app.listen(5000, () => {
});


