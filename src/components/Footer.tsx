import React from 'react'

const Footer = (
    { 
        message, 
        handleMessageChange, 
        handleSendMessage 
    }: 
    { 
        message: string, 
        handleMessageChange(e: React.ChangeEvent<HTMLInputElement>): void, 
        handleSendMessage(): void
    }) => {
    return (
        <footer 
            className="p-4 bg-gray-800 flex items-center space-x-4 shadow-inner fixed bottom-0 left-0 w-full"
        >
            <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={handleMessageChange}
                onKeyUp={(e) => e.key === 'Enter' && handleSendMessage()}
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
