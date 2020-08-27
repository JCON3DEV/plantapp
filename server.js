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
// app.use("/api/users", usersRoutes(db));
// app.use("/api/widgets", widgetsRoutes(db));
// Note: mount other resources here, using the same pattern above


// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  console.log("req.session", req.session);
  db.query(`SELECT * FROM products LIMIT 5;`)
  .then((data) => {
    console.log("$$$$%%%$$", data.rows);

    const templateVars = {
      type :req.session.type,
      products: data.rows,
    };
    console.log("#### req.params", req.params);
    res.render("index", templateVars);
  });
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
//start of shopping progress -creates a new shopping cart
// restart db before demo
app.get("/buyer_login", (req, res) => {
  db.query(`
  INSERT INTO order_history(buyer_id)
  VALUES (1)
  RETURNING *;
  `)
  .then((data) => {
    const order_id = data.rows[0].id;
    req.session.type = "buyer";
    req.session.id = order_id;
    res.redirect("/");
  });
});

// does this need to be hard coded can we make this dyncic below
app.get("/favourite_items", (req, res) => {
  db2.getFavouriteItems(1)
  .then((favourites) => {
    console.log("$$$%$%$%$%.........", favourites);
    const templateVars = {
      type: req.session.type,
      favourites,
    };
    res.render("favourite_items", templateVars)
  })
});

app.get("/order_items", (req, res) => {
  console.log("%%%%...........req.sessions", req.session);
  // order id is taken from session cookie. (created at "login")
  const id = req.session.id;
  db.query(`
  SELECT * FROM order_items
  JOIN products ON product_id = products.id
  WHERE order_id = ${id}
  `)
  .then((data) =>{
    // data is the response form the db query - convention to call it data
    // console.log("*******data.rows", data.rows);
    const templateVars = {
      type: req.session.type,
      items: data.rows,
    };
    res.render("order_items", templateVars);
  });

});

app.get("/order_history/:id", (req, res) => {
  console.log(".........................req.params from ortder items;", req.params)
  console.log("the req.rows: . . .  ",req.rows);
  db2.getOrderHistory(req.params.id)
    .then((data) => {
      /* data Prints id: 2,
      buyer_id: 2,
        total_cost: 42,
          name: 'Gavin Cook',
            email: 'nolanbriggs@gmail.com',
              password:
      */
      const templateVars = {
      type: req.session.type,
      items: data,
      };
      console.log("DAAAAATTTTTTAAAAAA: .....  ", data);
      // res.json({data});
      // res.redirect(`/order_history`, templateVars);
      res.render("order_history",templateVars);
    })
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

// must be logged in to add to cart
// below is the post from add to basket btn
app.post("/order_items/:id",(req,res) =>{
  // req.params got passed along by loggin in
  console.log("*&*&*& req session info; ", req.session);
  console.log("%%%%%%** req.params data; ", req.params);
  const productId = req.params.id;
  const orderId = req.session.id;
  // console.log("req.params from the product page;",req.params);
  // query to find the price based on info already aquired
  db.query(`SELECT price, description, thumbnail_image_url FROM products WHERE id = ${productId};`)
  .then((data) =>{
    console.log("***__***data .rows added to cart item;***^^**", data.rows[0]);
    const price = data.rows[0].price;
    const img = data.rows[0].thumbnail_image_url;
    const description = data.rows[0].description;

    const templateVars = {img,description};
    console.log(templateVars);
    // ## the below return prevents nested promises -best practice ##
    return db.query(`
    INSERT INTO order_items (product_id, quantity, cost, order_id)
    VALUES ($1,$2,$3,$4);
    `, [productId, 1, price, orderId]);
    //listed as price (instead of cost) in the array due to variable name vs db table name
  })
  .then( () => {
    res.redirect("/order_items");
  })
})
//below is from the add to favourite btn
app.post("/product/:id", (req, res) => {
  db2.addToFavouriteItems(req.params, {id:1})
  .then(() => {
    res.redirect(`/favourite_items`);
  })
})
// recent changes ###############################
// Below is the path for one click purchase button to add to order history
app.post("/order_history/:id", (req,res) => {
  console.log("............>>>>>>>>>>>>>>.................. req.body", req.body);
  console.log("######req.params from the product page;", req.params);
  db2.getOrderHistory()
  .then((data) => {
    console.log("DAAAAATTTTTTAAAAAA: .....  ", data);
    res.redirect(`/order_history`, data);
  })
});
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
