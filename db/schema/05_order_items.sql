DROP TABLE IF EXISTS order_items CASCADE;

CREATE TABLE order_items (
  id SERIAL PRIMARY KEY NOT NULL,
  product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
  quantity SMALLINT NOT NULL DEFAULT 0,
  cost INTEGER NOT NULL DEFAULT 0,
  order_id INTEGER REFERENCES order_history(id) ON DELETE CASCADE
);

