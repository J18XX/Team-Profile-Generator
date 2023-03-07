const Intern = require('../lib/Intern')

describe('Intern', () => {
    it('should set school for constructor arguments', () => {
        const testSchool = 'UCD';
        const intern = new Intern('Jack', 100, 'test@test.com', testSchool);
        expect(intern.school).toEqual(testSchool);
    });

    it('should set role for constructor arguments', () => {
        const role = 'Intern';
        const intern = new Intern('Jack', 100, 'test@test.com', 'UCD');
        expect(intern.getRole()).toEqual('Intern');
    });
})