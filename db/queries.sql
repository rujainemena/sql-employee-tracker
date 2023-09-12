-- access the db --
USE employees_db;
-- view department table --
SELECT * FROM department;
-- view role table --
SELECT role.id, title, salary, name as department FROM role LEFT JOIN department on department.id = role.department_id
