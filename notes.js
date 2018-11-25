const fs = require('fs');

const addNote = (title, body) => {
    const noteList = [];
    const note = {
        title, 
        body
    };
    noteList.push(note);
    fs.writeFileSync('note-data.json', JSON.stringify(noteList));
};

module.exports = {
    addNote
};