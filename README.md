# Belajar Basic Node JS


## Kali ini membuat semacam aplikasi Note yang disimpan di file notes-data.json

Perintah untuk mencoba add note seperti berikut :

```bash
node app.js add  --title='Minuman' --body='Es Jeruk'
```


Perintah untuk mencoba remove Note seperti berikut :

```bash
node app.js remove  --title='Minuman'
```

Jika note berhasil diremove maka hasilnya seperti berikut :

```bash
$ node app.js remove  --title=secret
Starting app.js
Starting note js
Command :  remove
Yargs :  { _: [ 'remove' ], title: 'secret', '$0': 'app.js' }
Note Was Removed
```

Jika gagal maka hasilnya seperti ini :

```bash
$ node app.js remove  --title=secret
Starting app.js
Starting note js
Command :  remove
Yargs :  { _: [ 'remove' ], title: 'secret', '$0': 'app.js' }
Note Not Found
```

Perintah untuk mencoba read note (Get Note By title) seperti berikut:

```bash
node app.js read  --title=Makanan
```

Jika note ditemukan / berhasil read note maka hasilnya akan seperti berikut :

```bash
$ node app.js read  --title=Makanan
Starting app.js
Starting note js
Command :  read
Yargs :  { _: [ 'read' ], title: 'Makanan', '$0': 'app.js' }
Note Found
------------
Title  : Makanan
Body   : Nasi Goreng
```

Jika note tidak ditemukan / gagal read note maka hasilnya akan seperti berikut :

```bash
$ node app.js read  --title=gorengan
Starting app.js
Starting note js
Command :  read
Yargs :  { _: [ 'read' ], title: 'gorengan', '$0': 'app.js' }
Note not Found
```

Pada Commit yang sekarang log nya dikumpulkan menjadi satu function yang berada di file notes.js dengan nama function logNote

##### Untuk Melihat Tutorial Sebelumnya Silahkan Lakukan Checkout ke Commit Sebelumnya

