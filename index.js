#!/usr/bin/env node
//DBM CLI Tool by General Wrex under MIT

const argv = require('minimist')(process.argv.slice(2));

const chalk       = require('chalk');
const clear       = require('clear');
const figlet      = require('figlet');
const CLI         = require('clui');
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



