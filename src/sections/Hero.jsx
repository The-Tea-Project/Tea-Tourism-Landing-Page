import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import CTABtn from '../components/CTABtn'
import "../App.css"

function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        {
            id: 1,
            image: "/assets/hero-slide-1.jpg",
            title: "Discover Tea Gardens",
            description: "Immerse yourself in lush tea estates and explore the art of tea cultivation"
        },
        {
            id: 2,
            image: "/assets/hero-slide-2.jpg",
            title: "Experience Tea Culture",
            description: "Learn about traditional tea ceremonies and connect with local tea communities"
        },
        {
            id: 3,
            image: "/assets/hero-slide-3.jpg",
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
                    <img src="/assets/tea-leaf.svg" alt="Tea Leaf" className="w-24 h-24 opacity-20 rotate-45" />
                </div>
                <div className="absolute bottom-20 left-10 hidden lg:block">
                    <img src="/assets/tea-cup.svg" alt="Tea Cup" className="w-20 h-20 opacity-15" />
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
