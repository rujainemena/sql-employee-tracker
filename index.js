const inquirer = require("inquirer");
const mysql = require("mysql2");
const { printTable } = require("console-table-printer");
require("dotenv").config();

// variable for figlet
const figlet = require("figlet");
// EMPLOYEE MANAGER figlet function 
figlet("Employee Manager", function (err, signData) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(signData);
});

// create connection //
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
// Main Menu funtion //
function mainMenu() {
    inquirer.prompt({
        type: "list",
        message: "What would you like to do?",
        name: "selection",
        choices: ["View All Departments", "View All Roles", "View All Employees", "Add Department", "Add Role", "Add Employee", "Update Employee Role"]
    })
        .then(answer => {

            if (answer.selection === "View All Departments") {
                viewDepartments();
            } else if (answer.selection === "View All Roles") {
                viewRoles();

            } else if (answer.selection === "View All Employees") {
                viewEmployee();

            } else if (answer.selection === "Add Role") {
                addRole();

            } else if (answer.selection === "Add Department") {
                addDepartment();

            } else if (answer.selection === "Add Employee") {
                addEmployee();

            } else if (answer.selection === "Update Employee Role") {
                updateEmployee();
            }
        })
}
// function to view department table //
function viewDepartments() {
    db.query("SELECT * FROM department;", (err, allDepartments) => {
        printTable(allDepartments);
        mainMenu();
    })
};
// function to view role table //
function viewRoles() {
    db.query(`SELECT role.id, title, salary, name as department FROM role LEFT JOIN department ON department.id = role.department_id;`, (err, jobRoles) => {
        printTable(jobRoles);
        mainMenu();
    })
};
// function to view employee table //
function viewEmployee() {
    db.query(`SELECT employee.id, employee.first_name, employee.last_name, name as department, salary, CONCAT(supervisor.first_name, " ", supervisor.last_name) as manager FROM employee  
    LEFT JOIN role ON employee.role_id = role.id
    LEFT JOIN department ON department.id = role.department_id
    LEFT JOIN employee as supervisor ON employee.manager_id = supervisor.id;`, (err, data) => {
        console.log("employees displayed");
        printTable(data);
        mainMenu();
    })
};
// function to add a new job role //
function addRole() {
    db.query("SELECT id as value, name from department", (err, departmentData) => {
        inquirer.prompt([
            {
                type: "input",
                message: "Enter a job title:",
                name: "title"
            },
            {
                type: "input",
                message: "Enter a salary:",
                name: "salary"
            },
            {
                type: "list",
                message: "Select a Department:",
                name: "department_id",
                choices: departmentData
            }
        ]).then(answer => {
            db.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [answer.title, answer.salary, answer.department_id], err => {
                viewRoles();
            })
        })
    })
};

// function to add a new company department //
function addDepartment() {
    db.query("SELECT id as value", (err) => {
        inquirer.prompt([
            {
                type: "input",
                message: "Enter a new department name:",
                name: "name"
            },
        ]).then(answer => {
            db.query("INSERT INTO department SET ?", answer, err => {
                viewDepartments();
            })
        })
    })
};


// function to add a new employee //
function addEmployee() {
    db.query("SELECT id as value, title as name from role", (err, roleData) => {
        db.query("SELECT id as value, CONCAT(first_name, ' ', last_name) as name FROM employee WHERE manager_id is null", (err, managerData) => {
            inquirer.prompt([
                {
                    type: "input",
                    message: "What is the first name?",
                    name: "first_name"
                },
                {
                    type: "input",
                    message: "What is the last name?",
                    name: "last_name"
                },
                {
                    type: "list",
                    message: "Select a job title:",
                    name: "role_id",
                    choices: roleData
                },
                {
                    type: "list",
                    message: "Select a Manager:",
                    name: "manager_id",
                    choices: managerData
                }
            ]).then(answer => {
                db.query("INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.first_name, answer.last_name, answer.role_id, answer.manager_id], err => {
                    viewEmployee();
                })
            })
        })
    })
};
// function to update an employee //
function updateEmployee() {
    db.query("SELECT id as value, title as name from role", (err, roleData) => {
        db.query("SELECT id as value, CONCAT(first_name, ' ', last_name) as name FROM employee", (err, employeeData) => {
            inquirer.prompt([
                {
                    type: "list",
                    message: "Select a job title:",
                    name: "role_id",
                    choices: roleData
                },
                {
                    type: "list",
                    message: "Select an employee:",
                    name: "employee_id",
                    choices: employeeData
                },
            ]).then(answer => {
                db.query("UPDATE employee SET role_id = ? WHERE id = ?;", [answer.role_id, answer.employee_id], err => {
                    viewEmployee();
                })
            })
        })
    })
};