const express = require("express");
require("./db/conn")
const Contact = require('./models/contact')
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname,"../public");
app.use(express.static(static_path));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.set("view engine","hbs");

app.get("/",(req,res)=>{
    res.render("index");
})

app.post("/",async (req,res)=>{
    try {
        const newContact = new Contact({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            message:req.body.message,
        })
        const saveContact =await newContact.save()
        console.log(saveContact);
        res.redirect("/");
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})


app.listen(port,()=>{
    console.log(`Listening to the port ${port}`)
})