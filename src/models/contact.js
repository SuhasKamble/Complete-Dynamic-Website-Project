const mongoose =  require("mongoose");

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },

    phone:{
        type:Number,
        required:true,
        trim:true,
    },
    message:{
        type:String,
        required:true,
        trim:true,
    },
    
})

const Contact = new mongoose.model("Contact",contactSchema);

module.exports = Contact;