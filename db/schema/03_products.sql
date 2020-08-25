DROP TABLE IF EXISTS products CASCADE;

CREATE TABLE products (
  id SERIAL PRIMARY KEY NOT NULL,
  seller_id INTEGER REFERENCES sellers(id) ON DELETE CASCADE,
  price INTEGER NOT NULL DEFAULT 0,
  availability BOOLEAN NOT NULL DEFAULT TRUE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  thumbnail_image_url VARCHAR(255) NOT NULL,
  product_image_url VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL,
  type TEXT,
  material VARCHAR(255),
  size VARCHAR(255)
);
