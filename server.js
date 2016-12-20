const http = require('http');
const app = require('./app');
const server = http.createServer(app);

require('./middlewares/socket')(server);

server.listen(process.env.PORT);
