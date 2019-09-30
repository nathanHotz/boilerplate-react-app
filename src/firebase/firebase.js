import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// //child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         console.log(snapshot.val())
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });

//         console.log(expenses);
//     })

// database.ref('expenses').push({
//     description: 'rent',
//     note: '',
//     amount: 10000,
//     createdAt: 97612359685
// });

// database.ref('expenses').push({
//     description: 'rent1',
//     note: '',
//     amount: 10000,
//     createdAt: 97612359685
// });

// database.ref('expenses').push({
//     description: 'ren2t',
//     note: '',
//     amount: 10000,
//     createdAt: 97612359685
// });

// database.ref('notes').remove()

// database.ref('notes/-Lp3RQBpjLmuZg0Xkl81').update({
//     body: 'changed'
// })

//create something of an array
// database.ref('notes').push({
//     title: 'second note',
//     body: 'whoa'
// })

//subscribe
// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// })

//fetch
// database.ref('location')
//     .once('value')
//     .then((snapshot) => {
//         console.log(snapshot);
//         console.log(snapshot.val());
//     })

//create
// database.ref().set({
//     name: 'NATHAN',
//     age: 31,
//     isSingle: false,
//     location: {
//         city: "omaha",
//         country: 'US'
//     }
// }).then(() => {
//     console.log("data is saved");
// }).catch((e) => {
//     console.log('this failed.', e);
// });

// database.ref().set('this is what?!');

// database.ref('age').set(31);
// database.ref('location/city').set('Lincoln');
// database.ref('attributes').set({
//     height: '6 ft',
//     weight: 'Oh Lawd He Comin!'
// });

//delete
// database.ref().remove().then(() => { console.log('success') }).catch((e) => { console.log(`Error => ${e}`) })

// database.ref('isSingle').set(null);

//update
// database.ref().update({
//     name: 'Mike',
//     age: 29,
//     job: 'software developer',
//     isSingle: null,
// })
