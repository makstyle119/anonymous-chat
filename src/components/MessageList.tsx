"use client";
import Message from "./Message";
import { getFirestore } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import deleteOldMessages from "@/utils/deleteOlderMessages";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { COLLECTION_NAME } from "@/utils/constants";

interface MessageType {
    id: string;
    sender: string;
    text: string;
    timestamp: { seconds: number; nanoseconds: number };
}

const MessagesList: React.FC = () => {
    const [messages, setMessages] = useState<MessageType[]>([]);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const db = getFirestore();

    useEffect(() => {
        const interval = setInterval(() => {
            deleteOldMessages();
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const messagesRef = collection(db, COLLECTION_NAME);
        const q = query(messagesRef, orderBy("timestamp", "asc"));

        const unsubscribe = onSnapshot(q, async (snapshot) => {
            const fetchedMessages = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as MessageType[];
            setMessages(fetchedMessages);
        });

        return () => unsubscribe();
    }, [db]);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    return (
        <div className="space-y-2 pt-24 pb-20 px-6 bg-gray-900">
            {messages.map((msg) => (
                <Message
                    key={msg.id}
                    sender={"Anonymous"}
                    text={msg.text}
                    timestamp={new Date(msg.timestamp.seconds * 1000)}
                />
            ))}
            <div ref={messagesEndRef}></div>
        </div>
    );
};

export default MessagesList;
