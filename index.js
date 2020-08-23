//use this file to call those class methods to display the tables using console.table in command-line 
const db = require('./db/database');
//put inquirer prompts in this file because this will be the file you run in command-line 'node index.js'
const inquirer = require('inquirer');
const { addDepartment } = require('./db/database');
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
                    break;
                case 'add an employee':
                    break;
                case 'update an employee role':
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
    const answer = (
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
            // {
            //     type: 'confirm', 
            //     name: 'condep', 
            //     message: 'Is this the department you wish to insert?' + answer.name, 
            //     when: addDepartment(answer)
            // }
        ]))
    return answer
        .then(function (err, answer) {
            if (err) throw err;
            db.addDepartment(answer)
            // db.addDepartment(answer)
        })
        .then(console.table(answer))
        .catch(console.err);
    // .then(() => startQuestions())
}

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