const express = require("express")
const bodyParser = require("body-parser")
const https = require("https")
const User = require("./models/User.js");
const mongoose = require("mongoose")
const validator = require("validator")

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/index.html")
})

mongoose.connect("mongodb+srv://karand:king1740@cluster0.xf1dx.mongodb.net/IserviceDB?retryWrites=true&w=majority", {useNewUrlParser: true})

app.post('/', (req, res) =>{
    const firstname = req.body.first_name
    const lastname = req.body.last_name
    const email = req.body.email
    const user = new user({
        first_name: firstname,
        last_name:lastname,
        email: email
    })
    user
    .save()
    .catch((err) => console.log(err));

    if (res.statusCode === 200)
    {
        res.sendFile(__dirname + "/success.html")
    }
    else 
    {
        res.sendFile(dirname + "/404.html")
    }
})

app.listen(8000, (req,res)=>
{
    console.log("server is running on port 8000")
})