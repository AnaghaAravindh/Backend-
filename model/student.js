const mongoose =require("mongoose")

mongoose.connect("mongodb+srv://anagha:anagha@cluster0.5ceux1a.mongodb.net/college?retryWrites=true&w=majority")
.then(()=>{console.log("DB connected")})
.catch(err=>console.log(err));


let sc=mongoose.Schema;
const studschema=new sc({
    Admno:String,
    Sname:String,
    Age:Number,
    Status:String
});

var studmodel=mongoose.model("Student",studschema)
module.exports=studmodel;