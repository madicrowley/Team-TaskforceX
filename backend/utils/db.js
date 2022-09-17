const fs = require('firebase-admin');

const serviceAccount = require('../config/teamforcex-41ab1-eb0f74df0e0c.json');
fs.initializeApp({
 credential: fs.credential.cert(serviceAccount),
 databaseURL:"https://teamforcex-41ab1-default-rtdb.asia-southeast1.firebasedatabase.app/"
});

const db = fs.database(); 
module.exports = db;