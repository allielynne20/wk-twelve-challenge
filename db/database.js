//create a class and inside will be methods for find all employess, managers , etc. which will contain sql statements 
const connection = require('./connection');
// get the stuff

class Employee {
    constructor(connection) {
        this.connection = connection
    }

    displayDepartments() {
        return this.connection.promise().query('SELECT department.id, department.name FROM department;')
    }

    displayRoles() {
        return this.connection.promise().query('SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department ON role.department_id = department.id;')
    }

    displayEmployee() {
        return this.connection.promise().query('SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id;')
    }

    addDepartment() {
        return this.connection.promise().query('INSERT INTO department(name) VALUES (?);')
    }

    addRole() {
        return this.connection.promise().query('INSERT INTO role(title, salary, department_id) VALUES (?, ?, ?);')
    }

    addEmployee() {
        return this.connection.promise().query('INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?);')
    }

    updateEmployee() {
        return this.connection.promise().query('UPDATE employee SET party_id = ? WHERE id = ?;')
    }

}

module.exports = new Employee(connection);