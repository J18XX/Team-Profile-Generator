const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
    it('should set Github for constructor arguments', () => {
        const gitHubValue = 'GithubUser';
        const engineer = new Engineer('Jack', 100, 'test@test.com', gitHubValue);
        expect(engineer.gitHubValue).toEqual(gitHubValue);
    });

    it('should set role for constructor arguments', () => {
        const role = 'Employee';
        const engineer = new Employee('Jack', 100, 'test@test.com', 'GithubUser');
        expect(engineer.getRole()).toEqual('Engineer');
    });
})