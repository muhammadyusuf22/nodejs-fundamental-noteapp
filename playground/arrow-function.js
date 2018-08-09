// var square = (x) => {
//     var result = x * x;
//     return result;
// };

// Perintah yg dicomment di atas atau yang Bawah ini sama saja

var square = (x) => x * x;

console.log(square(10));

var user = {
    name: 'Yusuf',
    sayHi: () => {
        console.log(`Hi, I'm ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi, I'm ${this.name}`);
    }
};

user.sayHi();
user.sayHiAlt(1, 2, 3);
