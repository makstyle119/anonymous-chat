import { initializeApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { 
    FIREBASE_API_KEY, 
    FIREBASE_APP_ID, 
    FIREBASE_AUTH_DOMAIN, 
    FIREBASE_MESSAGING_SENDER_ID, 
    FIREBASE_PROJECT_ID, 
    FIREBASE_STORAGE_BUCKET 
} from "./constants";

// Define the structure of the environment variables
interface FirebaseConfig {
    apiKey: string | undefined;
    authDomain: string | undefined;
    projectId: string | undefined;
    storageBucket: string | undefined;
    messagingSenderId: string | undefined;
    appId: string | undefined;
}

// Get Firebase configuration from environment variables
const firebaseConfig: FirebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    appId: FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firestore database instance
const db: Firestore = getFirestore(app);

export { db };
