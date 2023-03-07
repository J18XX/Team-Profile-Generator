const fs = require('fs');
const inquirer = require('inquire');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let newTeamArray = [];

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
            name: 'github',
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
        choices: ['Manager', 'Engineer', 'Intern'],
    }
]

function addNewMenmber(){
    inquirer.prompt(memberType)
        .then(answer => {
            if (answer.memberType === 'Manager'){
                inquirer.prompt(questions.Manager)
                    .then(answer => {
                        const manager = new Manager(
                            answer.name,
                            answer.id,
                            answer.email,
                            answer.officeNumber
                        );
                    })
            }
        })
}


const generateHTML = (newTeamArray) => {
    let team = ``;
    for (let i = 0; i < newTeamArray.length; i++) {
        if(newTeamArray[i].getRole() === 'Manager'){
            team += `<div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${newTeamArray[i].getRole()}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${newTeamArray[i].getName()}</li>
              <li class="list-group-item">${newTeamArray[i].getID()}</li>
              <li class="list-group-item">${newTeamArray[i].getEmail()}</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>`
        }
    }


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
    </head>
    <body>
        ${team}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" 
        crossorigin="anonymous"></script>
    </body>
    
    </html>`
}