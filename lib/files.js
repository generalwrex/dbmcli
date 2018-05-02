const fs = require('fs');
const path = require('path');

module.exports = function(dbmcli){

    const files = {};

    files.getCurrentDirectoryBase= function() {
        return path.basename(process.cwd());
    }

    files.getDataDirectory = function() {
        return path.join(process.cwd(),'data');       
    }  


    files.getDataFile = function(file) { 
        let dir = this.getDataDirectory();
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
            return fs.statSync(filePath).isFile();
        } catch (err) {
            return false;
        }
    }

    return files;

}