const inqirer = require("inquirer");
const mysql = require("mysql2");
const {printTable} = require("console-table-printer");
const { default: inquirer } = require("inquirer");
require("dotenv").config();

const figlet = require("figlet");

// create connection
const db = mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 3306 
})
db.connect(()=>{

});

/*
view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role \
*/
function mainMenu(){
    inquirer.prompt()
}





figlet("Employee Manager", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});