
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser")
const path = require('path')

const URLATLAS = "mongodb+srv://sarvaiya:pratik@first-project.52mrdfn.mongodb.net/HelloDB"
const app = express()
const PORT = 4001
app.use(cors())
app.use(bodyParser.json())

// static file Client\dist\index.html
app.use(express.static(path.join(__dirname,"./Client/dist")))
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,"./Client/dist/index.html"))
})
// mongo connect
const StudModel = require("./models/Student")
mongoose.connect(URLATLAS);

app.post("/register",async(req,res)=>{
   await StudModel.create(req.body)
    .then(emp=>res.json(emp))
    .catch(err=>res.json(err))
})

app.listen(PORT,()=>{
console.log("You are running on PORT",PORT)
})

    




