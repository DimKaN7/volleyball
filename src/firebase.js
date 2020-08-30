import firebase from 'firebase';

const firebaseApp =  firebase.initializeApp(
    {
        apiKey: "AIzaSyB6t1idVBIIVDSII6qgNMETu_4JVswlP9w",
        authDomain: "volleyball-7c5da.firebaseapp.com",
        databaseURL: "https://volleyball-7c5da.firebaseio.com",
        projectId: "volleyball-7c5da",
        storageBucket: "volleyball-7c5da.appspot.com",
        messagingSenderId: "326378884340",
        appId: "1:326378884340:web:f798ab8f050ba1eb9b62a1"
    }
);

export const db = firebaseApp.firestore();