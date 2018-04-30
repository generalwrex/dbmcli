#!/usr/bin/env node
//DBM CLI Tool by General Wrex under MIT

const argv = require('minimist')(process.argv.slice(2));

const chalk       = require('chalk');
const clear       = require('clear');
const figlet      = require('figlet');
const CLI         = require('clui');
const inquirer    = require('inquirer');
const Spinner     = CLI.Spinner;

// load lib modules
const utils = require('./lib/utils');
const files = require('./lib/files');
const config = require('./lib/config');
const commands = require('./lib/commands');


///////////////////BANNER////////////////////////////////////////////////
clear();
console.log(utils.localISOString())
console.log(chalk.yellow(figlet.textSync('Discord Bot Maker', { horizontalLayout: 'full' })));
console.log(chalk.yellow(figlet.textSync('CLI Tool', { horizontalLayout: 'full' })));
console.log(chalk.green(config.version));

/////////////////////////////////////////////////////////////////////////


if(!config.firstRun){
    console.log(chalk.red("It seems this is the first time you've ran the tool, we're setting it up!"));

    const status = new Spinner('This may take a few minutes...');
    status.start();

    // do first run stuff here

    status.stop();
    config.setFirstRun(utils.localISOString());
}


let commandArray = commands.load(files.getBotCommands())

console.log(chalk.green(`Found ${commandArray.length} commands`));

console.log(chalk.white(`Welcome! Pick an option below to get started! (Red Features = Not Ready Yet)\r\n`));


console.log(chalk.green(`DBM Mods Management Features;\r\n`));
console.log(chalk.red("Install"),chalk.white("-Install normal or beta mods to the provided bot location."))
console.log(chalk.red("Uninstall"),chalk.white("-Uninstall mods from the selected bot."))
console.log(chalk.red("Sync"),chalk.white("-Sync mods between multiple bot locations."))
console.log(chalk.red("View Changelog"),chalk.white("-View the latest master and beta changelogs."))
console.log("-------------------------------------------------------------------------------------");
console.log(chalk.green(`\r\nDBM Commands and Events Management Features;\r\n`));
console.log(chalk.red("Backup"),chalk.white("-Backup the commands of the selected bot to a json file "))
console.log(chalk.red("Merge"),chalk.white("-Merge commands or events from one file to another."))
console.log(chalk.red("Export"),chalk.white("-Export all commands or events to the specified location."))
console.log(chalk.red("Import"),chalk.white("-Import all commands or events to the specified location. Overwriting is optional."))

// ready ones
console.log(" ");

function test() {
    inquirer
      .prompt({
        type: 'list',
        name: 'manager',
        message: 'Select a manager...',
        choices: [
          'DBM Mods Management',
          'DBM Commands Management',
          'DBM Events Management'
        ]
      })
      .then((manager) => {
        console.log('you selected ' + manager);
      });
}

test();
console.log("\r\n\r\n");