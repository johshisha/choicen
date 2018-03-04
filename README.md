# チョイスン

---

### セットアップ
```
$ git clone git@github.com:johshisha/choicen.git
$ cd choicen/app
$ npm install
$ mysql -u root -p < config/initial_db.sql
```
`config/config.json.example`を参考に, `config/config.json`を書き換える.

### 使い方
```
$ DEBUG=app:* npm run dev
```
