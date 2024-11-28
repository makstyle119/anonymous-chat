import { getFirestore, collection, query, where, getDocs, deleteDoc, doc } from "firebase/firestore";
import { COLLECTION_NAME } from "./constants";

const deleteOldMessages = async () => {
    try {
        const db = getFirestore(); // Initialize Firestore
        const messagesRef = collection(db, COLLECTION_NAME); // Reference the 'messages' collection

        const now = Date.now();
        const fifteenMinutesAgo = new Date(now - 15 * 60 * 1000);

        const q = query(messagesRef, where("timestamp", "<", fifteenMinutesAgo));
        const snapshot = await getDocs(q);

        const deletePromises = snapshot.docs.map((docSnapshot) => {
        const messageDoc = doc(db, COLLECTION_NAME, docSnapshot.id);
        return deleteDoc(messageDoc);
        });

        await Promise.all(deletePromises); // Wait for all deletions to complete
        console.log(`Deleted ${snapshot.size} old messages.`);
    } catch (error) {
        console.error("Error deleting old messages:", error);
    }
};

export default deleteOldMessages;
