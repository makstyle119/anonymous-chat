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
            className="flex items-start p-4 mb-2 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 self-start"
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
                className="flex flex-col flex-1 max-w-[100%]"
            >
                <div 
                    className="flex justify-between items-center mb-1"
                >
                    <p 
                        className="font-semibold text-blue-400"
                    >
                        {sender}
                    </p>
                    <p  
                        className="text-xs text-gray-400"
                    >
                        {formatDistanceToNow(timestamp, { addSuffix: true })}
                    </p>
                </div>
                <p 
                    className="text-gray-300 break-words whitespace-pre-wrap"
                >
                    {text}
                </p>
            </div>
        </div>
    );
};

export default Message;
