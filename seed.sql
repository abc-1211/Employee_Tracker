CREATE DATABASE employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE department (
    id INTEGER AUTO_INCREMENT,
    name VARCHAR(30) NOT null,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INTEGER AUTO_INCREMENT,
    title VARCHAR(30) NOT null,
    salary DECIMAL(8,2) NOT null,
    department_id INT,
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT,
    first_name VARCHAR(30) NOT null,
    last_name VARCHAR(30) NOT null,
    role_id INTEGER,
    manager_id INTEGER,
    PRIMARY KEY (id)
);

ALTER TABLE employee
ADD FOREIGN KEY (role_id) REFERENCES role(id);

ALTER TABLE employee
ADD FOREIGN KEY (manager_id) REFERENCES employee(id);

ALTER TABLE role
ADD FOREIGN KEY (department_id) REFERENCES department(id);
