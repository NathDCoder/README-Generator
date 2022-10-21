// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input


 inquirer 

.prompt([
    {
        type:"input",
        message:"project title",
        name:"title"
    },
    {
        type:"input",
        message:"what is your project about?",
        name: "description"

    },
    {
        type:"input",
        message:"Installation Instructions?",
        name:"installation"
    },
    {
        type:"input",
        message:"Usage Info?",
        name:"usage"

    },
    {
        type:"input",
        message:"Contribution Guidelines?",
        name:"contributing"

    },
    {
        type:"input",
        message:"Test Instructions?",
        name:"testing"

    },
    {
        type:"list",
        message:"license?",
        name:"license",
        choices:["MSC", "APACHE", "NONE", "PYTHON"]
        
    }

])
    .then((data) => {
        console.log(data)
        const readmeContent = generateMarkdown(data);

        fs.writeFile("README.md", readmeContent, (err) => 
        err ? console.log(err) : console.log("Here is your README.md") 
      );
    });
    

    // fs.writeFileSync("ReadMe.md", inquirerResponse, data);
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {
//     inquirer
//     .prompt(questions)
//     .then(data => {
//         console.log(data)
//     })
// }

// // Function call to initialize app
// init();


//Inquirer
//FS
//GMD