const fs = require('fs');
const path = require('path');

const files = {};

files.getCurrentDirectoryBase= function() {
    return path.basename(process.cwd());
}

files.getDataDirectory = function() {
    return path.join(process.cwd(),'data');
}

files.getBotCommands = function() { 
    let dir = this.getDataDirectory();
    let file = 'commands.json';
    if(this.directoryExists(dir)){
        return path.join(dir, file);
    }else{
        return false;
    }    
}

files.getBotEvents = function() { 
    let dir = this.getDataDirectory();
    let file = 'events.json';
    if(this.directoryExists(dir) && this.fileExists(file)){
        return path.join(dir, file);
    }else{
        return false;
    }    
}

files.directoryExists = function(filePath){
    try {
        return fs.statSync(filePath).isDirectory();
    } catch (err) {
        return false;
    }
}

files.fileExists = function(filePath) {
    try {
        return fs.statSync(filePath);
    } catch (err) {
        return false;
    }
}

module.exports = files;