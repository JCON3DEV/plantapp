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
const db2        = require("./database.js");
var cookieSession = require('cookie-session');
var cookieParser = require('cookie-parser');

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
  keys: ['type'],
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
app.use("/api/users", usersRoutes(db));
app.use("/api/widgets", widgetsRoutes(db));
// Note: mount other resources here, using the same pattern above


// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  console.log("req.session", req.session);
  const templateVars = {type :req.session.type};
  res.render("index", templateVars);
});

app.get("/category", (req, res) => {
  const templateVars = { type: req.session.type };
  res.render("category",templateVars);
});

// currently not working as query to find product does not yet exist
// will error out
// This could use query strings to search for product
// could research how to take the info from the url - sounds complicated
// app.get("/product", (req, res) => {
//   const templateVars = {
//     type: req.session.type,
//     product, // does not exist need a querty from the user
//   };
//   res.render("product",templateVars);
// });

app.get("/product/:product_id", (req, res) => {
  const product_id = req.params.product_id;
  db.query(`SELECT * FROM products WHERE id = ${product_id}`)
  .then((data) => {
    const product = data.rows[0];
    const templateVars = { product: product, type: req.session.type || "buyer" };
    res.render("product", templateVars);
  })
  .catch((err) => {
    console.log(err);
  });
});

app.get("/buyer_login", (req, res) => {
  req.session.type = "buyer";
  res.redirect("/");
});

app.get("/favourite_items", (req, res) => {
  const templateVars = { type: req.session.type };
  res.render("favourite_items", templateVars)
});

app.get("/order_items", (req, res) => {
  const templateVars = { type: req.session.type };
  res.render("order_items", templateVars);
});

app.get("/order_history", (req, res) => {
  const templateVars = { type: req.session.type };
  res.render("order_history",templateVars);
});

app.get("/seller_login", (req, res) => {
  req.session.type = "seller";
  res.redirect("/")
});

app.get("/my_products", (req, res) => {
  const templateVars = { type: req.session.type };
  res.render("my_products", templateVars);
});

app.get("/create_product", (req, res) => {
  const templateVars = { type: req.session.type };
  res.render("create_product", templateVars);
});

//
// below takes the POST form from create_product.js, converts it into an object here and uses an imported addproduct function to update the db
app.post("/my_products", (req, res) => {
  // const productRows = [products.seller_id, products.price, products.availability, products.title, products.description, products.thumbnail_image_url, products.product_image_url, products.category, products.type, products.material, products.size]

  //this could be improved ###
  let productItem = {
      seller_id: 3, // hard coding this temp
      price: req.body.price,
      availability: true, // hard coding this
      title: req.body.product_name,
      description: req.body.description,
      thumbnail_image_url: req.body.thumbnail_image_url,
      product_image_url: req.body.product_image_url,
      category: req.body.category,
      type: req.body.type,
      material: null,
      size:null
    };
  // const templateVars = { productItem: req.session.type };
  db2.addProduct(productItem);
  console.log("req.body", req.body);
  res.redirect("my_products");
});

app.post("/my_products/:id/soldout", (req, res) => {
  const id = req.params.id;
  db.query(`UPDATE products SET availability = false WHERE id = ${id}`)
  .then(() => {
    res.redirect(`/product/${req.params.id}`);
  })
});

// ## below uses the database.js functions ###
app.post("/my_products/:id/remove", (req, res) => {
  const id = req.params.id;
  db2.deleteProduct(id)
    .then(() => {
      res.redirect(`/`);
    })
});

// deletes all cookies
app.post("/logout", (req, res) => {
  req.session.type = null;
  res.redirect("/");
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
