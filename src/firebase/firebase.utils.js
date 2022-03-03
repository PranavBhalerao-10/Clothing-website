import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyAB8AhLdqzfkkFbX_tAqNGz4eL2p-42wnc",
    authDomain: "clothing-website-9e88c.firebaseapp.com",
    projectId: "clothing-website-9e88c",
    storageBucket: "clothing-website-9e88c.appspot.com",
    messagingSenderId: "869684361268",
    appId: "1:869684361268:web:a0dc2c6704235e77213261",
    measurementId: "G-4BK7SKKTSP"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShop = await userRef.get();

    if (!snapShop.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch (error) {
            console.log('error creating user', error);
        }
    }
    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase