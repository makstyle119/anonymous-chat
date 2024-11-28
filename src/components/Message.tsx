// "use client";
import React from "react";
import { formatDistanceToNow } from "date-fns"; // Install date-fns for time formatting

interface MessageProps {
  sender: string;
  text: string;
  timestamp: Date;
}

const Message: React.FC<MessageProps> = ({ sender, text, timestamp }) => {
    return (
    <div 
        className={`flex justify-between items-start p-4 mb-2 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 self-start`}
    >
        <div className="flex flex-col max-w-[50%]">
            <p 
                className="font-semibold text-blue-600"
            >
                {sender}
            </p>
            <p 
                className="text-gray-700 break-words whitespace-pre-wrap"
            >
                {text}
            </p>
        </div>
        <p 
            className="text-xs text-gray-500 self-end mt-1"
        >
            {formatDistanceToNow(timestamp, { addSuffix: true })}
        </p>
    </div>
    );
};

export default Message;
