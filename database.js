
const {Pool} = require('pg');

const pool = new Pool({
  user: "vagrant",
  password: "123",
  host: "localhost",
  database: "midterm",
});
/// BUYERS QUERRIES...........................................................................................................................//

/**
 * Get a single buyer from the database given their email.
 * @param {String} email The email of the buyer.
 * @return {Promise<{}>} A promise to the buyer.
 */
const getBuyerWithEmail = function(email) {
  const querryString =
  (`
    SELECT *
    FROM buyers
    WHERE email = $1;
  `)
  return pool.query(querryString, [email])
    .then(res => {
      return res.rows[0];
    })
    .catch (err => {
      console.log('Error:', err)
    });
};
exports.getBuyerWithEmail = getBuyerWithEmail;

/**
 * Get a single buyer from the database given their name.
 * @param {String} name The name of the buyer.
 * @return {Promise<{}>} A promise to the buyer.
 */

const getBuyerWithName = function(Name) {
  const querryString =
  (`
    SELECT *
    FROM buyers
    WHERE name = $1;
  `)
  return pool.query(querryString, [name])
    .then(res => {
      return res.rows[0];
    })
    .catch (err => {
      console.log('Error:', err)
    });
};
exports.getBuyerWithName = getBuyerWithName;

/**
 * Get a single buyer from the database given their id.
 * @param {String} id The id of the buyer.
 * @return {Promise<{}>} A promise to the buyer.
 */


const getBuyerWithId = function(id) {
  const querryString =
  (`
    SELECT *
    FROM buyers
    WHERE id = $1;
  `)
  return pool.query(querryString, [id])
    .then(res => {
      return res.rows[0];
    })
    .catch (err => {
      console.log('Error:', err)
    });
};
exports.getBuyerrWithId = getBuyerWithId;


// SELLERS QUERIES ...........................................................................................................................//

/**
 * Get a single seller from the database given their email.
 * @param {String} email The email of the seller.
 * @return {Promise<{}>} A promise to the seller.
 */

const getSellerWithEmail = function(email) {
  const querryString =
  (`
    SELECT *
    FROM sellers
    WHERE email = $1;
  `)
  return pool.query(querryString, [email])
    .then(res => {
      return res.rows[0];
    })
    .catch (err => {
      console.log('Error:', err)
    });
};
exports.getSellerWithEmail = getSellerWithEmail;

/**
 * Get a single seller from the database given their name.
 * @param {String} name The name of the seller.
 * @return {Promise<{}>} A promise to the seller.
 */

const getSellerrWithName = function(Name) {
  const querryString =
  (`
    SELECT *
    FROM sellers
    WHERE name = $1;
  `)
  return pool.query(querryString, [name])
    .then(res => {
      return res.rows[0];
    })
    .catch (err => {
      console.log('Error:', err)
    });
};
exports.getSellerWithName = getSellerrWithName;

/**
 * Get a single seller from the database given their id.
 * @param {String} id The id of the seller.
 * @return {Promise<{}>} A promise to the seller.
 */


const getSellerWithId = function(id) {
  const querryString =
  (`
    SELECT *
    FROM sellers
    WHERE id = $1;
  `)
  return pool.query(querryString, [id])
    .then(res => {
      return res.rows[0];
    })
    .catch (err => {
      console.log('Error:', err)
    });
};
exports.getSellerrWithId = getSellerWithId;


//QUERIES TO ADD A PRODUCT.............................................................................................................................//

/**
 * Add a new product to the database.
 * @param {{}} products
 * @return {Promise<{}>} A promise to the products.
 */

const addProduct =  function(products) {
  const querryString =
  (`
  INSERT INTO products (seller_id, price, availability, title, description, thumbnail_image_url, product_image_url, category, type, material, size)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
  RETURNING *;
  `)
  const productRows = [products.seller_id, products.price, products.availability, products.title, products.description, products.thumbnail_image_url, products.product_image_url, products.category, products.type, products.material, products.size]

  return pool.query(querryString, productRows)
    .then (res => {
      return res.rows[0];
    })
    .catch(err => {
      console.log('Error:', err)
    });
};
exports.addProduct = addProduct;

//PRODUCT QUERIES...............................................................................................................................//

// Find a product by title
/**
 * Get a single product from the database given their title.
 * @param {String} title The title of the product.
 * @return {Promise<{}>} A promise to the product.
 */


const getProductByTitle = function(title) {
  const querryString =
  (`
    SELECT *
    FROM products
    WHERE title = $1;
  `)
  return pool.query(querryString, [title])
    .then(res => {
      return res.rows[0];
    })
    .catch (err => {
      console.log('Error:', err)
    });
};

exports.getProductByTitle = getProductByTitle;


// Filter a product by price

/**
 * Filter products from the database given their price.
 * @param {String} price The price of the product.
 * @return {Promise<{}>} A promise to the product.
 */


