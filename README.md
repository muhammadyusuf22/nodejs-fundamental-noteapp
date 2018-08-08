# Belajar Basic Node JS


## Kali ini membuat semacam aplikasi Note yang disimpan di file notes-data.json

Perintah Untuk mencoba add Note seperti berikut :

```bash
node app.js add  --title='Minuman' --body='Es Jeruk'
```


Perintah Untuk mencoba remove Note seperti berikut :

```bash
node app.js remove  --title='Minuman'
```

Jika Note berhasil diremove maka hasilnya seperti berikut :

```bash
$ node app.js remove  --title=secret
Starting app.js
Starting note js
Command :  remove
Yargs :  { _: [ 'remove' ], title: 'secret', '$0': 'app.js' }
Note Was Removed
```

Jika Gagal Maka Hasilnya seperti ini :

```bash
$ node app.js remove  --title=secret
Starting app.js
Starting note js
Command :  remove
Yargs :  { _: [ 'remove' ], title: 'secret', '$0': 'app.js' }
Note Not Found
```


##### Untuk Melihat Tutorial Sebelumnya Silahkan Lakukan Checkout ke Commit Sebelumnya

