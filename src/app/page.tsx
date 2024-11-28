'use client'
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MessagesList from '@/components/MessageList';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <div 
      className="h-screen bg-gray-900 flex flex-col justify-between"
    >
      <Header />

      <MessagesList /> 
        <SpeedInsights />
        <Analytics />
      <Footer />
    </div>
  );
}
