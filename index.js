const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/template");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const newTeamData = [];

// generator question
const questions = async () => {
  const answers = await inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your ID number?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your email?",
        name: "email",
      },
      {
        type: "list",
        message: "What is your role?",
        name: "role",
        choices: ["Engineer", "Intern", "Manager"],
      },
    ])

      // manager prompt
      if (answers.role === "Manager") {
        const managerAns = await inquirer
          .prompt([
            {
              type: "input",
              message: "What is your office number?",
              name: "officeNumber",
            },
          ])
          const newManager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            managerAns.officeNum
          );
          newTeamData.push(newManager);
          
        // engineer prompt
      } else if (answers.role === "Engineer") {
        const githubAns = await inquirer
          .prompt([
            {
              type: "input",
              message: "What is your GitHub user name?",
              name: "github",
            }
          ])
            const newEngineer = new Engineer(
              answers.name,
              answers.id,
              answers.email,
              githubAns.github
            );
            newTeamData.push(newEngineer);
          
        // intern prompt
      } else if (answers.role === "Intern") {
        const internAns = await inquirer
          .prompt([
            {
              type: "input",
              message: "What university did you attend?",
              name: "school",
            },
          ])
          
          const newIntern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            internAns.school
          );
          newTeamData.push(newIntern);          
      } 
};

async function promptQuestions() {
  await questions();

  const addMemberAns = await inquirer
    .prompt([
      {
        name:'addMember',
        type: 'list',
        choices: ['Add a new member', 'Create team'],
        message: "What would you like to do next?"
      }
    ])

    if (addMemberAns.addMember === 'Add a new member') {
      return promptQuestions()
    }
    return createTeam();
};

promptQuestions();
// create team function
function createTeam () {
  console.log("new guy", newTeamData)
  fs.writeFileSync(
    "./output/index.html",
    generateTeam(newTeamData),
    "utf-8"
  );
}