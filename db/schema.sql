DROP DATABASE IF EXISTS trakster;
CREATE DATABASE trakster;

-- User Tables:id, username, email, password
-- Comment table: id, comment_text, user_id, post_id
-- Product table: id, title, post_content, price, area, user_id

CREATE TABLE User (
    id INT NOT NULL PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL
);

CREATE TABLE Product (
    id INT NOT NULL PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    post_content TEXT,
    price NUMERIC,
    post_type VARCHAR(30) NOT NULL,
    area NUMERIC,
    user_id INT NOT NULL,
INDEX user_id (user_id),
CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE 
);

CREATE TABLE Comment (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
comment_text TEXT NOT NULL,
user_id INT NOT NULL,
INDEX user_id (user_id),
CONSTRAINT fk_user1 FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE, 
product_id INT NOT NULL,
INDEX product_id (product_id),
CONSTRAINT fk_product FOREIGN KEY (product_id) REFERENCES product(id) ON DELETE CASCADE 
);
