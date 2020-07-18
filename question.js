// Question for asking user
const path = [
    {
        type: "list",
        message: "What would you like to do?",
        name: "move",
        choices: [
            {
                name: "Add",
                value: "add"
            },
            {
                name: "View",
                value: "view"
            },            
            {
                name: "Delete",
                value: "delete"
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
                value: "employee"
            },
            {
                name: "Role",
                value: "role"
            },            
            {
                name: "Department",
                value: "department"
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

const addRole = [
    {
        message: "Enter Role Title:",
        name: "title"
    },
    {
        message: "Enter Salary:",
        name: "salary"
    },
    {
        message: "Enter Department ID:",
        name: "department_id"
    }
];


const addDepartment = [
    {
        message: "Enter Department Name:",
        name: "name"
    }
];

const deleteID = [
    {
        message: "Enter Employee's ID you want to delete:",
        name: "id"
    }
];

module.exports = { path, addEmployee, addRole, addDepartment, deleteID };