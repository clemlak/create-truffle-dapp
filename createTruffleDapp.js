#! /usr/bin/env node

/* eslint no-console: 0 */

/* We load our modules */
const cmd = require('node-cmd');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

/* We get the project name */
const args = process.argv.slice(2);
const projectName = args[0];

const moduleDirectory = __dirname;
const projectDirectory = process.cwd();

/* All the info we need to know */
const questions = [
  {
    type: 'confirm',
    name: 'infura_setup',
    message: 'Do you want to set an Infura API key?',
  }, {
    type: 'input',
    name: 'infura_api_key',
    message: 'Please enter your Infura API key:',
    when(answers) {
      return answers.infura_setup;
    },
  }, {
    type: 'confirm',
    name: 'mnemonic_setup',
    message: 'Do you want to set a mnemonic?',
  }, {
    type: 'input',
    name: 'mnemonic',
    message: 'Please enter your mnemonic:',
    when(answers) {
      return answers.mnemonic_setup;
    },
  }, {
    type: 'list',
    name: 'solidity_linter',
    message: 'Do you want to create a default configuration file for a Solidity linter?',
    choices: ['Solium', 'Solhint', 'No'],
  },
];

/* Say hello! */
console.log(`\nHello! Welcome to ${chalk.blue('create-truffle-dapp')}!\n`);

/* We ask the questions */
inquirer.prompt(questions).then((answers) => {
  console.log(`\nCreating ${chalk.green(projectName)} in ${chalk.green(projectDirectory)}.\n`);

  /* Creates the folder for the project */
  cmd.get(`mkdir ${projectName}`, () => {
    /* Creates the folder for the contracts */
    cmd.get(`mkdir ${projectName}/contracts`, () => {
      /* We start to create the base contract */
      fs.readFile(path.join(moduleDirectory, 'templates/project/contracts/Base.sol'), 'utf8', (err, data) => {
        if (err) {
          console.log(err);
        }

        const buf = data.replace(/_project_placeholder_/g, projectName);

        fs.writeFile(`${projectName}/contracts/${projectName}.sol`, buf, (error) => {
          if (error) {
            console.log(error);
          }
        });
      });

      /* Then the file for the migrations */
      fs.readFile(path.join(moduleDirectory, '/templates/project/contracts/Migrations.sol'), 'utf8', (err, data) => {
        if (err) {
          console.log(err);
        }

        fs.writeFile(`${projectName}/contracts/Migrations.sol`, data, (error) => {
          if (error) {
            console.log(error);
          }
        });
      });
    });

    /* If needed, we init a default configuration file for a Soldity linter */
    if (answers.solidity_linter === 'Solhint') {
      cmd.get(`
        cd ${projectName}
        solhint init-config
      `);
    } else if (answers.solidity_linter === 'Solium') {
      cmd.get(`
        cd ${projectName}
        solium --init
      `);
    }

    /* Creates the folder for the migrations files */
    cmd.get(`mkdir ${projectName}/migrations`, () => {
      /* We copy the step 1 for the migrations */
      fs.readFile(path.join(moduleDirectory, '/templates/project/migrations/1_initial_migration.js'), 'utf8', (err, data) => {
        if (err) {
          console.log(err);
        }

        fs.writeFile(`${projectName}/migrations/1_initial_migration.js`, data, (error) => {
          if (error) {
            console.log(error);
          }
        });
      });

      /* Then we copy the step 2 for the migrations */
      fs.readFile(path.join(moduleDirectory, '/templates/project/migrations/2_deploy_contracts.js'), 'utf8', (err, data) => {
        if (err) {
          console.log(err);
        }

        const buf = data.replace(/_project_placeholder_/g, projectName);

        fs.writeFile(`${projectName}/migrations/2_deploy_contracts.js`, buf, (error) => {
          if (error) {
            console.log(error);
          }
        });
      });
    });

    /* Creates the folder for our tests */
    cmd.get(`mkdir ${projectName}/test`, () => {
      /* We copy a simple test and change the placeholder */
      fs.readFile(path.join(moduleDirectory, '/templates/project/test/Base.test.js'), 'utf8', (err, data) => {
        if (err) {
          console.log(err);
        }

        const buf = data.replace(/_project_placeholder_/g, projectName);

        fs.writeFile(`${projectName}/test/${projectName}.test.js`, buf, (error) => {
          if (error) {
            console.log(error);
          }
        });
      });
    });

    /* Creates the .env file */
    fs.readFile(path.join(moduleDirectory, '/templates/project/.env'), 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      }

      let buf = data;

      if (answers.mnemonic_setup) {
        buf = buf.replace(/_mnemonic_placeholder_/g, answers.mnemonic);
      }

      if (answers.infura_setup) {
        buf = buf.replace(/_infura_api_key_placeholder_/g, answers.infura_api_key);
      }

      fs.writeFile(`${projectName}/.env`, buf, (error) => {
        if (error) {
          console.log(error);
        }
      });
    });

    /* Creates the .gitignore */
    fs.readFile(path.join(moduleDirectory, '/templates/project/.gitignore'), 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      }

      fs.writeFile(`${projectName}/.gitignore`, data, (error) => {
        if (error) {
          console.log(error);
        }
      });
    });

    /* Creates the Truffle configuration file */
    fs.readFile(path.join(moduleDirectory, '/templates/project/truffle.js'), 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      }

      fs.writeFile(`${projectName}/truffle.js`, data, (error) => {
        if (error) {
          console.log(error);
        }
      });
    });

    /* Creates the package.json file */
    fs.readFile(path.join(moduleDirectory, '/templates/project/package.json'), 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      }

      const buf = data.replace(/_project_placeholder_/g, projectName);

      fs.writeFile(`${projectName}/package.json`, buf, (error) => {
        if (error) {
          console.log(error);
        }

        console.log('Installing packages. This might take a couple of minutes.');
        console.log(`Installing ${chalk.blue('dotenv')} and ${chalk.blue('truffle-hdwallet-provider')}...\n`);

        cmd.get(`
          cd ${projectName}
          npm install
        `, (cmdError, res, stderr) => {
          console.log(res);

          console.log(`\nSuccess! Created ${chalk.green(projectName)} at ${chalk.green(projectDirectory)}\n\n`);
          console.log(`Inside the ${chalk.green(projectName)} directory, you can run:\n`);
          console.log(`${chalk.magenta('truffle test')}\nTo test your contracts\n\n`);
          console.log(`${chalk.magenta('truffle compile')}\nTo compile your dapp\n\n`);
          console.log(`${chalk.magenta('truffle migrate')}\nTo migrate your dapp\n\n`);
          console.log('Happy coding! :)');
        });
      });
    });
  });
});
