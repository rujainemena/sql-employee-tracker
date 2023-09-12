-- access the db --
USE employees_db;
-- view department table --
SELECT * FROM department;
-- view role table --
SELECT role.id, title, salary, name as department FROM role LEFT JOIN department ON department.id = role.department_id;
-- view employee table --
SELECT employee.id, employee.first_name, employee.last_name, name as department, salary, CONCAT(supervisor.first_name, " ", supervisor.last_name) as manager FROM employee  
LEFT JOIN role ON employee.role_id = role.id
LEFT JOIN department ON department.id = role.department_id
LEFT JOIN employee as supervisor ON employee.manager_id = supervisor.id;
