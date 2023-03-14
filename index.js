const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let teams = [];

const questions = {
    Manager: [
        {
            type: 'input',
            name:'name',
            messgae: 'What is the name of manager?'
        },

        {
            type: 'input',
            name: 'id',
            messgae: 'What is the ID of manager?'
        },

        {
            type: 'input',
            name: 'email',
            messgae: 'What is the email of manager?'
        },
        
        {
            type: 'input',
            name: 'officeNumber',
            messgae: 'What is the office number of manager?'
        },

        {
            type: 'list',
            name: 'addNew',
            message: 'Do you like to add a new Engineer?',
            choices: ['Yes', 'No']
        },
    ],

    Engineer: [
        {
            type: 'input',
            name:'name',
            messgae: 'What is the name of the Engineer?'
        },

        {
            type: 'input',
            name: 'id',
            messgae: 'What is the ID of the Engineer?'
        },

        {
            type: 'input',
            name: 'email',
            messgae: 'What is the email of the Engineer?'
        },

        {
            type: 'input',
            name: 'gitHub',
            messgae: 'What is the github of the Engineer?'
        },

        {
            type: 'list',
            name: 'addNew',
            message: 'Do you like to add a new Intern?',
            choices: ['Yes', 'No']
        },
    ],

    Intern: [
        {
            type: 'input',
            name:'name',
            messgae: 'What is the name of the Intern?'
        },

        {
            type: 'input',
            name: 'id',
            messgae: 'What is the ID of the Intern?'
        },

        {
            type: 'input',
            name: 'email',
            messgae: 'What is the email of the Intern?'
        },

        {
            type: 'input',
            name: 'school',
            messgae: 'What is the school of the Intern?'
        },
    ]    
};

const memberType = [
    {
        type: 'list',
        name: 'memberType',
        message: "Please chosse the employee's role? ",
        choices: ['Manager', 'Engineer', 'Intern', 'Quit'],
    }
]

function addNewMenmber(){

    return inquirer.prompt(memberType)
        .then(answer => {
            if (answer.memberType === 'Manager'){
                return addNewManager();
            } else if (answer.memberType === 'Engineer') {
                return addNewEngineer();
            } else if (answer.memberType === 'Intern') {
                return addNewIntern();
            } else {
                const html = generateHTML(teams);
                creatFile(html);
            }
        })
};

function addNewManager() {
    return inquirer.prompt(questions.Manager)
                    .then(answer => {
                        const manager = new Manager(
                            answer.name,
                            answer.id,
                            answer.email,
                            answer.officeNumber
                        );

                    teams.push(manager);
                    return addNewMenmber();
                    })
};

function addNewEngineer() {
    inquirer.prompt(questions.Engineer)
                    .then(answer => {
                        const engineer = new Engineer(
                            answer.name,
                            answer.id,
                            answer.email,
                            answer.gitHub
                        );

                    teams.push(engineer);
                    return addNewMenmber();
                    })
};

function addNewIntern() {
    inquirer.prompt(questions.Intern)
                    .then(answer => {
                        const intern = new Intern(
                            answer.name,
                            answer.id,
                            answer.email,
                            answer.school
                        );

                    teams.push(intern);
                    return addNewMenmber();
                    })
};

const generateHTML = (newTeamArray) => {
    console.log(newTeamArray);
    let team = ``;
    for (let i = 0; i < newTeamArray.length; i++) {
        if(newTeamArray[i].getRole() === 'Manager'){
            team += `<div class="card" style="width: 18rem; margin: 20px; background-color: rgb(85, 85, 221); color:aliceblue;">
            <div class="card-body">
              <h5 class="card-title">${newTeamArray[i].getRole()}</h5>
              <p class="card-text">${newTeamArray[i].name}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Office Number: ${newTeamArray[i].officeNumber}</li>
              <li class="list-group-item">ID: ${newTeamArray[i].id}</li>
              <li class="list-group-item">Email: ${newTeamArray[i].email}</li>
            </ul>
          </div>`
        } else if (newTeamArray[i].getRole() === 'Engineer'){
            team += `<div class="card" style="width: 18rem; margin: 20px; background-color: rgb(85, 85, 221); color:aliceblue;">
            <div class="card-body">
              <h5 class="card-title">${newTeamArray[i].getRole()}</h5>
              <p class="card-text">${newTeamArray[i].name}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Github: ${newTeamArray[i].getGithub()}</li>
              <li class="list-group-item">ID: ${newTeamArray[i].id}</li>
              <li class="list-group-item">Email: ${newTeamArray[i].email}</li>
            </ul>
          </div>`
        } else if (newTeamArray[i].getRole() === 'Intern') {
            team += `<div class="card" style="width: 18rem; margin: 20px; background-color: rgb(85, 85, 221); color:aliceblue">
            <div class="card-body">
              <h5 class="card-title">${newTeamArray[i].getRole()}</h5>
              <p class="card-text">${newTeamArray[i].name}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">School: ${newTeamArray[i].school}</li>
              <li class="list-group-item">ID: ${newTeamArray[i].id}</li>
              <li class="list-group-item">Email: ${newTeamArray[i].email}</li>
            </ul>
          </div>`
        };
    };


    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" 
        crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Document</title>

        <style type="text/css">
          h1 {background-color:rgb(212, 79, 79);
            text-align: center; 
            padding: 15px;
            color: azure;}
          section {
            display: flex;
            margin: 15px;
            text-align: center;
            flex-wrap: wrap;
            justify-content: center;
          }  
      </style>
    </head>
    <body>
        <h1>The Team</h1>
        <section>
        ${team}
        </section>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" 
        crossorigin="anonymous"></script>
    </body>
    
    </html>`
};



addNewMenmber()

function creatFile(data){
    fs.writeFile('index.html', data, err => {
        err ? console.log(err): console.log('You made it!')
    });
}