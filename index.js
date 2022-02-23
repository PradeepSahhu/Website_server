
// --------------- server settings-----------------

// importing modules
const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const mongoose = require("mongoose");
const ejs = require("ejs");

const Port = 3000;
const app = express();

// Application use:
app.set("view engine", "ejs");
app.use(express.static("public"));

// Application GET Request
// --Root Route
app.get("/", function(req,res){
  // res.sendFile(__dirname+ "/index.html");
    res.render('index',{
      pageTitle: 'Home'
    });
  console.log("Successfully connected to the home route");
});
// --Education Route
app.get("/Education", function(req,res){
  res.render("Education",{
    pageTitle: 'Education'
  });
console.log("Successfully connected to the Education route");
});
//--Contact Route
app.get("/contact", function(req,res){
  res.render("contact",{
    pageTitle: 'contact'
  });
console.log("Successfully connected to the Education route");
});
//--Project Route
app.get("/project", function(req, res){
  res.render("project",{
  pageTitle: "Project "
  });
  console.log("Successfully loaded the project file")
});
//Input Route
app.get("/input", function(req, res){
  res.render('input',{
    pageTitle: "Admin"
  });
})

// Applicatin listen 
app.listen(Port, function(req,res){
  console.log("Successful server connection at localport:3000")
});