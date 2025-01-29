
DROP TABLE IF EXISTS submissions;
DROP TABLE IF EXISTS campaigns;
DROP TABLE IF EXISTS users;


CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS campaigns (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    requirements TEXT,
    deadline DATETIME NOT NULL,
    status ENUM('ACTIVE', 'COMPLETED') DEFAULT 'ACTIVE'
);

CREATE TABLE IF NOT EXISTS submissions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    campaign_id INT NOT NULL,
    content_url VARCHAR(512) NOT NULL,
    status ENUM('SUBMITTED', 'APPROVED', 'REJECTED') DEFAULT 'SUBMITTED',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (campaign_id) REFERENCES campaigns(id)
);


INSERT IGNORE INTO users (username, password, email) VALUES
('john_doe', 'password123', 'john@gmail.com'),
('jane_smith', 'password456', 'jane@gmail.com');

INSERT IGNORE INTO campaigns (title, description, requirements, deadline, status) VALUES
('Summer Fashion Campaign', 'Share your summer fashion looks with our audience.', 'Create a 60-second video showcasing at least 3 different outfits. Tag @brandname and use #SummerFashion2025', '2025-02-15 23:59:59', 'ACTIVE'),
('Tech Review Series', 'Create engaging tech review content.', 'Review must include unboxing, key features, and honest feedback. Video length: 3-5 minutes', '2025-02-20 23:59:59', 'ACTIVE');