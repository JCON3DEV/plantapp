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




INSERT INTO products (seller_id, price, availability, title, description, thumbnail_image_url, product_image_url, category, type, material, size)
VALUES (2, 18, true, 'cottonbro', 'long description 1', 'https://www.pexels.com/photo/photo-of-potted-plants-on-wooden-table-4503273/', 'https://www.pexels.com/photo/person-s-hands-holding-potted-plant-4503265/', 'plant', 'indoor plant', null, null);

INSERT INTO products (seller_id, price, availability, title, description, thumbnail_image_url, product_image_url, category, type, material, size)
VALUES (4, 35, true, 'anotherplant2', 'long description 2', 'https://www.pexels.com/photo/green-leafed-plant-bokeh-photography-767240/', 'https://www.pexels.com/photo/person-holding-a-green-plant-1072824/', 'plant', 'indoor/outdoor plant', null, null);

INSERT INTO products (seller_id, price, availability, title, description, thumbnail_image_url, product_image_url, category, type, material, size)
VALUES (1, 15, false, 'anotherplant3', 'long description 3', 'https://www.pexels.com/photo/pink-cluster-petaled-flower-1086178/', 'https://www.pexels.com/photo/selective-focus-photography-of-pink-peony-flowers-617967/', 'plant', 'flower plant', null, null);

INSERT INTO products (seller_id, price, availability, title, description, thumbnail_image_url, product_image_url, category, type, material, size)
VALUES (1, 25, true, 'somepot1', 'long description 4', 'https://www.pexels.com/photo/green-leafed-plant-3094211/', 'https://www.pexels.com/photo/green-cactus-plant-on-brown-clay-pot-4505144/', 'pots', null, 'clay', 'medium');

INSERT INTO products (seller_id, price, availability, title, description, thumbnail_image_url, product_image_url, category, type, material, size)
VALUES (3, 10, true, 'somepot2', 'long description 5', 'https://www.pexels.com/photo/woman-taking-care-plants-709783/', 'https://www.pexels.com/photo/two-white-and-blue-crochet-flower-pot-709784/', 'pots', null, 'plastic', 'small');

INSERT INTO products (seller_id, price, availability, title, description, thumbnail_image_url, product_image_url, category, type, material, size)
VALUES (1, 30, true, 'somepot3', 'long description 6', 'https://www.pexels.com/photo/green-leafed-plant-3094211/', 'https://www.pexels.com/photo/green-cactus-plant-on-brown-clay-pot-4505144/', 'pots', null, 'clay', 'large');

INSERT INTO products (seller_id, price, availability, title, description, thumbnail_image_url, product_image_url, category, type, material, size)
VALUES (1, 30, true, 'somepot4', 'long description 7', 'https://www.pexels.com/photo/assorted-flower-arrangements-947914/', 'https://www.pexels.com/photo/two-round-ceramic-potted-green-plants-and-liquid-filled-clear-drinking-glass-1166642/', 'pots', null, 'ceramic', 'medium');

INSERT INTO products (seller_id, price, availability, title, description, thumbnail_image_url, product_image_url, category, type, material, size)
VALUES (2, 32, true, 'someseed1', 'long description 8', 'https://www.pexels.com/photo/sunflower-during-daytime-69832/', 'https://www.pexels.com/photo/batch-close-up-cooking-dry-273838/', 'seeds', 'flowers', null, null);

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





