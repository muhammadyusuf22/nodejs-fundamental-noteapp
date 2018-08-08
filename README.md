# Belajar Basic Node JS


## Kali ini mempelajari debuggin pada Node JS

Perintah untuk mencoba debugging seperti berikut :

```bash
node inspect playground/debugging.js
```

Dan berikut ini beberapa perintah dan hasil yang telah dicoba :

```bash
$ node inspect playground/debugging.js
< Debugger listening on ws://127.0.0.1:9229/ba59912e-83df-4505-b95d-2b3285fc4cf7
< For help see https://nodejs.org/en/docs/inspector
< Debugger attached.
Break on start in playground/debugging.js:1
> 1 (function (exports, require, module, __filename, __dirname) { var person = {
  2     name: 'Yusuf'
  3 };
debug> list(10)
> 1 (function (exports, require, module, __filename, __dirname) { var person = {
  2     name: 'Yusuf'
  3 };
  4
  5 person.age = 25;
  6
  7 person.name = 'Aini';
  8
  9 console.log(person);
 10
 11 });
debug> n
break in playground/debugging.js:1
> 1 (function (exports, require, module, __filename, __dirname) { var person = {
  2     name: 'Yusuf'
  3 };
debug> n
break in playground/debugging.js:5
  3 };
  4
> 5 person.age = 25;
  6
  7 person.name = 'Aini';
debug> c
< { name: 'Aini', age: 25 }
< Waiting for the debugger to disconnect...
```

Berikut ini saat mencoba memberikan perintah repl :

```bash
$ node inspect playground/debugging.js
< Debugger listening on ws://127.0.0.1:9229/3705d1d5-ccbe-4506-a598-a2c252499666
< For help see https://nodejs.org/en/docs/inspector
< Debugger attached.
Break on start in playground/debugging.js:1
> 1 (function (exports, require, module, __filename, __dirname) { var person = {
  2     name: 'Yusuf'
  3 };
debug> n
break in playground/debugging.js:1
> 1 (function (exports, require, module, __filename, __dirname) { var person = {
  2     name: 'Yusuf'
  3 };
debug> n
break in playground/debugging.js:5
  3 };
  4
> 5 person.age = 25;
  6
  7 person.name = 'Aini';
debug> repl
Press Ctrl + C to leave debug repl
> person
{ name: 'Yusuf' }
> person.age
undefined
debug> n
break in playground/debugging.js:7
  5 person.age = 25;
  6
> 7 person.name = 'Aini';
  8
  9 console.log(person);
debug> repl
Press Ctrl + C to leave debug repl
> person.age
25
> person.age + 100
125
> person.age = 100
100
debug> c
< { name: 'Aini', age: 100 }
< Waiting for the debugger to disconnect...
debug>
```
yang terakhir menambahkan syntax debugger pada file debugging.js, yang berguna untuk semacam point break (Mungkin), Berikut ini hasil uji coba setelah ditambahkan perintah debugger :

```bash
$ node inspect playground/debugging.js
< Debugger listening on ws://127.0.0.1:9229/6abfb2f8-e7ed-4d02-a9e6-717160bcc2a5
< For help see https://nodejs.org/en/docs/inspector
< Debugger attached.
Break on start in playground/debugging.js:1
> 1 (function (exports, require, module, __filename, __dirname) { var person = {
  2     name: 'Yusuf'
  3 };
debug> list(10)
> 1 (function (exports, require, module, __filename, __dirname) { var person = {
  2     name: 'Yusuf'
  3 };
  4
  5 person.age = 25;
  6
  7 debugger;
  8
  9 person.name = 'Aini';
 10
 11 console.log(person);
debug> n
break in playground/debugging.js:1
> 1 (function (exports, require, module, __filename, __dirname) { var person = {
  2     name: 'Yusuf'
  3 };
debug> c
break in playground/debugging.js:7
  5 person.age = 25;
  6
> 7 debugger;
  8
  9 person.name = 'Aini';
debug>
```

##### Catatan :
- list(10) : memunculkan baris code sebanyak 10 baris
- n : untuk next
- c : untuk melanjutkan / continue debugger hingga proses complete
- repl : agar kita bisa melakukan melakukan pencarian Variable dan lainnya

##### Untuk Melihat Tutorial Sebelumnya Silahkan Lakukan Checkout ke Commit Sebelumnya

