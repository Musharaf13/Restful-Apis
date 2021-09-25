const express = require('express')
const app = express()
const port = 3000


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
    require("./controllers/book-controller")(app);
    mongoose.connect('mongodb+srv://musharaf:123QWEasdASD@studentdeals.mv1wn.mongodb.net/test',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });


});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
