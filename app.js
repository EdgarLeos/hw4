const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));


//routes
app.get("/", function(req, res){
    res.render("index.html");
});

app.get("/advantages", function(req,res){
    res.render("advantages.html")
})

app.get("/history", function(req,res){
    res.render("history.html")
})

app.get("/sources", function(req,res){
    res.render("sources.html")
})
app.get("/whatis", function(req,res){
    res.render("whatis.html")
})
//start server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});