const getProductByExactPrice = function(price) {

  let querryString =
  (`
    SELECT *
    FROM products
    WHERE price = $1
  `)

  return pool.query(querryString, [price])
    .then(res => {
      return res.rows[0];
    })
    .catch (err => {
      console.log('Error:', err)
    });
};

exports.getProductByExactPrice = getProductByExactPrice;

/**
 * Filter products from the database given their price range for greater than.
 * @param {String} price The price of the product.
 * @return {Promise<{}>} A promise to the product.
 */


const getProductByGreaterThanPrice = function(price) {

  let querryString =
  (`
    SELECT *
    FROM products
    WHERE price >= $1
  `)

  return pool.query(querryString, [price])
    .then(res => {
      return res.rows[0];
    })
    .catch (err => {
      console.log('Error:', err)
    });
};

exports.getProductByGreaterThanPrice = getProductByGreaterThanPrice;


/**
 * Filter products from the database given their price for less than.
 * @param {String} price The price of the product.
 * @return {Promise<{}>} A promise to the product.
 */


const getProductByLessThanPrice = function(price) {

  let querryString =
  (`
    SELECT *
    FROM products
    WHERE price <= $1
  `)

  return pool.query(querryString, [price])
    .then(res => {
      return res.rows[0];
    })
    .catch (err => {
      console.log('Error:', err)
    });
};

exports.getProductByLessThanPrice = getProductByLessThanPrice;



const addToFavouriteItems =  function(products, buyers) {
  const querryString =
  (`
  INSERT INTO favourite_items (product_id, buyer_id)
  VALUES ($1, $2)
  RETURNING *;
  `)

  return pool.query(querryString, [products.id, buyers.id])
    .then (res => {
      return res.rows[0];
    })
    .catch(err => {
      console.log('Error:', err)
    });
};
exports.addToFavouriteItems = addToFavouriteItems;


  //SOLD OUT.......................................................................................................................................//
/**
 * update products' availability in the database.
 * @param {boolean} availability An object containing products queries
 * @return {Promise<{}>} A promise to the products.
 */


// SELLER UPDATES INFO TO SHOW PRODUCT IS NO LONGER AVAILABLE

const updateProductAvailability =  function(availability) {
  const querryString =
  (`
  INSERT INTO products (availability)
  VALUES ($1)
  RETURNING *;
  `)

  return pool.query(querryString, [availability])
    .then (res => {
      return res.rows[0];
    })
    .catch(err => {
      console.log('Error:', err)
    });
};
exports.updateProductAvailability = updateProductAvailability;

/**
 * Get sold out products from the database.
 * @return {Promise<{}>} A promise to the products.
 */

const soldOut = function() {
  const querryString =
  (`
    SELECT title, description, thumbnail_image_url
    FROM products
    WHERE availability = false;
  `)
  return pool.query(querryString)
    .then(res => {
      return res.rows[0];
    })
    .catch (err => {
      console.log('Error:', err)
    });
};

exports.soldOut = soldOut;

  //BEST SELLING PRODUCT............................................................................................................................//
/**
 * Get sold out products from the database.
  * @return {Promise<{}>} A promise to the products.
 */

const bestSellingProduct = function() {
  const querryString =
  (`
    SELECT title AS product description AS description, type AS type, sum(order_items.quantity) AS total
    FROM products
     JOIN order_items ON product_id = products.id
    GROUP BY product
    ORDER BY total desc;

  `)
  return pool.query(querryString)
    .then(res => {
      return res.rows[0];
    })
    .catch (err => {
      console.log('Error:', err)
    });
};

exports.bestSellingProduct = bestSellingProduct;


// FAVOURITE ITEMS QUERIES.............................................................................................................................//

/**
 * Get all favourite items for a single buyer.
 * @param {string} buyer_id The id of the buyer.
 * @return {Promise<[{}]>} A promise to the favourite_items.
 */

const getFavouriteItems = function(buyer_id, limit) {

  const querryString =
  (`
  SELECT favourite_items.*, products.title, products.description, products.thumbnail_image_url, products.product_image_url, products.category, products.type, products.material, products.size
  FROM favourite_items
    JOIN products ON product_id = products.id
  WHERE buyer_id = $1
  ORDER BY products.title
  LIMIT $2;
  `)

  return pool.query(querryString, [buyer_id, limit])
    .then(res => {
      return res.rows[0]
    })
    .catch (err => {
      console.log('Error', err)
    });
};
exports.getFavouriteItems = getFavouriteItems;


// DELETE PRODUCTS


const deleteProduct = function(id) {
  const querryString =
  (`
    DELETE
    FROM products
    WHERE id = $1;
  `)
  return pool.query(querryString, [id])
    .then(res => {
      return res.rows[0];
    })
    .catch (err => {
      console.log('Error:', err)
    });
};
exports.deleteProduct = deleteProduct;






