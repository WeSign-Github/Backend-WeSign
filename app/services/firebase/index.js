require('dotenv').config();
const firebase = require("firebase-admin");

const { FIREBASE_PROJECT } = process.env;
const credentials = require("./serviceAccountKey.json");

firebase.initializeApp({
    credential: firebase.credential.cert(credentials)
});

module.exports = firebase;