const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
app.set("views", path.join(__dirname,"public"));
app.set("view engine","hbs");
mongoose.connect("mongodb://127.0.0.1:27017/latestdb",{
    useNewUrlParser:true,
    useUnifiedTopology:true
},).then(()=> console.log("Connected Successfully"))
.catch((err)=>{
    console.error(err);
});

app.use(express.json());

app.use(express.urlencoded());

app.get('/',(req,res)=>{
    res.render("login");
})

// app.post('/formPost',(req,res)=>{
//     console.log(req.body);
// })

app.listen(3000, ()=>{
    console.log("port connected")
})