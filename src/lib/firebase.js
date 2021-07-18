import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyCdVJ2WuxLJLL6LNaUEbmege1rRzMihFS8",
    authDomain: "instagram-ish-1de99.firebaseapp.com",
    projectId: "instagram-ish-1de99",
    storageBucket: "instagram-ish-1de99.appspot.com",
    messagingSenderId: "306536628749",
    appId: "1:306536628749:web:5b287446c9b13931154b44"
}

const firebase = Firebase.initializeApp(config)
const { FieldValue } = Firebase.firestore()



export { firebase, FieldValue }