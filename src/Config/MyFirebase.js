import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBJWt1Yh6AufjxV8B8Y8UVz_25cYV1fvhs",
    authDomain: "joblinxs-9ecf3.firebaseapp.com",
    projectId: "joblinxs-9ecf3",
    storageBucket: "joblinxs-9ecf3.appspot.com",
    messagingSenderId: "152202356320",
    appId: "1:152202356320:web:9ca19a6584e100ab4a8505",
    measurementId: "G-PLE4TBYC7N"
}
firebase.initializeApp(config)
firebase.firestore().settings({
    timestampsInSnapshots: true
})

export const myFirebase = firebase
export const myFirestore = firebase.firestore()
export const myStorage = firebase.storage()
