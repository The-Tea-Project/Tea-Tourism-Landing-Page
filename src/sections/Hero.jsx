import { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import CTABtn from '../components/CTABtn'
import "../App.css"

function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        {
            id: 1,
            image: "https://plus.unsplash.com/premium_photo-1692049123825-8d43174c9c5c?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Discover Tea Gardens",
            description: "Immerse yourself in lush tea estates and explore the art of tea cultivation"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1587834323138-befbf2c33797?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Experience Tea Culture",
            description: "Learn about traditional tea ceremonies and connect with local tea communities"
        },
        {
            id: 3,
            image: "https://plus.unsplash.com/premium_photo-1731696604013-52ccf4c49bd9?q=80&w=2607&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Taste Authentic Flavors",
            description: "Sample the finest teas directly from their source and discover unique blends"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
        
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <>
            <div id='home' className="w-full flex flex-col items-center pb-[110px] lg:py-[32px] py-[12px] overflow-hidden space-y-[80px] min-h-screen relative">
                <NavBar />

                {/* Decorative elements */}
                <div className="absolute top-[25%] right-[5%] w-24 h-24 rounded-full bg-[var(--accent)] opacity-20 blur-xl"></div>
                <div className="absolute bottom-[15%] left-[10%] w-32 h-32 rounded-full bg-[var(--primary-light)] opacity-20 blur-xl"></div>
                <div className="absolute top-[15%] left-[15%] w-16 h-16 rounded-full bg-[var(--primary)] opacity-10 blur-lg"></div>
                
                <div className="absolute top-40 right-20 hidden lg:block">
                    {/* Custom Tea Leaf SVG - replaces the missing image */}
                    <svg className="w-24 h-24 opacity-20 rotate-45" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Main leaf shape */}
                        <path d="M50,10 C75,20 85,50 75,80 C65,95 40,95 30,80 C15,60 25,30 50,10 Z" 
                              fill="var(--primary)" />
                        
                        {/* Leaf veins */}
                        <path d="M50,10 C50,40 50,70 50,90" 
                              stroke="var(--primary-dark)" strokeWidth="1" />
                        <path d="M50,30 C60,40 60,50 50,60" 
                              stroke="var(--primary-dark)" strokeWidth="1" />
                        <path d="M50,30 C40,40 40,50 50,60" 
                              stroke="var(--primary-dark)" strokeWidth="1" />
                        <path d="M50,60 C60,70 60,80 50,90" 
                              stroke="var(--primary-dark)" strokeWidth="1" />
                        <path d="M50,60 C40,70 40,80 50,90" 
                              stroke="var(--primary-dark)" strokeWidth="1" />
                              
                        {/* Leaf texture */}
                        <path d="M37,30 C43,35 47,35 53,30" 
                              stroke="var(--primary-dark)" strokeWidth="0.5" strokeLinecap="round" />
                        <path d="M35,45 C43,50 47,50 55,45" 
                              stroke="var(--primary-dark)" strokeWidth="0.5" strokeLinecap="round" />
                        <path d="M33,60 C43,65 47,65 57,60" 
                              stroke="var(--primary-dark)" strokeWidth="0.5" strokeLinecap="round" />
                        <path d="M35,75 C43,80 47,80 55,75" 
                              stroke="var(--primary-dark)" strokeWidth="0.5" strokeLinecap="round" />
                    </svg>
                </div>
                <div className="absolute bottom-20 left-10 hidden lg:block">
                    {/* Improved Custom Tea Cup SVG */}
                    <svg className="w-20 h-20 opacity-15" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Improved saucer with gradient */}
                        <ellipse cx="50" cy="82" rx="40" ry="8" fill="url(#saucerGradient)" />
                        <ellipse cx="50" cy="81" rx="30" ry="4" fill="#FFFFFF" fillOpacity="0.2" />
                        
                        {/* Cup body with gradient */}
                        <path d="M30 70C30 55 35 42 50 42C65 42 70 55 70 70" fill="url(#cupGradient)" />
                        <path d="M30 70H70" stroke="var(--primary-dark)" strokeWidth="1" />
                        
                        {/* Cup rim with shine */}
                        <ellipse cx="50" cy="42" rx="20" ry="5" fill="var(--primary-light)" />
                        <ellipse cx="50" cy="42" rx="18" ry="4" fill="var(--primary)" />
                        <path d="M35 40C40 38 45 37 50 37C55 37 60 38 65 40" stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.6" />
                        
                        {/* Tea liquid surface with ripple */}
                        <ellipse cx="50" cy="48" rx="17" ry="3.5" fill="var(--primary-dark)" />
                        <path d="M40 48C42 47 47 46 50 46C53 46 58 47 60 48" 
                              stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.3" />
                        
                        {/* Handle with gradient */}
                        <path d="M70 60C78 60 83 55 83 50C83 45 78 40 70 40" 
                              stroke="var(--primary-dark)" strokeWidth="2" fill="none" />
                        <path d="M70 58C76 58 80 54 80 50C80 46 76 42 70 42" 
                              stroke="var(--primary-light)" strokeWidth="0.5" fill="none" />
                        
                        {/* Tea leaves in cup */}
                        <path d="M45 54C46 51 49 52 50 54C51 56 48 58 45 54Z" fill="var(--primary-dark)" />
                        <path d="M53 56C55 54 58 55 58 57C58 59 55 60 53 56Z" fill="var(--primary-dark)" />
                        
                        {/* Steam with animation */}
                        <path d="M40 38C40 33 35 30 40 25" 
                              stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.6" strokeLinecap="round" 
                              strokeDasharray="1,2" className="animate-pulse" />
                        <path d="M50 38C50 28 45 25 50 20" 
                              stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.6" strokeLinecap="round" 
                              strokeDasharray="1,2" className="animate-pulse delay-150" />
                        <path d="M60 38C60 33 65 30 60 25" 
                              stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.6" strokeLinecap="round" 
                              strokeDasharray="1,2" className="animate-pulse delay-300" />
                              
                        {/* Definitions for gradients */}
                        <defs>
                            <linearGradient id="cupGradient" x1="30" y1="42" x2="70" y2="70" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stopColor="var(--primary)" />
                                <stop offset="1" stopColor="var(--primary-dark)" />
                            </linearGradient>
                            <linearGradient id="saucerGradient" x1="20" y1="80" x2="80" y2="85" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stopColor="var(--primary-light)" />
                                <stop offset="1" stopColor="var(--primary)" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="text-center self-center justify-self-center my-auto z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 px-4 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="font-satoshi lg:text-[56px] text-[40px] lg:leading-[67px] leading-[48px] font-bold text-[var(--text-dark)]">
                            Welcome to <span className='text-[var(--primary)]'>Tea Tourism</span>
                        </div>
                        <div className="font-satoshiMed lg:text-[20px] text-[16px] lg:leading-[30px] font-normal pt-[24px] text-[var(--text-dark)]">
                            Step into a world where you can secure one-of-a-kind accommodations nestled near verdant tea estates, enjoy charming boutique hotels rich in local character, and take advantage of hassle-free travel arrangements that bring you closer to nature.
                        </div>
                        <div className="mt-[32px]">
                            <CTABtn text="Get Started" />
                            <div className="font-satoshiMed text-[16px] mt-4 text-[var(--text-dark)]">
                                Plan your next adventure in the heart of tea country!
                            </div>
                        </div>
                    </div>

                    {/* Image slider */}
                    <div className="order-1 lg:order-2 relative h-[400px] overflow-hidden rounded-xl shadow-lg">
                        {slides.map((slide, index) => (
                            <div 
                                key={slide.id}
                                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <img 
                                    src={slide.image} 
                                    alt={slide.title} 
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-6 text-white">
                                    <h3 className="text-2xl font-bold">{slide.title}</h3>
                                    <p className="text-white/90">{slide.description}</p>
                                </div>
                            </div>
                        ))}

                        {/* Slide indicators */}
                        <div className="absolute bottom-4 right-4 flex space-x-2">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'bg-white w-6' : 'bg-white/50'}`}
                                ></button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="bg-[var(--light-bg)] -z-20 w-full absolute pb-[110px] top-0 left-0 min-h-screen">
                <div className="absolute inset-0 bg-[url('/assets/tea-pattern.svg')] opacity-5 -z-10"></div>
            </div>
        </>
    )
}

export default Hero
