INSERT INTO department (name)
VALUES 
('Sales'), 
('Finance'), 
('Engineers'), 
('HR'), 
('Marketing'), 
('Administration');

INSERT INTO role (title, salary, department_id)
VALUES 
('Sales Rep', 45000, 1), 
('Finance Associate', 35000, 2),
('Engineer', 65000, 3),
('HR Rep', 45000, 4),
('Marketing Agent', 35000, 5), 
('Admin Assistant', 45000, 6), 
('Manager', 60000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Michael', 'Scott', 7, NULL), 
('Dwight', 'Schrute', 1, NULL),
('Oscar', 'Martinez', 2, 1), 
('Angela', 'Martin', 2, 1), 
('Kevin', 'Malone', 2, 1), 
('Toby', 'Flenderson', 4, 1), 
('Meredith', 'Palmer', 5, 1), 
('Creed', 'Bratton', 3, 1), 
('Stanley', 'Hudson', 1, 2), 
('Phillis', 'Vance', 1, 2), 
('Jim', 'Halpert', 1, 2), 
('Pam', 'Beesly', 6, 1), 
('Andy', 'Bernard', 1, 2); 