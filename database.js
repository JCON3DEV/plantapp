
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
      return res.rows[0]
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
      return res.rows[0]
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
      return res.rows[0]
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
      return res.rows[0]
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
      return res.rows[0]
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
      return res.rows[0]
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



  //SOLD OUT.......................................................................................................................................//
/**
 * Get sold out products from the database.
 * @param {{}} products An object containing products queries
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
      return res.rows[0]
    })
    .catch (err => {
      console.log('Error:', err)
    });
};

exports.soldOut = soldOut;

  //BEST SELLING PRODUCT............................................................................................................................//
/**
 * Get sold out products from the database.
 * @param {{}} products An object containing some products queries
 * @return {Promise<{}>} A promise to the products.
 */

const bestSellingProduct = function() {
  (`
    SELECT title AS product description AS description, type AS type, sum(order_items.quantity) AS total
    FROM products
     JOIN order_items ON product_id = products.id
    GROUP BY product
    ORDER BY total desc;

  `)
  return pool.query(querryString)
    .then(res => {
      return res.rows[0]
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
      return res.rows
    })
    .catch (err => {
      console.log('Error', err)
    });
};
exports.getFavouriteItems = getFavouriteItems;


