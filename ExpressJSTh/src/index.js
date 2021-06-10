const path = require("path");
const express = require("express");
const app = express(); // express application

// join the other path for use in this 
const staticPath = path.join(__dirname,"../views");
// const template = path.join(__dirname,"../template");

//! to set the view engine use for dynamically
app.set("view engine","hbs");

// for change name of views
// app.set("views",template);
app.use(express.static(staticPath));

app.get("/about" , (req,res) =>{
      res.render("about");      
});

//template engine root
app.get("/" , (req,res)=>{
    res.render("index.hbs");
});

// built in middel ware


app.get("/", (req, res) => {  
     res.send("Hello World from the Expressjs");   
});

app.get("/about" , (req,res) =>{
    res.send("Hello from About Page");
})

app.listen(8000 , () =>{
 console.log("Lsitining");
});

// ! API
// ! get - read
// ! post - create
// ! put - update
// ! delete - delete 