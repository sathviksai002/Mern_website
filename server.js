const express = require("express"); // creating application

const app = express(); // calling
var name = "Sathvik";

app.use(express.static("Frontend"));  //telling our app to use static files 


app.get("/",function(req,res){
    res.sendFile(__dirname + "/Frontend/index.html")

})  


app.listen(3000,function(){
    console.log("Server running on http://localhost:3000");
})