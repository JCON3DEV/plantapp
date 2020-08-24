// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const bodyParser = require("body-parser");
const sass       = require("node-sass-middleware");
const app        = express();
const morgan     = require('morgan');
var cookieSession = require('cookie-session')
var cookieParser = require('cookie-parser')

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(cookieParser())

app.set("view engine", "ejs");
app.use(cookieSession ({
  name: 'session',
  keys: ['key1', 'key2'],
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const widgetsRoutes = require("./routes/widgets");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// app.use("/api/users", usersRoutes(db));
// app.use("/api/widgets", widgetsRoutes(db));
// Note: mount other resources here, using the same pattern above


// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/index", (req, res) => {
  // console.log("##########################");
  console.log("WHAT IS THIS: ", req.cookies);
  res.render("index");
});

app.get("/category", (req, res) => {
  res.render("category");
});

app.get("/product", (req, res) => {
  res.render("product");
});

// buyer logs in and gets directed to favourites page
app.get("/favourite_items", (req, res) => {
  if (req.cookies.length === 0) {
    // this redirects guest users to the login page
    res.redirect("index");
  } else if (req.cookies.seller === "seller") {
    // this redirects sellers to the login page
    res.redirect("index");
  }
  res.cookie('buyer', 'buyer');
  console.log('Cookies: ', req.cookies.buyer);//Prints true / spongebob
  res.render("favourite_items");
});

// below access refused to seller cookie
app.get("/order_items", (req, res) => {
  //Below is redirect - do we wnat ot send an error page or a pop up?
  if (req.cookies.seller === "seller"){
    res.redirect("index");
  }
  res.render("order_items");
});

// below access refused to buyer cookie
app.get("/order_history", (req, res) => {
  //Below is redirect - do we want to send an error page or a pop up?
  if (req.cookies.seller === "seller") {
    res.redirect("index");
  }
  res.render("order_history");
});

// Seller logs in and is directed to thier listed products
app.get("/my_products", (req, res) => {
  if (!req.cookies) {
    // this redirects guest users to the login page
    res.redirect("index");
  } else if (req.cookies.buyer === "buyer") {
    // believe a pop up would be best rather than a redirect
    res.redirect("index");
  }
  res.cookie('seller', 'seller');
  res.render("my_products");
});

app.get("/create_product", (req, res) => {
  if (!req.cookies) {
    // this redirects guest users to the login page
    res.redirect("index");
  } else if (req.cookies.buyer === "buyer") {
    // bleive a pop up would be best rather than a redirect
    res.redirect("index");
  }
  res.render("create_product");
});

// deletes all cookies
app.post("/logout", (req, res) => {
  res.clearCookie('buyer');
  res.clearCookie('seller');
  res.render("index");
});

app.get("/", (req, res) => {
  res.render("index");
});

// Below redirects to home page if miss typed
app.get("/*", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

/*
List of ejs files for ref;
.
index.ejs
category.ejs
product.ejs
favourite_items.ejs
order_items.ejs
order_history.ejs
my_products.ejs
create_product.ejs
*/
