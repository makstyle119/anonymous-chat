"use client";
import { COLLECTION_NAME } from '@/utils/constants';
import { db } from '@/utils/firebase';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import React, { useState } from 'react'

const MessageBox = () => {
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
        <div
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
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="size-6"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" 
                    />
                </svg>
            </button>
        </div>
    )
}

export default MessageBox
