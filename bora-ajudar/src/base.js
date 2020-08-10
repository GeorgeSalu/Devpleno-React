import Rebase from 're-base'
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBSrqA_h_cF4QvZQodY8AomZKQhX1x9EEI",
  authDomain: "bora-ajudar-b88c8.firebaseapp.com",
  databaseURL: "https://bora-ajudar-b88c8.firebaseio.com",
  projectId: "bora-ajudar-b88c8",
  storageBucket: "bora-ajudar-b88c8.appspot.com",
  messagingSenderId: "660328552656",
  appId: "1:660328552656:web:6a498fe072f82df497a6d5"
};
// Initialize Firebase
const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database())
export const auth = firebase.auth()

export default base