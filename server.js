const express = require('express');
const http = require('http');
const fs = require('fs');
const bodyParser = require('body-parser');
const HTTPS_PORT = 3000;
const httpsOptions = {
  key: fs.readFileSync('./certificates/localhost.key'),
  cert: fs.readFileSync('./certificates/localhost.crt'),
};
const multer = require('multer');
const formData = multer();
const app = express();
app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(formData.array());
// https.createServer(httpsOptions, app).
http.createServer(app).listen(HTTPS_PORT);
console.log(`http://localhost:${HTTPS_PORT}/`);

app.get('/', (req, res) => {
  fs.readFile(`index.html`, (error, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

app.post('/login', (req, res) => {
  const { id, password } = req.body;
  console.log(id, password);
  if (id === 'test' && password === 'test') {
    res.status(200).end();
    return;
  }
  res.status(404).end();
});
