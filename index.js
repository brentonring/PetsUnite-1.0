// Modules and Globals
require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");
const app = express();
const PORT = process.env.PORT; //PORT 3500

// Middleware
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use('/adoption', require('./controllers/adoption'));
app.use('/events', require('./controllers/events'));
// app.use('/services', require('./controllers/services'));
// Need help connecting app.use for events and services controller here ???

// Homepage route
app.get("/", (req, res) => {
  // res.send("<h1>Hello World!</h1>");
  res.render('home');
});

// Wildcard Error Page
app.get("*", (req, res) => {
  // res.send(`<h1>404 Page, Oops, this page doesn't exist</h1>`);
  res.render('error404');
});

// Listens for connections. Confirgured for PORT 3500
app.listen(PORT, () => {
  console.log("Up and running!");
});
