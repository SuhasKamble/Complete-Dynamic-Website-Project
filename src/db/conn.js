const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/website",{useCreateIndex:true,useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("Database is connected...")
})
.catch((e)=>{
    console.log("Datsbase is not connnected...")
})
