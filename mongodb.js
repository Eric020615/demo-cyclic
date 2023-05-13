const mongoose = require("mongoose");

const uri = "mongodb+srv://cyclic-demo:cyclic-demo@cluster0.incnl5x.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri).then(()=>{
    console.log("MongoDB Connected");
}).catch(()=>{
    console.log("failed to connect")
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

const collection = new mongoose.model("Collection1",LogInSchema);
module.exports = collection;

