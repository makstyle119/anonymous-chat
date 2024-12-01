"use client";
import Link from 'next/link'
import React, { useEffect } from 'react'
import deleteOldMessages from "@/utils/deleteOlderMessages";

const Header = () => {
    useEffect(() => {
        deleteOldMessages();
    }, []);
    return (
        <header 
            className="bg-white/30 backdrop-blur-md text-center py-4 px-6 rounded-b-lg shadow-md w-full fixed top-0 left-0 z-10"
        >
            <Link href="/">
                <h1 
                    className="text-2xl font-bold text-white"
                >
                    Anonymous Chat
                </h1>
            </Link>
            <p 
                className="text-md text-gray-200"
            >
                Quick, anonymous chats (<b>15-min</b> limit)
            </p>
        </header>
    )
}

export default Header
