DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
USE employees;

CREATE TABLE department (
id INT UNSIGNED auto_increment PRIMARY KEY,
name VARCHAR(30) unique NOT NULL
);
DROP TABLE IF EXISTS employees;

-- CREATE TABLE employee (
-- id INT UNSIGNED auto_increment PRIMARY KEY,
-- first_name VARCHAR(30) NOT NULL, 
-- last_name VARCHAR(30) NOT NULL,
-- role_id INT UNSIGNED NOT NULL, 
-- CONSTRAINT fk_role foreign key(role_id) REFERENCES role(id) ON DELETE CASCADE, 
-- manager_id INT UNSIGNED, 
-- CONSTRAINT fk_manager foreign key(manager_id) REFERENCES employee(id) ON DELETE SET NULL 
-- );

CREATE TABLE employee (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT UNSIGNED NOT NULL,
  INDEX role_ind (role_id),
  CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
  manager_id INT UNSIGNED,
  INDEX man_ind (manager_id),
  CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);

CREATE TABLE role (
id INT UNSIGNED auto_increment PRIMARY KEY,
title VARCHAR(30) UNIQUE NOT NULL, 
salary DECIMAL UNSIGNED NOT NULL, 
department_id INTEGER UNSIGNED NOT NULL, 
CONSTRAINT fk_department foreign key(department_id) REFERENCES department(id) ON DELETE CASCADE
);

SELECT * FROM department;
