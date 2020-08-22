INSERT INTO department (name)
VALUES ('Sales'), ('Finance'), ('Engineers'), ('HR'), ('Marketing');

INSERT INTO role (title, salary, department_id)
VALUES ('Admin', 45000, 1), ('Secretary', 35000, 2), ('Engineer', 65000, 3), ('HR Rep', 45000, 4), ('Marketing Agent', 35000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Joe', 'Smith', 1, 1), ('Mark', 'Taylor', 2, 2), ('Sally', 'Webber', 3, 3), ('Casey', 'Rogers', 4, 4), ('Parker', 'Walters', 5, 5); 