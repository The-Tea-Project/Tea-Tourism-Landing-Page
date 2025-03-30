import React from 'react'
import CTABtn from '../components/CTABtn'

function CTA() {
    return (
        <div id="cta" className="w-full bg-[var(light-bg)] py-[100px] relative overflow-hidden">
            {/* Tea-themed background elements */}
            <div className="absolute top-0 left-0 w-full h-full">
                {/* Tea leaf watercolor effect */}
                <svg className="absolute top-0 right-0 w-full h-full opacity-10" viewBox="0 0 200 200" preserveAspectRatio="none">
                    <path d="M150,20 C180,40 190,80 170,110 C150,140 110,150 80,130 C50,110 40,70 60,40 C80,10 120,0 150,20 Z" fill="var(--primary)" />
                    <path d="M50,150 C80,170 120,160 140,130 C160,100 150,60 120,40 C90,20 50,30 30,60 C10,90 20,130 50,150 Z" fill="var(--primary-dark)" opacity="0.7" />
                </svg>
                
                {/* Tea leaf scattered pattern */}
                <img src="/assets/tea-leaves-pattern.svg" alt="" className="absolute top-20 left-20 w-24 h-24 opacity-5 transform rotate-45" />
                <img src="/assets/tea-leaves-pattern.svg" alt="" className="absolute top-40 left-40 w-16 h-16 opacity-5 transform -rotate-30" />
                <img src="/assets/tea-leaves-pattern.svg" alt="" className="absolute bottom-40 right-60 w-24 h-24 opacity-5 transform rotate-15" />
                <img src="/assets/tea-leaves-pattern.svg" alt="" className="absolute bottom-20 right-20 w-20 h-20 opacity-5 transform -rotate-45" />
                
                {/* Steam effect lines */}
                <svg className="absolute top-10 right-1/4 w-20 h-40 opacity-10" viewBox="0 0 50 100">
                    <path d="M25,0 Q35,25 25,50 Q15,75 25,100" fill="none" stroke="var(--primary)" strokeWidth="1" />
                    <path d="M15,10 Q25,35 15,60 Q5,85 15,110" fill="none" stroke="var(--primary)" strokeWidth="1" />
                    <path d="M35,10 Q45,35 35,60 Q25,85 35,110" fill="none" stroke="var(--primary)" strokeWidth="1" />
                </svg>
            </div>
            
            <div className="container mx-auto px-4 relative z-10 ">
                {/* Modern card with tea theme */}
                <div className="max-w-4xl bg-[var(--brown)] mx-auto rounded-xl overflow-hidden shadow-2xl relative">
                    {/* Colored background gradient - tea theme */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-dark)] to-[#1e3a29]"></div>
                    
                    {/* Subtle texture overlay */}
                    <div className="absolute inset-0 opacity-5">
                        <svg width="100%" height="100%">
                            <defs>
                                <pattern id="teaPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <path d="M10,2 C14,6 14,14 10,18 C6,14 6,6 10,2 Z" fill="#f5f7f2" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#teaPattern)" />
                        </svg>
                    </div>
                    
                    {/* Glass effect overlay */}
                    <div className="absolute inset-0 backdrop-blur-sm bg-white/5"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 p-10 md:p-16">
                        <div className="flex flex-col md:flex-row items-center">
                            {/* Left side: Tea cup graphic */}
                            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
                                <div className="relative">
                                    {/* Tea cup SVG */}
                                    <div className="w-32 h-32 bg-[var(--cream)]/20 rounded-full flex items-center justify-center">
                                        <svg className="w-20 h-20 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 8C2 7.44772 2.44772 7 3 7H16C16.5523 7 17 7.44772 17 8V16C17 18.2091 15.2091 20 13 20H6C3.79086 20 2 18.2091 2 16V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M17 10H19C20.1046 10 21 10.8954 21 12V13C21 14.1046 20.1046 15 19 15H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M9 3V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M12 3V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path className="animate-pulse" d="M7 13C8.10457 13 9 12.1046 9 11" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path className="animate-pulse delay-100" d="M11 13C12.1046 13 13 12.1046 13 11" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    
                                    {/* Heat waves animation */}
                                    <svg className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-8" viewBox="0 0 24 12" fill="none">
                                        <path className="animate-pulse" d="M6,12 C8,8 10,10 12,6 C14,2 16,4 18,0" stroke="white" strokeWidth="0.5" strokeDasharray="1,1" opacity="0.5" />
                                        <path className="animate-pulse delay-300" d="M2,12 C4,8 6,10 8,6 C10,2 12,4 14,0" stroke="white" strokeWidth="0.5" strokeDasharray="1,1" opacity="0.5" />
                                        <path className="animate-pulse delay-700" d="M10,12 C12,8 14,10 16,6 C18,2 20,4 22,0" stroke="white" strokeWidth="0.5" strokeDasharray="1,1" opacity="0.5" />
                                    </svg>
                                    
                                    {/* Tea leaves decoration */}
                                    <img src="/assets/tea-leaves-pattern.svg" alt="" className="absolute -bottom-2 -left-4 w-10 h-10 opacity-60 transform rotate-45" />
                                    <img src="/assets/tea-leaves-pattern.svg" alt="" className="absolute -bottom-6 left-4 w-8 h-8 opacity-40 transform -rotate-15" />
                                </div>
                            </div>
                            
                            {/* Right side: text and CTA */}
                            <div className="md:w-2/3 text-center md:text-left md:pl-8">
                                <h2 className="font-satoshi text-3xl md:text-4xl font-bold mb-4 text-white">
                                    Begin Your Tea Adventure
                                </h2>
                                <p className="font-satoshiMed text-[18px] mb-8 text-[var(--cream)] max-w-lg">
                                    Immerse yourself in the serene beauty of tea estates, learn from expert cultivators, and indulge in the finest teas from around the world.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                                    {/* High contrast button to stand out from background */}
                                    <div className="w-full sm:w-auto ">
                                        <CTABtn text="EXPLORE NOW" customClass="bg-[var(--cream)] hover:bg-white text-[var(--primary-dark)] border-0 font-bold shadow-lg" />
                                    </div>
                                    <a href="#courses" className="flex items-center text-white/90 font-satoshi font-bold group hover:text-white transition-colors">
                                        <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center mr-3 group-hover:bg-white/10 transition-all">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                        View Courses
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Trust indicators with tea-themed styling */}
                <div className="max-w-4xl mx-auto mt-10 flex flex-wrap justify-center items-center gap-8">
                    <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border-l-4 border-[var(--primary)]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="ml-2 text-sm font-medium text-[var(--text-dark)]">Trusted by 5000+ Travelers</span>
                    </div>
                    <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border-l-4 border-[var(--primary)]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="ml-2 text-sm font-medium text-[var(--text-dark)]">100% Satisfaction Guarantee</span>
                    </div>
                    <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border-l-4 border-[var(--primary)]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="ml-2 text-sm font-medium text-[var(--text-dark)]">Book Now, Pay Later</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTA