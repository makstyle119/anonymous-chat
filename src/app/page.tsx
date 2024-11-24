'use client'
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Message from '@/components/Message';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([
    'Hey there! How are you doing?',
    'I am doing well, thanks! How about you?',
    'I’m doing great, working on a project. Need any help?',
    'That sounds awesome! What kind of project is it?',
    'It’s a web app for real-time chat. Still in the early stages.',
  ]);

  // Reference to the messages container
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, message]);
      setMessage('');
    }
  };

  // Scroll to the bottom whenever messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div 
      className="min-h-screen bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText flex flex-col"
    >
      <Header />

      <Message 
        messages={messages} 
        messagesEndRef={messagesEndRef}
      /> 

      <Footer
        message={message}
        handleMessageChange={handleMessageChange}
        handleSendMessage={handleSendMessage}
      />
    </div>
  );
}
