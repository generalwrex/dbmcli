var fs    = require('fs')

const config = require('nconf');

config.argv().env();
config.file({ file: 'config.json' });

config.set('app:version',"0.0.2");
config.set('app:firstRun', false);
config.set('bots:list',[]);

config.overrides({
  //'key': 'value'
});

config.defaults({
 // 'key': 'value'
});

config.save(function (err) {
  //fs.readFile('config.json', function (err, data) {
  //  console.dir(JSON.parse(data.toString()))
  //});
});

module.exports = config;