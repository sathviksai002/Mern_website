const express = require("express");

const app = express();

app.get("/",function(req,res){
    res.send("Hello World");
})

app.get("/myName",function(req,res){
    res.send("My name is $(name)");
})

app.listen(3000,function(){
    console.log("Server running on http://localhost:3000");
})