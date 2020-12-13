const mongoose = require('mongoose'); // khai báo mongoose

mongoose.connect('mongodb://localhost:27017/portfoliodb', { useNewUrlParser: true, useUnifiedTopology: true }
    , err => {
        if (!err) {
            console.log("Connect mongodb successed!")
        } else {
            console.log("Fail connect mongodb:", err)
        }
    })