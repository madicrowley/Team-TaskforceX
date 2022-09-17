
const assert = require('assert');
require('dotenv').config(); //used to access the .env file easily

const {
    PORT,
    HOST,
    HOST_URL,
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGE_SENDER_ID,
    APP_ID
} = process.env;

assert(PORT, 'PORT is required')
assert(HOST, 'HOST is required ')

module.exports = {

    port: PORT,
    host: HOST,
    url: HOST_URL,
    firebaseConfig: {
        apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        projectId: PROJECT_ID,
        storageBucket: STORAGE_BUCKET,
        messagingSenderId: MESSAGE_SENDER_ID,
        appId: APP_ID
    }
}