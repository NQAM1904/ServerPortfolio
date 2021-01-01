const mongoose = require('mongoose'); // khai báo mongoose

mongoose.connect('mongodb://utjo8kyvgt9ectc4xfte:fJXyijQROI0AZogkK0kL@bljpr6sw29wdcqw-mongodb.services.clever-cloud.com:27017/bljpr6sw29wdcqw',
 { useNewUrlParser: true, useUnifiedTopology: true }
    , err => {
        if (!err) {
            console.log("Connect mongodb successed!")
        } else {
            console.log("Fail connect mongodb:", err)
        }
    })