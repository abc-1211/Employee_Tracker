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
    }
]

async function ans() {
    var ans = await inquirer.prompt(path);
    console.log(ans);
}

ans()