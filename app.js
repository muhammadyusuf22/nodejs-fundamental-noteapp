const fs = require('fs');
const os = require('os');
const notes = require('./notes')

var user = os.userInfo();
console.log(user);

var res = notes.addNote();
console.log(res);

var add = notes.penjumlahan(10, 11);
console.log(add);


