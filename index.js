const express = require("express");
const app = express();
const path = require("path");

let port = 8080;
app.listen(port, () =>{
    console.log(`app listen on the port ${port}`);
})
app.use(express.static(path.join(__dirname,"/public/js")));
app.use(express.static(path.join(__dirname,"/public/css")));
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"));

// Home-Route //
app.get("/home", (req, res) => {
    res.render("home");
})


app.get("/ig/:username",(req, res) => {
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data){
         res.render("insta.ejs", {data});
    }
    else{
        res.render("error.ejs");
    }
})



