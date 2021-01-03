const firebase = require('firebase-admin');
const fs = require('fs');

// Set the configuration for your app
// TODO: Replace with your app's config object
var firebaseConfig = {
    apiKey: "AIzaSyA9V85uEnkxBw1HswaIQkgaIunbrjOz-0Y",
    authDomain: "fb-clone-75062.firebaseapp.com",
    databaseURL: "https://fb-clone-75062.firebaseio.com",
    projectId: "fb-clone-75062",
    storageBucket: "fb-clone-75062.appspot.com",
    messagingSenderId: "720789127262",
    appId: "1:720789127262:web:c78477bd49d57a81aa74cf",
    measurementId: "G-BW0ZNC9TCR"
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage()
module.exports = async (req) => {
    const destination = Date.now() + req.files.image.name
    const file = storage.bucket().file(destination);
    await file.save(req.files.image.data, { contentType: req.files.image.mimetype });
    await file.makePublic()
    return file.publicUrl();
};