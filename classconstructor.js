class Employee {
    constructor(first_name, last_name, role_id, manager_id) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.role_id = Number(role_id);
        if (manager_id === "") {
            this.manager_id = null;
        } else {
            this.manager_id = Number(manager_id);
        }
    }
}

class Role {
    constructor(title, salary, department_id) {
        this.title = title;
        this.salary = salary;
        if (department_id === "") {
            this.department_id = null;
        } else {
            this.department_id = Number(department_id);
        }
    }
}

class Department {
    constructor(name) {
        this.name = name;
    }
}

module.exports = { Employee, Role, Department };