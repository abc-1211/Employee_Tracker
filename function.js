const mysql = require("mysql");
const cTable = require("console.table");

// Create connection with DB
const connect = mysql.createConnection({
    host: "localhost",
    password: "",
    database: "employee_trackerDB",
    user: "root"
});

// Forming SQL command by using the parameters get from user
const sqlRequest = (move, table) => {
    let sqlCommand;
    switch (move) {
        case "add":
            sqlCommand = "INSERT INTO ";
            switch (table) {
                case "employee":
                    sqlCommand += "employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)";
                    return sqlCommand;
                case "role":
                    sqlCommand += "role (title, salary, department_id) VALUES (?,?,?)";
                    return sqlCommand;        
                case "department":
                    sqlCommand += "department (name) VALUES (?)";
                    return sqlCommand;        
            }
        case "view":
            sqlCommand = "SELECT * FROM ";
            switch (table) {
                case "employee":
                    sqlCommand += "employee";
                    return sqlCommand;
                case "role":
                    sqlCommand += "role";
                    return sqlCommand;        
                case "department":
                    sqlCommand += "department";
                    return sqlCommand;        
            }
        case "delete":
            sqlCommand = "DELETE FROM ";
            switch (table) {
                case "employee":
                    sqlCommand += "employee WHERE id = ?";
                    return sqlCommand;
                case "role":
                    sqlCommand += "role WHERE id = ?";
                    return sqlCommand;        
                case "department":
                    sqlCommand += "department id = ?";
                    return sqlCommand;        
            }
    }
}

const addEmployeeDB = (sql, values) => {
    connect.query(sql, [values.first_name, values.last_name, values.role_id, values.manager_id], (err, result) => {
        if (err) throw err;
        console.log("\nEmployee added!");
        console.log("\n        ----- EMPLOYEE -----   \n\n" + cTable.getTable(values));
    })
};

const addRoleDB = (sql, values) => {
    connect.query(sql, [values.title, values.salary, values.department_id], (err, result) => {
        if (err) throw err;
        console.log("\nRole added!");
        console.log("\n        ----- ROLE -----   \n\n" + cTable.getTable(values));
    })
};

const addDepartmentDB = (sql, values) => {
    connect.query(sql, [values.name], (err, result) => {
        if (err) throw err;
        console.log("\nDepartment added!");
        console.log("\n        ----- DEPARTMENT -----   \n\n" + cTable.getTable(values));
    })
};

const viewDB = (sql, table) => {
    connect.query(sql, table, (err, result) => {
        if (err) throw err;
        table = table.toUpperCase()
        console.log("\n        ----- " + table + " -----   \n\n" + cTable.getTable(result));
    })
}

const deleteDB = (sql, id) => {
    connect.query(sql, id, (err, result) => {
        if (err) throw err;
        console.log("\nSuccessfully deleted!");
    })
} 

module.exports = { connect, sqlRequest, addEmployeeDB, addRoleDB, addDepartmentDB, viewDB, deleteDB };