const mysql = require("mysql");

const connect = mysql.createConnection({
    host: "localhost",
    password: "",
    database: "employee_trackerDB",
    user: "root"
});

const addEmployeeDB = connect.query((err) => {
    if (err) throw err;
    
})