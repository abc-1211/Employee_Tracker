const inquirer = require("inquirer");
const Employee = require("./classconstructor");


const path = [
    {
        type: "list",
        message: "What would you like to do?",
        name: "action",
        choices: [
            {
                name: "Add",
                value: 0
            },
            {
                name: "View",
                value: 1
            },            
            {
                name: "Delete",
                value: 2
            }
        ]
    },
    {
        type: "list",
        message: "Which table?",
        name: "table",
        choices: [
            {
                name: "Employee",
                value: 0
            },
            {
                name: "Role",
                value: 1
            },            
            {
                name: "Department",
                value: 2
            }
        ]
    }
];

const addEmployee = [
    {
        message: "Enter Employee First Name:",
        name: "first_name"
    },
    {
        message: "Enter Employee Last Name:",
        name: "last_name"
    },
    {
        message: "Enter Role ID:",
        name: "role_id"
    },
    {
        message: "Enter Manager ID (Press ENTER if no manager):",
        name: "manager_id"
    }
];

// Testing Area
async function ans() {
    var { first_name, last_name, role_id, manager_id } = await inquirer.prompt(addEmployee);
    //console.log(ans);
    console.log(first_name);
    
    var newppl = new Employee( first_name, last_name, role_id, manager_id );
    console.log("\n" + JSON.stringify(newppl));
}

ans()

module.exports = { path, addEmployee};