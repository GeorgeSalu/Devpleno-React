const config = {
  apiKey: "AIzaSyCPJKneK3I3z_bt1gOXLdOZj9eBwtzqXMI",
  authDomain: "mercadodev-c1e31.firebaseapp.com",
  databaseURL: "https://mercadodev-c1e31.firebaseio.com",
  projectId: "mercadodev-c1e31",
  storageBucket: "gs://mercadodev-c1e31.appspot.com",
  messagingSenderId: "33962729639",
  appId: "1:33962729639:web:fdfe380fe3b3697109bb82",
  measurementId: "G-RM3GV6RJ9T"
};

const Rebase = require('re-base')
const firebase = require('firebase/app')
require('firebase/database')
require('firebase/storage')

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export const storage = app.storage()

export default base