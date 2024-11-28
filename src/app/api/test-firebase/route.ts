import { NextResponse } from "next/server";
import { collection, getDocs, QuerySnapshot } from "firebase/firestore";
import { db } from "@/utils/firebase";
import { COLLECTION_NAME } from "@/utils/constants";

interface Message {
    id: string;
    [key: string]: unknown;
}

export async function GET(): Promise<NextResponse> {
    try {

        const messagesRef = collection(db, COLLECTION_NAME);
        const querySnapshot: QuerySnapshot = await getDocs(messagesRef);

        const messages: Message[] = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        return NextResponse.json({ messages });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
}
