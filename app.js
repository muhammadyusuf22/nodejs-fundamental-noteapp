console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const notes = require('./notes.js');
const yargs = require('yargs');

const argv = yargs.argv;
var command =  process.argv[2];
console.log('Command : ', command);
console.log('Yargs : ', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note Created');
        notes.logNote(note)
    } else {
        console.log('Note Title Taken');
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log('Note Found');
        notes.logNote(note);
    } else {
        console.log('Note not Found');
    }
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note Was Removed' : 'Note Not Found';
    console.log(message);
} else {
    console.log('Command Not Recognized');
}
