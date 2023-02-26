const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const express = require("express"); // creating application
const app = express(); // calling

mongoose.set('strictQuery', true);

app.use(express.static("Frontend"));  //telling our app to use static files 


app.get("/",function(req,res){
    res.sendFile(__dirname + "/Frontend/index.html")

})  


mongoose.connect(process.env.MONGO_CONNECTION_STRING,function(err){
    if(err){
        console.error(err);}
    else{
        console.log("DB Connection successful");
        app.listen(3000,function(){
            console.log("Server running on http://localhost:3000");
        })
    }

        //TODO: Start express app server here.
})
