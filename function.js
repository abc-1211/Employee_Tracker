const mysql = require("mysql");

const connect = mysql.createConnection({
    host: "localhost",
    password: "",
    database: "employee_trackerDB",
    user: "root"
});

/*const addEmployee = connect.query((err) => {
    if (err) throw err;
    
})*/

connect.connect((err) => {
    if (err) throw err;
    console.log(connect.threadId);
    console.log("Successfully connected!");
    connect.end();
})