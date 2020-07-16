const inquirer = require("inquirer");

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


async function ans() {
    var ans = await inquirer.prompt(path);
    console.log(ans);
    console.log(ans.action);
}

ans()