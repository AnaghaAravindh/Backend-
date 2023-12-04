const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://anagha:anagha@cluster0.5ceux1a.mongodb.net/college?retryWrites=true&w=majority")
    .then(() => { console.log("DB connected") })
    .catch(err => console.log(err));


let sc = mongoose.Schema;
const certschema = new sc({
    Sid: { type: mongoose.Schema.Types.ObjectId, ref: 'students' },
    Qualification: String,
    certphoto: {
        data: Buffer,
        contentType: String
    }
    
});

var certmodel = mongoose.model("Certificate", certschema)
module.exports = certmodel;