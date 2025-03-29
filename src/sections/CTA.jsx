import React from 'react'
import CTABtn from '../components/CTABtn'

function CTA() {
    return (
        <div id="cta" className="w-full bg-[var(--cream)] py-[100px] relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[var(--primary)] opacity-20 blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-[var(--primary-light)] opacity-30 blur-3xl"></div>
                <img src="/assets/tea-leaves-pattern.svg" alt="" className="absolute top-1/4 right-1/4 w-48 h-48 opacity-10 transform rotate-45" />
                <img src="/assets/tea-leaves-pattern.svg" alt="" className="absolute bottom-1/4 left-1/4 w-40 h-40 opacity-10 transform -rotate-12" />
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                {/* Glass morphism card */}
                <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl relative">
                    {/* Colored background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)]"></div>
                    
                    {/* Glass overlay */}
                    <div className="absolute inset-0 backdrop-blur-sm bg-white/10"></div>
                    
                    {/* Pattern overlay */}
                    <div className="absolute inset-0 bg-[url('/assets/tea-leaves-pattern.svg')] bg-no-repeat bg-cover opacity-5"></div>
                    
                    {/* Highlight edges */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
                    <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 p-12 md:p-16">
                        <div className="flex flex-col md:flex-row items-center">
                            {/* Left side: icons and graphics */}
                            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center relative">
                                <div className="relative">
                                    {/* Decorative tea cup icon with glow */}
                                    <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                                            <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                                            <line x1="6" y1="2" x2="6" y2="4" />
                                            <line x1="10" y1="2" x2="10" y2="4" />
                                            <line x1="14" y1="2" x2="14" y2="4" />
                                        </svg>
                                        <div className="absolute inset-0 rounded-full bg-white/5 animate-pulse"></div>
                                    </div>
                                    
                                    {/* Floating dots and lines */}
                                    <div className="absolute -top-4 -left-4 w-4 h-4 rounded-full bg-white/20"></div>
                                    <div className="absolute top-12 -right-6 w-3 h-3 rounded-full bg-white/20"></div>
                                    <div className="absolute -bottom-2 left-3 w-2 h-2 rounded-full bg-white/30"></div>
                                    <div className="absolute top-1/2 -left-12 w-12 h-px bg-gradient-to-r from-white/0 to-white/30"></div>
                                    <div className="absolute top-1/4 -right-8 w-8 h-px bg-gradient-to-l from-white/0 to-white/20"></div>
                                </div>
                            </div>
                            
                            {/* Right side: text and CTA */}
                            <div className="md:w-2/3 text-center md:text-left md:pl-8">
                                <h2 className="font-satoshi text-3xl md:text-4xl font-bold mb-4 text-white">
                                    Begin Your Tea Adventure
                                </h2>
                                <p className="font-satoshiMed text-[18px] mb-8 text-white/90 max-w-lg">
                                    Immerse yourself in the serene beauty of tea estates, learn from expert cultivators, and indulge in the finest teas from around the world.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                                    <CTABtn text="EXPLORE NOW" />
                                    <a href="#courses" className="flex items-center text-white/90 font-satoshi font-bold group hover:text-white transition-colors">
                                        <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center mr-3 group-hover:border-white/50 transition-all">
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
                
                {/* Trust indicators */}
                <div className="max-w-4xl mx-auto mt-10 flex flex-wrap justify-center items-center gap-8">
                    <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="ml-2 text-sm font-medium text-[var(--text-dark)]">Trusted by 5000+ Travelers</span>
                    </div>
                    <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="ml-2 text-sm font-medium text-[var(--text-dark)]">100% Satisfaction Guarantee</span>
                    </div>
                    <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
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