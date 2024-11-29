"use client";
import Header from '@/components/Header';
import MessageBox from '@/components/MessageBox';
import MessagesList from '@/components/MessageList';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import React from 'react';

const Contact = () => {
    return (
        <div 
            className="h-screen bg-gray-900 flex flex-col justify-between"
        >
            <Header />
    
            <MessagesList />
            <MessageBox />

            <SpeedInsights />
            <Analytics />
        </div>
    );
};

export default Contact;
