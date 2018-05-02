#!/usr/bin/env node
//DBM CLI Tool by General Wrex under MIT

const dbmcli = {}

dbmcli.args = require('minimist')(process.argv.slice(2));

const chalk       = require('chalk');
const clear       = require('clear');
const figlet      = require('figlet');
const CLI         = require('clui');
const inquirer    = require('inquirer');
const Spinner     = CLI.Spinner;

// load base modules
const config = dbmcli.config  = require('./lib/config');
const log    = dbmcli.log     = require('./lib/log');
const utils  = dbmcli.utils   = require('./lib/utils');

// load core modules
const files  = dbmcli.files   = require('./lib/files')(dbmcli);
const bots  = dbmcli.bots   = require('./lib/bots')(dbmcli);

if(!files.directoryExists(files.getDataDirectory())){

    console.log(chalk.red("This tool must be ran from the root directory of a Discord Bot created with DBM."));
    console.log(chalk.white(files.getDataDirectory()), chalk.red("doesn't seem to be a valid path"));
    process.exit(1);
}


///////////////////BANNER////////////////////////////////////////////////
clear();
console.log(utils.localISOString())
console.log(chalk.yellow(figlet.textSync('Discord Bot Maker', { horizontalLayout: 'full' })));
console.log(chalk.yellow(figlet.textSync('CLI Tool', { horizontalLayout: 'full' })));
console.log('Version: ',chalk.green(config.get('app:version')));



/////////////////////////////////////////////////////////////////////////

if(!config.get('initial:run')){

    console.log(chalk.red("It seems this is the first time you've ran the tool, we're setting it up!"));

    const status = new Spinner('This may take a few minutes...');
    status.start();

    // do first run stuff here

    status.stop();
    config.set('app:firstRun',utils.localISOString());
}


console.log(chalk.white(`Welcome! Pick an option below to get started! (Red Features = Not Ready Yet)\r\n`));
console.log(chalk.green(`DBM Mods Management Features;\r\n`));
console.log(chalk.red("Install Mods")  ,chalk.white("-Download and Install normal or beta mods to the provided bot location."))
console.log(chalk.red("Update Mods")   ,chalk.white(" -Download and Install normal or beta mods to the provided bot location."))
console.log(chalk.red("Uninstall Mods"),chalk.white("-Uninstall mods from the selected bot."))
console.log(chalk.red("Sync Mods")     ,chalk.white("-Sync mods between multiple bot locations."))
console.log(chalk.red("View Changelog"),chalk.white("-View the latest master and beta changelogs."))
console.log("-------------------------------------------------------------------------------------");
console.log(chalk.green(`\r\nDBM Commands and Events Management Features;\r\n`));
console.log(chalk.red("Backup") ,chalk.white("-Backup the commands of the selected bot to a json file "))
console.log(chalk.red("Merge")  ,chalk.white("-Merge commands or events from one file to another."))
console.log(chalk.red("Export") ,chalk.white("-Export selected commands or events to the specified location."))
console.log(chalk.red("Import") ,chalk.white("-Import selected commands or events to the specified location. Overwriting is optional."))

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