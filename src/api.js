import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where }  from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyBoxaZ8-jvzVaZcTrOK3ueGifa-OphcOSc",
  authDomain: "vanlife-619.firebaseapp.com",
  projectId: "vanlife-619",
  storageBucket: "vanlife-619.appspot.com",
  messagingSenderId: "1062104762385",
  appId: "1:1062104762385:web:b59fbb5c1b90d9d9b0c9b0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")
const userCollectionRef = collection(db, "user")


//Refactoring the fetching functions

export async function getVans() {
    const querySnapshot = await getDocs(vansCollectionRef)
    const dataArr = querySnapshot.docs.map(doc => (
        { ...doc.data(), id: doc.id }
    ))
    return dataArr
}

export async function getVansById(id) {
    const docRef = doc(db, "vans", id)
    const vanSnapshot = await getDoc(docRef)
    if(!vanSnapshot) {
        throw {
            message: "Failed to fetch van",
        }
    }
    return { ...vanSnapshot.data(), id: vanSnapshot.id }
}

export async function getHostVans() {
    //Hard coded hostId for now
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const querySnapshot = await getDocs(q)
    const dataArr = querySnapshot.docs.map(doc => (
        { ...doc.data(), id: doc.id }
    ))
    return dataArr
}

// export async function getHostVansById(id) {
//     //Hard coded hostId for now
//     }

export async function loginUser(credentials) {

        try {
            // Step 1: Query Firestore to find the user with the given email and password
            const q = query(
                userCollectionRef,
                where('email', '==', credentials.email),
                where('password', '==', credentials.password)
            );
    
            const querySnapshot = await getDocs(q);
    
            // Step 2: Check if a user with the given credentials exists
            if (querySnapshot.docs.length === 0) {
                throw new Error('Invalid credentials. User not found.');
            }
    
            // Step 3: User found - You might want to return user information or perform additional actions
            const userDoc = querySnapshot.docs[0].data();
    
            console.log('User successfully logged in:', credentials.email);
    
            return userDoc; // Returning user information
    
        } catch (error) {
            console.error('Login failed:', error.message);
            throw error;
        }
}
    
    
    // const res = await fetch(`/api/login`, 
    //     {method: "post", body: JSON.stringify(credentials)}
    // )
    // const data = await res.json()
    // if (!res.ok) {
    //     throw {
    //         message: data.message,
    //         statusText: res.statusText,
    //         status: res.status
    //     }
    // }

//     return data
// }