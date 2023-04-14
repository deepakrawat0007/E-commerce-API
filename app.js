const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
const Routes = require("./Routes/routes")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use("/" ,Routes);
app.get('/',(req,res)=>{
    res.status(200).json({
        "Message":"Server is OK"
    })
})

module.exports = app