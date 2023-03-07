const Employee = require('../lib/Employee')

describe('Employee', () => {

    it('should set name for constructor arguments', () => {
        const name = 'Jack';
        const employee = new Employee(name);
        expect(employee.name).toEqual(name);
    });

    it('should set ID for constructor arguments', () => {
        const testId = 100;
        const employee = new Employee('Jack', testId);
        expect(employee.id).toEqual(testId);
    });

    it('should set email for constructor arguments', () => {
        const testEmail = 'test@test.com';
        const employee = new Employee('Jack', 100, testEmail);
        expect(employee.email).toEqual(testEmail);
    });

    it('should set role for constructor arguments', () => {
        const role = 'Employee';
        const employee = new Employee('Jack', 100, 'test@test.com');
        expect(employee.getRole()).toEqual('Employee');
    });
})