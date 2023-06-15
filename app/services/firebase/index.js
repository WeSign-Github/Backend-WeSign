require('dotenv').config();
const firebase = require("firebase-admin");

const credentials = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

firebase.initializeApp({
    credential: firebase.credential.cert(credentials)
});

module.exports = firebase;