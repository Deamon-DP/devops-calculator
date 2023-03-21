const express = require('express');
const winston = require('winston');
const bodyParser = require('body-parser');
const app = express();
const cors=require("cors")
// Initialize Winston logger
class log{
  constructor(time,expression,result)
  {
      this.time=time
      this.expression=expression
      this.result=result
  }
}
const logger = winston.createLogger({
  
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs.json' })
  ]
});


app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors
    ({
        origin:"*",
    }));
app.post('/', (req, res) => {
    console.log('Got body:', req.body);
    
    console.log(req.body.result);
    if(req.body.result ==='ERROR')
    {
      logger.level='error';
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





