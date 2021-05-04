const express    = require('express');
const app        = express();
const http       = require('http');
const hostname   = 'localhost';
const port       = 3000;
const morgan     = require('morgan');
const bodyParser = require('body-parser')
const dishRouter = require('./routes/dishRouter')
const promoRouter = require('./routes/promoRouter')
const leaderRouter = require('./routes/leaderRouter')

app.use(morgan('dev'));
app.use(bodyParser.json())
app.use('/dishes', dishRouter)
app.use('/promotions', promoRouter)
app.use('/leaders', leaderRouter)

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Context-Type', 'text/html')
  res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});