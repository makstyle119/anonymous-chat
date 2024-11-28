'use client'
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MessagesList from '@/components/MessageList';

export default function Home() {
  return (
    <div 
      className="min-h-screen bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText flex flex-col sm:flex-row"
    >
      <Header />

      <MessagesList /> 

      <Footer />
    </div>
  );
}
