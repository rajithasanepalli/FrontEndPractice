const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 8000;
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.get('/', function (req, res) {
    res.send("Hello from server");
})
app.listen(PORT, function () {
    console.log("server running at port no" + PORT)
})
app.get('/register', function (req, res) {
    //console.log(req.body);
    res.status(200).send({
        "message": "Data recieved"
    })
})