// server.js

const app = require('express')();
const path = require('path');
const PORT = process.env.PORT = 4000;
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

app.get('/template', function(req, res){
  res.render('welcome.ejs', {yourdata: 'Hello from EJS Template'});
});

app.listen(PORT, () => {
  console.log('The server is running on port',PORT);
});