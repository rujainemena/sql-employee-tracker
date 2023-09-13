# SQL: Employee Tracker

## Description

This is a command-line application from that manages a company's employee database, using Node.js, Inquirer, and MySQL.

## Table of Contents

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

Please ensure that you install Inquirer version 8.2.4. To do so, use the following command in your project folder: `npm i inquirer@8.2.4`.

## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

## Usage

The following video shows an example of the application being used from the command line:

![video-walkthrough](./Assets/video-walkthrough.gif)

When using this application, you will have access to a Main Menu where you can search through the company's database. Here is the main menu navigation and it's results:
* `View All Departments`
    * will display a table will all company departments.
* `View All Roles`
    * will display a table will all job roles and it's respective salary and departments.
* `View All Employees`
    * will display a table of all company employees and their respective roles within the company.
* `Add Department`
    * this selection will prompt a series of questions that will enable you to add a new company role to the list of existing job roles. 
* `Add Role`
    * this selection will prompt to enter a new company department to add to the database. 
* `Add Employee`
    * this selection will prompt a series of questions that will enable you to enter a new employee to add to the database. 
* `Update Employee Role`
    * this selection will allow you to update an employee's job role in the database.

### Credit

Thank you to my profressor Phil who gave thorough instructions for this project. 

### License

MIT License

## Tests

VS Code's integrated terminal was used for testing the application.

