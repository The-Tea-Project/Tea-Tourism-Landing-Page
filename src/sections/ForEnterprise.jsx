import React from 'react'
import CTABtn from '../components/CTABtn'

function ForEnterprise() {
    const courses = [
        {
            id: 1,
            title: "Tea Cultivation 101",
            description: "Get introduced to the fundamentals of tea farming—from preparing the soil and planting to adopting sustainable practices that align with modern smart farming.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            color: "from-green-600 to-emerald-500"
        },
        {
            id: 2,
            title: "Processing & Production",
            description: "Dive into the craft of tea production, learning everything from leaf plucking to perfecting fermentation and drying techniques.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            ),
            color: "from-teal-600 to-green-500"
        },
        {
            id: 3,
            title: "Digital Innovations in Agriculture",
            description: "See how cutting-edge technology like real-time imagery and precision sensors is transforming tea production through virtual support.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            color: "from-emerald-600 to-teal-500"
        },
        {
            id: 4,
            title: "Cultural and Culinary Connections",
            description: "Experience local culinary delights and understand the broader impact of tea on local communities.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
            ),
            color: "from-green-700 to-emerald-600"
        }
    ];

    return (
        <div id="courses" className="w-full bg-[var(--cream)] py-[100px] relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-white to-transparent opacity-70"></div>
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[var(--primary)] opacity-5 blur-3xl"></div>
            <div className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-[var(--primary-light)] opacity-10 blur-3xl"></div>
            
            <img src="/assets/tea-leaves-pattern.svg" alt="Tea Leaves" className="absolute left-0 top-40 w-48 opacity-10 hidden lg:block transform rotate-45" />
            <img src="/assets/tea-leaves-pattern.svg" alt="Tea Leaves" className="absolute right-0 bottom-80 w-32 opacity-10 hidden lg:block transform -rotate-12" />
            
            {/* 3D illustration elements */}
            <div className="absolute top-20 right-10 w-24 h-24 rounded-full border-4 border-[var(--primary-light)] border-opacity-20 hidden lg:block"></div>
            <div className="absolute bottom-40 left-20 w-16 h-16 rounded-full border-4 border-dashed border-[var(--primary-light)] border-opacity-30 hidden lg:block"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded-full bg-[var(--primary-light)] bg-opacity-20 text-[var(--primary)] text-sm font-medium mb-4">EXPERT EDUCATION</span>
                    <h2 className="font-satoshi text-[40px] lg:text-[56px] font-bold mb-6 text-[var(--text-dark)]">Tea Education</h2>
                    <div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-6 rounded-full"></div>
                    <p className="font-satoshiMed text-[18px] text-[var(--text-dark)] opacity-90">
                        Immerse yourself in our engaging courses that cover every aspect of tea farming, processing, and the rich cultural heritage that surrounds this ancient beverage.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {courses.map((course, index) => (
                        <div key={course.id} className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-light)] to-[var(--primary)] opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>
                            
                            <div className="tea-card bg-white rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-100">
                                <div className="flex h-full">
                                    {/* Course icon column */}
                                    <div className="w-1/4 bg-gradient-to-b bg-opacity-90 flex flex-col items-center pt-8 relative overflow-hidden">
                                        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${course.color} flex items-center justify-center shadow-lg`}>
                                            {course.icon}
                                        </div>
                                        
                                        {/* Decorative pattern */}
                                        <div className="absolute inset-0 z-0 opacity-10">
                                            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-40 h-40">
                                                <img src="/assets/tea-leaves-pattern.svg" alt="" className="w-full h-full object-contain opacity-20" />
                                            </div>
                                        </div>
                                        
                                        {/* Line connectors */}
                                        <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[var(--primary-light)] to-transparent opacity-20"></div>
                                    </div>
                                    
                                    {/* Course content */}
                                    <div className="w-3/4 p-8">
                                        <div className="flex items-center mb-3">
                                            <h3 className="font-satoshi text-[24px] font-bold text-[var(--text-dark)] group-hover:text-[var(--primary)] transition-colors">
                                                {course.title}
                                            </h3>
                                            <div className="ml-3 flex items-center">
                                                <span className="text-xs font-medium bg-[var(--primary-light)] bg-opacity-10 text-[var(--primary)] px-2 py-1 rounded-full">
                                                    {index === 0 ? "Beginner" : index === 1 ? "Intermediate" : index === 2 ? "Advanced" : "All Levels"}
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <p className="font-satoshiMed text-[16px] mb-5 text-[var(--text-dark)] opacity-90">
                                            {course.description}
                                        </p>
                                        
                                        <div className="mt-auto flex justify-between items-center">
                                            <a href="#" className="flex items-center text-[var(--primary)] font-satoshi font-bold hover:underline group-hover:translate-x-1 transition-transform">
                                                Learn more
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:ml-2 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </a>
                                            
                                            <div className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span className="ml-1 text-sm text-[var(--text-dark)] opacity-70">
                                                    {index === 0 ? "4 weeks" : index === 1 ? "6 weeks" : index === 2 ? "8 weeks" : "5 weeks"}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Certificate highlight */}
                <div className="mt-20 bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-5xl mx-auto overflow-hidden relative">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--primary-light)] opacity-10 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[var(--primary)] opacity-5 rounded-full blur-2xl"></div>
                    
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-10">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[var(--primary)] opacity-20 blur-xl rounded-lg transform -rotate-3"></div>
                                <img src="/assets/tea-products.jpg" alt="Tea Certificate" className="relative rounded-lg shadow-lg object-cover h-64 w-full" />
                                <div className="absolute top-4 left-4 bg-[var(--primary)] text-white text-xs font-bold py-1 px-3 rounded-full shadow-lg">
                                    CERTIFIED
                                </div>
                            </div>
                        </div>
                        
                        <div className="md:w-1/2">
                            <h3 className="font-satoshi text-2xl md:text-3xl font-bold mb-4 text-[var(--text-dark)]">
                                Become a Certified Tea Expert
                            </h3>
                            <p className="font-satoshiMed text-[16px] mb-6 text-[var(--text-dark)] opacity-90">
                                Complete our comprehensive courses and receive a professional certification recognized by leading tea producers and tourism organizations worldwide.
                            </p>
                            <div className="flex flex-wrap gap-3 mb-6">
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--primary-light)] bg-opacity-10 text-[var(--primary)] text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Industry Recognized
                                </span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--primary-light)] bg-opacity-10 text-[var(--primary)] text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Expert Instructors
                                </span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--primary-light)] bg-opacity-10 text-[var(--primary)] text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Lifetime Access
                                </span>
                            </div>
                            <CTABtn text="Browse All Courses" link="#all-courses" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForEnterprise