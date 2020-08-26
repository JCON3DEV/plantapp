INSERT INTO sellers (name, email, password)
VALUES ('Herbert Graves', 'emilyowen@live.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO sellers (name, email, password)
VALUES ('John Stevens', 'charliebattle@yahoo.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO sellers (name, email, password)
VALUES ('Isabelle Robbins', 'miasutton@aol.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO sellers (name, email, password)
VALUES ('Jerome Wright', 'bellaanthony@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO sellers (name, email, password)
VALUES ('May Barrett', 'gabriellabarrera@aol.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO sellers (name, email, password)
VALUES ('Christine Buchanan', 'nathannguyen@ymail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');








INSERT INTO buyers (name, email, password)
VALUES ('Ola Brock', 'alainajames@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO buyers (name, email, password)
VALUES ('Gavin Cook', 'nolanbriggs@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO buyers (name, email, password)
VALUES ('Harriett Alvarez', 'kaelynross@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO buyers (name, email, password)
VALUES ('Effie Simpson', 'muhammadwebb@hotmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO buyers (name, email, password)
VALUES ('Mamie Webster', 'ianhale@ymail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO buyers (name, email, password)
VALUES ('Jennie Powers', 'lilabell@live.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO buyers (name, email, password)
VALUES ('Maggie Norris', 'miafletcher@inbox.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
INSERT INTO buyers (name, email, password)
VALUES ('Justin Reyes', 'austindotson@aol.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');



-- aloe vera plant - spikey
INSERT INTO products (seller_id, price, availability, title, description, thumbnail_image_url, product_image_url, category, type, material, size)
VALUES (2, 18, true, 'Fasciata', 'aloe vera plant. Hardy, decorative and has medicianal uses.', '/docs/plants/plant-1.jpg', '/docs/plants/plant-1.jpg', 'plant', 'indoor plant', null, null);
-- multiple plants on a table
INSERT INTO products (seller_id, price, availability, title, description, thumbnail_image_url, product_image_url, category, type, material, size)
VALUES (4, 35, true, 'Earth Pot', 'several pot plants on a table.', '/docs/pots/pot-1.jpg', '/docs/pots/pot-1.jpg', 'plant', 'indoor/outdoor plant', null, null);
-- rubber tree broad leaf green plant
INSERT INTO products (seller_id, price, availability, title, description, thumbnail_image_url, product_image_url, category, type, material, size)
VALUES (1, 15, false, 'Rubber Tree', 'broad leafed green plant.', '/docs/plants/plant-2.jpg', '/docs/plants/plant-2.jpg', 'plant', 'plant', null, null);
-- Pink Roses.
INSERT INTO products (seller_id, price, availability, title, description, thumbnail_image_url, product_image_url, category, type, material, size)
VALUES (1, 25, true, 'Pink Roses', 'Beautiful; flowering pink roases.', '/docs/plants/plant-3.jpg', '/docs/plants/plant-3.jpg', 'flower plant', null, null, null);
--  Snake Plant
INSERT INTO products (seller_id, price, availability, title, description, thumbnail_image_url, product_image_url, category, type, material, size)
VALUES (3, 10, true, 'Snake Plant', 'Broad leaf with yellow edges. Stands vertically.', '/docs/plants/plant-4.jpg', '/docs/plants/plant-4.jpg', 'plant', null, null, null);
--  Macrame Pot
INSERT INTO products (seller_id, price, availability, title, description, thumbnail_image_url, product_image_url, category, type, material, size)
VALUES (1, 30, true, 'A knotted Macrame Pot', 'Macramé, the art of knotting rope, is a trendy boho-chic inspired plant hanger design.', '/public/docs/pots/pot-2.jpg', '/public/docs/pots/pot-2.jpg', 'pots', null, 'clay', 'large');
-- fake data
INSERT INTO products (seller_id, price, availability, title, description, thumbnail_image_url, product_image_url, category, type, material, size)
VALUES (1, 30, true, 'somepot4', 'long description 7', 'https://www.pexels.com/photo/assorted-flower-arrangements-947914/', 'https://www.pexels.com/photo/two-round-ceramic-potted-green-plants-and-liquid-filled-clear-drinking-glass-1166642/', 'pots', null, 'ceramic', 'medium');
-- fake data
INSERT INTO products (seller_id, price, availability, title, description, thumbnail_image_url, product_image_url, category, type, material, size)
VALUES (2, 32, true, 'someseed1', 'long description 8', 'https://www.pexels.com/photo/sunflower-during-daytime-69832/', 'https://www.pexels.com/photo/batch-close-up-cooking-dry-273838/', 'seeds', 'flowers', null, null);
-- fake data
INSERT INTO products (seller_id, price, availability, title, description, thumbnail_image_url, product_image_url, category, type, material, size)
VALUES (3, 17, true, 'someseed2', 'long description 9', 'https://www.pexels.com/photo/white-flowers-in-tilt-shift-lens-4268531/', 'https://www.pexels.com/photo/blurred-background-chestnuts-close-up-color-219737/', 'seeds', 'plants', null, null);



INSERT INTO favourite_items (product_id, buyer_id)
VALUES (2, 3);
INSERT INTO favourite_items (product_id, buyer_id)
VALUES (8, 1);
INSERT INTO favourite_items (product_id, buyer_id)
VALUES (5, 3);
INSERT INTO favourite_items (product_id, buyer_id)
VALUES (2, 4);


INSERT INTO order_history (buyer_id, total_cost)
VALUES (2, 42);
INSERT INTO order_history (buyer_id, total_cost)
VALUES (1, 15);
INSERT INTO order_history (buyer_id, total_cost)
VALUES (5, 26);
INSERT INTO order_history (buyer_id, total_cost)
VALUES (3, 80);
INSERT INTO order_history (buyer_id, total_cost)
VALUES (4, 100);










INSERT INTO order_items (product_id, quantity, cost, order_id)
VALUES (1, 2, 30, 2);
INSERT INTO order_items (product_id, quantity, cost, order_id)
VALUES (1, 2, 32, 3);
INSERT INTO order_items (product_id, quantity, cost, order_id)
VALUES (3, 2, 17, 4);





