"use client";

import React, { useState } from 'react'
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from '@/utils/firebase';
import { COLLECTION_NAME } from '@/utils/constants';

const Footer = () => {
    const [newMessage, setNewMessage] = useState("");

    const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewMessage(e.target.value);
    };

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newMessage.trim()) return;
    
        try {
            await addDoc(collection(db, COLLECTION_NAME), {
                text: newMessage.trim(),
                timestamp: Timestamp.now(),
            });
            setNewMessage(""); // Clear input after sending
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };
    return (
        <footer 
            className="p-4 bg-gray-800 flex items-center space-x-4 shadow-inner fixed bottom-0 left-0 w-full"
        >
            <input
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={handleMessageChange}
                onKeyUp={(e) => e.key === 'Enter' && handleSendMessage(e)}
                className="flex-1 bg-gray-700 text-gray-200 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                onClick={handleSendMessage}
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500 transition"
            >
                Send
            </button>
        </footer>
    )
}

export default Footer
