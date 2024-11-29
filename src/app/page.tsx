import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen flex flex-col">

      <div className="flex flex-col items-center justify-center py-16 px-8 flex-grow">
          <h1 className="text-4xl font-bold text-white mb-4">
              Anonymous Chat
          </h1>
          <p className="text-lg text-gray-400 mb-8">
              Quick, Anonymous Chats. Messages Disappear After 15 Minutes.
          </p>
          <Link href="/chat">
              <span className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                  Start Chatting
              </span>
          </Link>
      </div>

      <div className="py-12 px-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Why Choose Anonymous Chat?
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
              <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
                  <h3 className="font-semibold text-lg text-blue-400 mb-2">
                      Anonymous
                  </h3>
                  <p>No sign-ins, no tracking, pure privacy.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
                  <h3 className="font-semibold text-lg text-blue-400 mb-2">
                      Self-Destructing Messages
                  </h3>
                  <p>Messages vanish after 15 minutes.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
                  <h3 className="font-semibold text-lg text-blue-400 mb-2">
                      Easy to Use
                  </h3>
                  <p>Start chatting in seconds without signing up.</p>
              </div>
          </div>
      </div>

      <Footer />
    </div>
  );
}
