const fs = require('fs');
const os = require('os');
const notes = require('./notes');
const _ = require('lodash');

var user = os.userInfo();
console.log(user);

var res = notes.addNote();
console.log(res);

var add = notes.penjumlahan(10, 11);
console.log(add);

// Testing Lodash
console.log(_.isString(true)); // ==> Hasilnya false karena isString bukan Boolean
console.log(_.isString('Muhammad Yusuf')); // ==> Sebaliknya hasilnya yaitu True

// Testing Lodash Untuk Filtering Array
var filteredArray = _.uniq(['Yusuf', 1, 'Yusuf', 'Aini', 1, 2, 3, 4, 5, 'Aini']);
console.log(filteredArray); // Hasilnya akan [ 'Yusuf', 1, 'Aini', 2, 3, 4, 5 ] karena di filter untuk value yg sama

