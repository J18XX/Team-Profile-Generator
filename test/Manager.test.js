const Manager = require('../lib/Manager')

describe('Manager', () => {
    it('should set officeNumber for constructor arguments', () => {
        const testNumber = 101;
        const manager = new Manager('Jack', 100, 'test@test.com', testNumber);
        expect(manager.officeNumber).toEqual(testNumber);
    });

    it('should set role for constructor arguments', () => {
        const role = 'Manager';
        const manager = new Manager('Jack', 100, 'test@test.com', 101);
        expect(manager.getRole()).toEqual('Manager');
    });
})