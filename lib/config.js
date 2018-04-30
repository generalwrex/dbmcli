const pkg         = require('../package.json');
const Configstore = require('configstore');

const conf = new Configstore('dbmmodscli');

module.exports = {

  version: "v0.0.1",

  firstRun: conf.get('dbmcli.firstRun') || false,

  getInstance: () => {
    return conf;
  },

  setFirstRun : (value) => {
    conf.set('dbmcli.firstRun', value);
  }
};