const express = require("express");
const app = express();

var faker = require('faker');


app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));


//routes
app.get("/", function(req, res){
    var catchPhrase = faker.company.catchPhrase();
    res.render("index.ejs", {"catchPhrase":catchPhrase});
});

app.get("/advantages", function(req,res){
    var catchPhrase = faker.company.catchPhrase();
    res.render("advantages.ejs", {"catchPhrase":catchPhrase});
})

app.get("/history", function(req,res){
    var catchPhrase = faker.company.catchPhrase();
    res.render("history.ejs", {"catchPhrase":catchPhrase});
})

app.get("/sources", function(req,res){
     var catchPhrase = faker.company.catchPhrase();
    res.render("sources.ejs", {"catchPhrase":catchPhrase});
})
app.get("/whatis", function(req,res){
    var catchPhrase = faker.company.catchPhrase();
    res.render("whatis.ejs", {"catchPhrase":catchPhrase});
})
//start server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});