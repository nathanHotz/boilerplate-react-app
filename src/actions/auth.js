import { firebase, googleAuthProvider } from '../firebase/firebase'

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = () => {
    return () => {
        console.log('attempting to login')
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

export const logout = () => ({
    type: 'LOGOUT'
});

// Thunk pattern
export const startLogout = () => {
    return () => {
        console.log('attempting to logout')
        return firebase.auth().signOut();
    }
}