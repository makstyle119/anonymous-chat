import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <div 
            className="bg-gray-800 text-white min-h-screen flex flex-col"
        >
            <Header />

            <main 
                className="pt-24 flex-grow"
            >
                <section 
                    className="max-w-7xl mx-auto py-10 px-6"
                >

                    <div 
                        className="grid md:grid-cols-2 gap-12"
                    >
                        <div 
                            className="flex flex-col items-center text-center bg-gray-700 p-6 rounded-lg shadow-md"
                        >
                            <h2 
                                className="text-4xl font-semibold text-blue-500 mb-6"
                            >
                                Our Mission
                            </h2>
                            <p 
                                className="text-lg text-gray-300 mb-6"
                            >
                                At MAK Writing House, we believe in sharing the latest and most insightful tech news. Our goal is to provide a safe, transparent platform where users can stay informed about the rapidly evolving world of technology.
                            </p>
                        </div>

                        <div 
                            className="flex flex-col items-center text-center bg-gray-700 p-6 rounded-lg shadow-md"
                        >
                            <h2 
                                className="text-4xl font-semibold text-blue-500 mb-6"
                            >
                                Our Values
                            </h2>
                            <p 
                                className="text-lg text-gray-300 mb-6"
                            >
                                Integrity, transparency, and innovation are the core values that drive our work. We are committed to providing quality content that is honest and reliable, helping our readers stay ahead in the tech world.
                            </p>
                        </div>
                    </div>

                    <div 
                        className="mt-10 text-center bg-gray-700 p-6 rounded-lg shadow-md"
                    >
                        <h2 
                            className="text-3xl font-semibold text-blue-500 mb-6"
                        >
                            Founder of MAK Writing House
                        </h2>
                        <p 
                            className="text-lg text-gray-300 mb-6"
                        >
                            <b>Mohammad Moiz Ali</b> is the founder and developer behind MAK Writing House. Moiz is passionate about building clean, user-friendly platforms and keeping the tech community informed with the latest news. You can learn more about his work through his <Link href="https://www.linkedin.com/in/makstyle119/"><span className="text-blue-400">LinkedIn</span></Link> profile.
                        </p>
                        <p 
                            className="text-lg text-gray-300 mb-4"
                        >
                                Reach out to us via email at <Link href="mailto:support@makwritinghouse.com"><span className="text-blue-400">support@makwritinghouse.com</span></Link>.
                        </p>
                    </div>

                </section>
            </main>

            <Footer />
        </div>
    )
}

export default About
