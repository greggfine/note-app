const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;

const command = argv._[0];

if(command === 'read'){
    notes.addNote(argv.title, argv.body);
};