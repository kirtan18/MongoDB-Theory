// WWW.google.com  - Welcome To my home page
// /about - Welcome to my about  page
// /Contact - Welcome to my contact page
// /temp - Welcome to my temp page

const express = require("express");
const app = express();
const port = 3000;

app.get("/" , (req,res) =>{
    res.status(200).write("<h1>Welcome to my home page</h1>");
    res.write("<h1>Welcome to my again home page</h1>");
    res.send();
});

app.get("/about" , (req,res) =>{
    res.send([
        {
        id : 1,
        name : "kirtan",
        },
        {
            id : 2,
            name : "kirtan",
        },
        {
            id : 3,
            name : "kirtan",
        },
  ]);
});

// app.get("/about" , (req,res) =>{
//     res.json([
//         {
//         id : 1,
//         name : "kirtan",
//         },
//         {
//             id : 2,
//             name : "kirtan",
//         },
//         {
//             id : 3,
//             name : "kirtan",
//         },
//   ]);
// });

app.get("/contact" , (req,res) =>{
    res.end("Welcome to my Contact page");
});

app.get("/temp" , (req,res) =>{
    res.end("Welcome to my temp page");
});

app.listen(port , ()=>{
    console.log(`listining to the port ${port}`);
})


