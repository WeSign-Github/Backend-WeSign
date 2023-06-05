require('dotenv').config();
const fs = require('fs');

const {
  DB_HOST,
  DB_USER,
  DB_PASS,
  DB_NAME,
} = process.env

module.exports =
{
  "development": {
    "username": DB_USER,
    "password": DB_PASS,
    "database": DB_NAME,
    "host": DB_HOST,
    "dialect": "mysql",
    "dialectOptions": {
      "bigNumberStrings": true,
      "ssl": {
        "ca": fs.readFileSync(__dirname + '/certificate.pem')
      }
    }
  },
  "test": {
    "username": DB_USER,
    "password": DB_PASS,
    "database": DB_NAME,
    "host": DB_HOST,
    "dialect": "mysql"
  },
  "production": {
    "username": DB_USER,
    "password": DB_PASS,
    "database": DB_NAME,
    "host": DB_HOST,
    "dialect": "mysql"
  }
}
