//use this file to call those class methods to display the tables using console.table in command-line 
const db = require('./db/database');
//put inquirer prompts in this file because this will be the file you run in command-line 'node index.js'
const inquirer = require('inquirer');
const { addDepartment } = require('./db/database');
const connection = require('./db/connection');
// const cTable = require("console.table");

function startQuestions() {

    inquirer.prompt([
        {
            type: 'list',
            name: 'starttracker',
            message: 'What would you like to do with the employee tracker?',
            choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role', 'exit the tracker']
        }
    ])
        .then(choice => {
            switch (choice.starttracker) {
                case 'view all departments':
                    viewDepartments();
                    break;
                case 'view all roles':
                    viewRoles();
                    break;
                case 'view all employees':
                    viewEmployee();
                    break;
                case 'add a department':
                    addedDepartment();
                    break;
                case 'add a role':
                    addedRole();
                    break;
                case 'add an employee':
                    addedEmployee();
                    break;
                case 'update an employee role':
                    // updatedEmployeeRole();
                    break;
                case 'exit the tracker':
                    break;
            }
        })
};

function viewDepartments() {
    db.displayDepartments()
        .then(([rows]) => {
            console.table(rows)
        })
        .then(() => startQuestions())
};

function viewRoles() {
    db.displayRoles()
        .then(([rows]) => {
            console.table(rows)
        })
        .then(() => startQuestions())
};

function viewEmployee() {
    db.displayEmployee()
        .then(([rows]) => {
            console.table(rows)
        })
        .then(() => startQuestions())
};

function addedDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'depname',
            message: 'What is the name of the department?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the department name.');
                    return false
                }
            }
        }
    ])
        .then(({ depname }) => {
            const query = connection.query(
                'INSERT INTO department SET ?',
                {
                    name: depname
                },
                function (err, res) {
                    if (err) throw err;
                    // console.table(depname)
                }
            )
        })
        .then(() => viewDepartments())
}

function addedRole() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What role would you like to add?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the role.');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary for that role?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the salary for that role.');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'depId',
            message: 'What is the department ID?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the department ID.');
                    return false
                }
            }
        }
    ])
        .then(({ title, salary, depId }) => {
            const query = connection.query(
                'INSERT INTO role SET ?',
                {
                    title: title,
                    salary: salary,
                    department_id: depId
                },
                function (err, res) {
                    if (err) throw err;
                    // console.table(depname)
                }
            )
        })
        .then(() => viewRoles())
}

function addedEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'fname',
            message: 'What is the first name of the employee?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the first name of the employee.');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'lname',
            message: 'What is the last name of the employee?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the last name of the employee.');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'roleId',
            message: 'What is the role ID?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the ID of the role.');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'manId',
            message: 'What is the ID of the manager?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the ID of the manager.');
                    return false
                }
            }
        }
    ])
        .then(({ fname, lname, roleId, manId }) => {
            const query = connection.query(
                'INSERT INTO employee SET ?',
                {
                    first_name: fname,
                    last_name: lname,
                    role_id: roleId,
                    manager_id: manId
                },
                function (err, res) {
                    if (err) throw err;
                    // console.table(depname)
                }
            )
        })
        .then(() => viewEmployee())
}

// function updatedEmployeeRole() {
//     inquirer.prompt([
//         {
//             type: 'input',
//             name: 'employees',
//             message: 'What is the ID of the employee you would like to update?',
//             // choices: ['Michael Scott', 'Dwight Schrute', 'Oscar Martinez', 'Angela Martin', 'Kevin Malone', 'Toby Flenderson', 'Meredith Palmer', 'Creed Bratton', 'Stanley Hudson', 'Phillis Vance', 'Jim Halpert', 'Pam Beesly', 'Andy Bernard']
//         },
//         // {
//         //     type: 'input',
//         //     name: 'oldRole',
//         //     message: 'What is the current role ID the employee to has?',
//         //     validate: nameInput => {
//         //         if (nameInput) {
//         //             return true;
//         //         } else {
//         //             console.log('Please enter the old role ID of the employee.');
//         //             return false
//         //         }
//         //     }
//         // }, 
//         {
//             type: 'input',
//             name: 'newRole',
//             message: 'What is the new role ID you would like the employee to have?',
//             validate: nameInput => {
//                 if (nameInput) {
//                     return true;
//                 } else {
//                     console.log('Please enter the new role ID of the employee.');
//                     return false
//                 }
//             }
//         }
//     ])
//         .then(({ newRole, employees }) => {
//             const query = connection.query(
//                 'UPDATE employee SET role_id = ? WHERE id = ?',
//                 [
//                     {
//                         role_id: newRole
//                     },
//                     {
//                         id: employees
//                     }
//                 ]
//             )
//         })
//         .then(() => viewEmployee())
// }

// function stopQuestions() {

//     inquirer.prompt([
//         {
//             type: 'list',
//             name: 'stoptracker',
//             message: 'Would you like to stop the tracker or go back to the main menu?',
//             choices: ['stop the tracker', 'go back to the main menu']
//         }
//     ])
//         .then(answer => {
//             switch (answer.stoptracker) {
//                 case 'stop the tracker':
//                     break;
//                 case 'go back to the main menu':
//                     break;
//             }
//         })
// };
startQuestions();