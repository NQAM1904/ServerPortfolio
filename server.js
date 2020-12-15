const express = require('express');
const app = express();
const bodyParser = require('body-parser');//https://topdev.vn/blog/bodyparser-trong-express-js/
const PORT = process.env.PORT || 4000;
const cors = require('cors');
const path = require(path);
// connect mongodb
require('./db');

// khai router
const categoryController = require('./controllers/category');
const projectController = require('./controllers/projects');

app.use(cors()); //https://topdev.vn/blog/cors-la-gi/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('upload'))

app.use('/category', categoryController);
app.use('/projects', projectController);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/admin/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'admin', 'build', 'index.html'))
  })
}






app.listen(PORT, function () {
  console.log('Server is running on Port:', PORT);
});