//jshint esversion:6
const express = require("express");

const app = express();

app.get("/", function(req, res) {
  res.send("Hello!");
});

app.get("/contact", function(req, res) {
  res.send("Feel free to email me at: abc@yahoo.co.uk");
});

app.get("/about", function(req, res) {
  res.send("Hi, I'm Ben! Welcome to my about page. I'm a trainee Web Developer based here in London!");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
