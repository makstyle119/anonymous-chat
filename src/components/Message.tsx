// "use client";
import React from "react";
import { formatDistanceToNow } from "date-fns";

interface MessageProps {
    sender: string;
    text: string;
    timestamp: Date;
}

const Message: React.FC<MessageProps> = ({ sender, text, timestamp }) => {
    return (
        <div 
            className={`flex items-start p-4 mb-2 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 self-start bg-gray-700 text-gray-200`}
        >
            <div 
                className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full mr-3"
            >
                <span 
                    className="font-semibold text-lg"
                >
                    {sender[0]}
                </span>
            </div>

            <div 
                className="flex flex-col max-w-[90%]"
            >
                <p 
                    className="font-semibold text-blue-500"
                >
                    {sender}
                </p>

                <p 
                    className="text-gray-200 break-words whitespace-pre-wrap"
                >
                    {text}
                </p>
            </div>

            <div 
                className="ml-3 flex flex-col items-end justify-end"
            >
                <p 
                    className="text-xs text-gray-400 mt-1"
                >
                        {formatDistanceToNow(timestamp, { addSuffix: true })}
                </p>
            </div>
        </div>
    );
};

export default Message;
