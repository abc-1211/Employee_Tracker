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

module.exports = Employee;