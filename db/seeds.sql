-- access the db --
USE employees_db;

INSERT INTO department (name)
VALUES ("Sales"), -- id 1
       ("Engineering"), -- id 2
       ("Finance"), -- id 3
       ("Legal"); -- id 4
       

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1), -- id 1
       ("Salesperson", 80000, 1), -- id 2
       ("Lead Engineer", 150000, 2), -- id 3
       ("Software Engineer", 120000, 2), -- id 4
       ("Account Manager", 160000, 3), -- id 5
       ("Accountant", 125000, 3), -- id 6
       ("Legal Team Lead", 250000, 4), -- id 7
       ("Lawyer", 190000, 4); -- id 8

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("John", "Doe", 1), -- id 1
       ("Mike", "Chan", 2), -- id 2
       ("Ashley", "Rodriguez", 3), -- id 3
       ("Kevin", "Tupik", 4), -- id 4
       ("Kunal", "Singh", 5), -- id 5
       ("Malia", "Brown", 6), -- id 6
       ("Sarah", "Lourd", 7), -- id 7
       ("Tom", "Allen", 8); -- id 8

UPDATE employee SET manager_id = 1 WHERE id = 2;
UPDATE employee SET manager_id = 3 WHERE id = 4;
UPDATE employee SET manager_id = 5 WHERE id = 6;
UPDATE employee SET manager_id = 7 WHERE id = 8;