// npm used in this file
const inquirer = require("inquirer");

// Module get from other file
const db = require("./function");
const question = require("./question");
const obj = require("./classconstructor");

// Main route of the app
async function employee_tracker() {
    try {
        // Check onnection with the database
        db.connect.connect((err)=> {
            if (err) throw err;
            console.log(connection.threadId + "\n");
        });
        // Get the move from user and form SQL command
        const { move, table } = await inquirer.prompt(question.path);
        let sqlCommand = db.sqlRequest(move, table);
        let data;
        switch (move) {
            case "add":
                switch (table) {
                    case "employee":
                        let { first_name, last_name, role_id, manager_id } = await inquirer.prompt(question.addEmployee);
                        data = new obj.Employee (first_name, last_name, role_id, manager_id);
                        db.addEmployeeDB(sqlCommand, data);
                        break;
                    case "role":
                        let { title, salary, department_id } = await inquirer.prompt(question.addRole);
                        data = new obj.Role (title, salary, department_id);
                        db.addRoleDB(sqlCommand, data);
                        break;     
                    case "department":
                        let { name } = await inquirer.prompt(question.addDepartment);
                        data = new obj.Department (name);
                        db.addDepartmentDB(sqlCommand, data);
                        break;     
                }
                break;
            case "view":
                db.viewDB(sqlCommand, table);
                break;
            case "delete":
                let { id } = await inquirer.prompt(question.deleteID);
                db.deleteDB(sqlCommand, id);
                break;
        } 
        db.connect.end();
    } catch (err) {
        throw err;
    }
};

employee_tracker();