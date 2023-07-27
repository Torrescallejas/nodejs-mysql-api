CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

-- DESCRIBE employee;

INSERT INTO employee(name, salary) VALUES
    ('John', 1000),
    ('Fernando', 750),
    ('Emiliano', 2500),
    ('Sam', 340);

SELECT * FROM employee;

