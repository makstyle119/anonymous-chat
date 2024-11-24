import React, { MutableRefObject } from 'react'

const Message = (
    { 
        messages, 
        messagesEndRef 
    }: {
        messages: string[], 
        messagesEndRef: MutableRefObject<HTMLDivElement | null>
    }) => {
    return (
        <main 
            className="flex-1 overflow-y-auto pt-24 pb-16 px-6"
        >
            {/* Empty State */}
            {messages.length === 0 ? (
                <div 
                    className="flex justify-center items-center text-center text-gray-500 h-full"
                >
                    <p>
                        Start a conversation!
                    </p>
                </div>
            ) : (
                <div 
                    className="flex flex-col space-y-4"
                >
                {/* Map messages dynamically */}
                {messages.map((msg, idx) => (
                    <div
                        key={idx}
                        className={`flex ${idx % 2 === 0 ? 'self-start bg-gray-700' : 'self-end bg-blue-600 text-white'} p-3 rounded-lg max-w-sm shadow-md`}
                    >
                        <p>
                            {
                                msg
                            }
                        </p>
                    </div>
                ))}
                {/* Add an empty div to act as the scroll target */}
                <div 
                    ref={messagesEndRef} 
                />
                </div>
            )}
        </main>
    )
}

export default Message
