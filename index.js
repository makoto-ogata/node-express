const express=require("express");
const app=express();

app.get("/", function(req, res){
    res.send({"name": "平岡","age": 45 });
});

app.listen(5005,function(){
    console.log("Listening on localhost port 5005");
});



