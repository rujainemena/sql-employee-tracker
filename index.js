const inquirer = require("inquirer");
const mysql = require("mysql2");
const { printTable } = require("console-table-printer");
require("dotenv").config();
// variable for figlet
const figlet = require("figlet");
// EMPLOYEE MANAGER figlet function 
figlet("Employee Manager", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});

// create connection
const db = mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 3306 
})
db.connect(() => {
    mainMenu()
});

function mainMenu(){
    inquirer.prompt({
        type: "list",
        message: "What would you like to do?",
        name: "selection",
        choices: ["View All Departments", "View All Roles", "View All Employees", "Add Department", "Add Role", "Add Employee", "Update Employee Role"]
    })
        .then(answer => {

            if (answer.selection === "View All Employees") {
                viewEmployee();

            } else if (answer.selection === "Add Employee") {
                addEmployee();

            } else if (answer.selection === "Update Employee Role") {
                updateEmployee();
            }
        })
}

// // Main Menu funtion //
// function mainMenu() {
//     inquirer.prompt({
//         type: "list",
//         message: "What would you like to do?",
//         name: "selection",
//         choices: ["View All Departments", "View All Roles", "View All Employees", "Add Department", "Add Role", "Add Employee", "Update Employee Role"]
//     })
//         .then(answer => {

//             if (answer.selection === "View All Employees") {
//                 viewEmployee();

//             } else if (answer.selection === "Add Employee") {
//                 addEmployee();

//             } else if (answer.selection === "Update Employee Role") {
//                 updateEmployee();
//             }
//         })
// };


function viewEmployee() {
    db.query(`SELECT employee.id, employee.first_name, employee.last_name, name as department, salary, CONCAT(supervisor.first_name, " ", supervisor.last_name) as manager FROM employee  
    LEFT JOIN role ON employee.role_id = role.id
    LEFT JOIN department ON department.id = role.department_id
    LEFT JOIN employee as supervisor ON employee.manager_id = supervisor.id;`, (err, data) => {
        printTable(data)
        mainMenu()
    })
};

function addEmployee() {

};

function updateEmployee() {

};