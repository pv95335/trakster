DROP DATABASE IF EXISTS trakster;
CREATE DATABASE traskster;

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
    post_content TEXT NOT NULL,
    price NUMERIC REQUIRED,
    area NUMERIC REQUIRED
INDEX user_id (user_id),
CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE 
);

CREATE TABLE Comment (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
comment_text TEXT NOT NULL,
user_id INT NOT NULL,
INDEX user_id (user_id),
CONSTRAINT fk_user1 FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE, 
post_id INT NOT NULL,
INDEX post_id (post_id),
CONSTRAINT fk_post FOREIGN KEY (post_id) REFERENCES post(id) ON DELETE CASCADE 
);
