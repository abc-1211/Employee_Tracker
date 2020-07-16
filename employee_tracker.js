const inquirer = require("inquirer");
const mysql = require("mysql");
const util = require("util");

async function employee_tracker() {
    try {
        let ans = await inquirer.prompt(question);
        let move = ans.action;
        // Move includes add, view and delete.
        // Add = 0, View = 1, Delete = 2
        let table = ans.table;
        // 3 Table in total, employee, role and department
        // Employee = 0, Role = 1, Department = 2
        // Add
        if (move === 0) {
            if (table === 0) {
                // Add data to employee table
            }
            else if (table === 1) {
                // role table
            }
            else if (table === 2) {
                // department
            }
            else {
                console.log("System Error!");
            }
        }
        // View
        else if (move === 1) {
            if (table === 0) {
                // employee table
            }
            else if (table === 1) {
                // role
            }
            else if (table === 2) {
                // department
            }
            else {
                console.log("System Error!");
            }
        }
        // Delete
        else if (move === 2) {
            if (table === 0) {
                // employee table
            }
            else if (table === 1) {
                // role
            }
            else if (table === 2) {
                // department
            }
            else {
                console.log("System Error!");
            }
        }
    } catch (err) {
        throw err;
    }
}