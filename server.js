const express = require('express');
var fileUpload = require('express-fileupload');
require('dotenv').config();
const app = express();
const bodyParser = require('body-parser');//https://topdev.vn/blog/bodyparser-trong-express-js/
const PORT = process.env.PORT || 4000;
const cors = require('cors');
// connect mongodb
require('./db');
const path = require('path');
// khai router
const categoryController = require('./controllers/category');
const projectController = require('./controllers/projects');

app.use(cors()); //https://topdev.vn/blog/cors-la-gi/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileUpload());

app.use(express.static('upload'))

app.use('/api/category', categoryController);
app.use('/api/projects', projectController);

app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, function () {
  console.log('Server is running on Port:', PORT);
});