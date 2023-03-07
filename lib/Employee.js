// write a class that with employee's basic info

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    };

    getName(){
        return this.name;
    };

    getId(){
        return this.id;
    };

    getEmail(){
        return this.email;
    };

    getRole(){
        return 'Employee';
    };
};

module.exports = Employee;