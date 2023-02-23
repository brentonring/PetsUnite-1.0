// Modules and Globals
// require("dotenv").config();
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const PORT = process.env.PORT; //PORT 3500

// Middleware
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//routes to adoption, events and services controllers
app.use("/adoption", require("./controllers/adoption_ctr"));
app.use("/events", require("./controllers/events_ctr"));
app.use("/services", require("./controllers/services_ctr"));

// Homepage route
app.get("/", (req, res) => {
  res.render("home");
});

// Wildcard Error Page
app.get("*", (req, res) => {
  res.render("error404");
});

// Listens for connections. Confirgured for PORT 3500
app.listen(PORT, () => {
  console.log("Up and running!");
});
