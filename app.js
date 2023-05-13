const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
// set the path to the file
app.set("views", path.join(__dirname,"public"));
app.set("view engine","hbs");
app.use(express.json())
app.use(express.urlencoded({extended:false}))

mongoose.connect("mongodb+srv://cyclic-demo:cyclic-demo@cluster0.incnl5x.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("MongoDB Connected")
}).catch(()=>{
    console.log("Failed to connect")
})

const LogInSchema = new mongoose.Schema(
    {
        name:{
            type : String,
            required : true
        },
        password:{
            type : String,
            required : true
        }   
    }
)

// Follow the login schema
const collection = new mongoose.model("Collection1",LogInSchema);
module.exports = collection;

app.get('/',(req,res)=>{
    res.render("login");
})

app.get('/signup',(req,res)=>{
    res.render("signup")
})

app.post("/signup", async (req,res)=>{
    // create an object
    const data = {
        name : req.body.name,
        password : req.body.password
    }
    await collection.insertMany([data])
    res.render("home")

})

app.listen(3000, ()=>{
    console.log("port connected")
})


// mongoose.connect("mongodb://127.0.0.1:27017/latestdb",{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// },).then(()=> console.log("Connected Successfully"))
// .catch((err)=>{
//     console.error(err);
// });

// app.use(express.json());

// app.use(express.urlencoded());

// app.post('/formPost',(req,res)=>{
//     console.log(req.body);
// })


