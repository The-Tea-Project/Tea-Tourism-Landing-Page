import React, { useState } from 'react'
import CTABtn from '../components/CTABtn'

function Features() {
    const [activeProduct, setActiveProduct] = useState(0);
    
    const products = [
        {
            id: 1,
            title: "Tea & Beverages",
            description: "Discover premium, locally sourced teas from the region's finest estates.",
            image: "https://plus.unsplash.com/premium_photo-1732393280688-8e5858809c0c?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            details: "Our collection features single-estate teas, rare seasonal harvests, and signature blends exclusive to the regions you'll visit. Each tea is ethically sourced and packaged to preserve its exceptional flavor profile."
        },
        {
            id: 2,
            title: "Handicrafts & Art",
            description: "Explore unique handcrafted items created by skilled local artisans.",
            image: "https://images.unsplash.com/photo-1734600891263-1d56b397c5af?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            details: "From intricately woven bamboo baskets to hand-painted tea accessories, these authentic crafts reflect generations of traditional techniques and cultural heritage from tea-growing communities."
        },
        {
            id: 3,
            title: "Culinary Delights",
            description: "Sample regional delicacies and tea-infused culinary creations.",
            image: "https://plus.unsplash.com/premium_photo-1695297516740-6f9ceff51404?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            details: "Discover delicious tea-infused chocolates, cookies, and preserves made with local ingredients. Our culinary products showcase innovative ways to incorporate tea into everyday cooking and special treats."
        }
    ];
    
    return (
        <div id="products" className="w-full bg-white py-[120px] relative overflow-hidden">
            {/* Enhanced decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[var(--cream)] opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[var(--cream)] opacity-30 blur-3xl"></div>
            <div className="absolute top-40 left-20 w-24 h-24 rounded-full border-4 border-[var(--primary-light)] border-opacity-10 hidden lg:block"></div>
            <div className="absolute bottom-40 right-20 w-32 h-32 rounded-full border-4 border-[var(--primary-light)] border-opacity-10 hidden lg:block"></div>
            
            <img src="/assets/tea-leaves-pattern.svg" alt="Tea Leaves" className="absolute left-0 top-40 w-48 opacity-10 hidden lg:block transform rotate-45" />
            <img src="/assets/tea-leaves-pattern.svg" alt="Tea Leaves" className="absolute right-0 bottom-40 w-32 opacity-10 hidden lg:block transform -rotate-12" />
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded-full bg-[var(--primary-light)] bg-opacity-20 text-[var(--primary)] text-sm font-medium mb-4">LOCAL MARKETPLACE</span>
                    <h2 className="font-satoshi text-[40px] lg:text-[56px] font-bold mb-6 text-[var(--text-dark)]">Authentic Products</h2>
                    <div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-6 rounded-full"></div>
                    <p className="font-satoshiMed text-[18px] text-[var(--text-dark)] opacity-90">
                        Discover and purchase unique products from the tea-growing regions, supporting local communities and taking home authentic mementos of your journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto relative">
                    {/* Connecting line */}
                    <div className="absolute top-1/3 left-0 w-full h-0.5 bg-[var(--primary-light)] bg-opacity-10 hidden md:block"></div>
                    
                    {products.map((product, index) => (
                        <div 
                            key={product.id} 
                            className={`relative ${index === 1 ? 'md:mt-10' : ''}`}
                            onMouseEnter={() => setActiveProduct(index)}
                        >
                            <div className={`tea-card bg-white overflow-hidden h-full rounded-2xl shadow-lg transition-all duration-500 ${activeProduct === index ? 'transform -translate-y-3 shadow-xl' : ''}`}>
                                <div className="relative h-50 overflow-hidden">
                                    <img 
                                        src={product.image} 
                                        alt={product.title} 
                                        className="w-full h-96 object-cover transition duration-700 hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 right-6 flex items-center">
                                        <div className="w-12 h-12 mr-4 rounded-full bg-[var(--primary)] bg-opacity-80 backdrop-blur-sm flex items-center justify-center shadow-lg">
                                            {index === 0 ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            ) : index === 1 ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                                                </svg>
                                            )}
                                        </div>
                                        <h3 className="font-satoshi text-[26px] font-bold text-white">{product.title}</h3>
                                    </div>
                                </div>
                                
                                <div className="p-8">
                                    {/* Regular description - always visible */}
                                    <p className="font-satoshiMed text-[16px] text-[var(--text-dark)] mb-4">
                                        {product.description}
                                    </p>
                                    
                                    {/* Details - always visible */}
                                    <div className="mb-6">
                                        <div className="w-16 h-0.5 bg-[var(--primary-light)] mb-4"></div>
                                        <p className="font-satoshiMed text-[16px] leading-relaxed text-[var(--text-dark)]">
                                            {product.details}
                                        </p>
                                    </div>
                                    
                                    {/* Button - always visible with hover effect */}
                                    <a href="#" className={`inline-flex items-center px-5 py-2.5 rounded-full border-2 border-[var(--primary)] text-[var(--primary)] font-satoshi font-bold hover:bg-[var(--primary)] hover:text-white transition-colors group ${activeProduct === index ? 'bg-[var(--primary-light)] bg-opacity-10' : ''}`}>
                                        View Collection
                                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-2 transition-transform duration-300 ${activeProduct === index ? 'translate-x-1' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            
                            {/* Enhanced hover indicators */}
                            <div className="flex justify-center mt-5">
                                {products.map((_, i) => (
                                    <div 
                                        key={i} 
                                        className={`mx-1 transition-all duration-300 ${
                                            i === index && activeProduct === index
                                                ? 'w-8 h-2 bg-[var(--primary)] rounded-full' 
                                                : 'w-2 h-2 rounded-full bg-[var(--primary-light)] bg-opacity-40'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Added CTA section */}
                <div className="mt-24 text-center">
                    <h3 className="font-satoshi text-[24px] font-bold text-[var(--text-dark)] mb-4">Ready to explore our collection?</h3>
                    <p className="font-satoshiMed text-[16px] text-[var(--text-dark)]/80 max-w-xl mx-auto mb-6">
                        Browse our full catalog featuring exquisitely crafted products from Assam , West Bengal and Sikkim.
                    </p>
                    <CTABtn text="Browse All Products" link="#products-catalog" />
                </div>
            </div>
        </div>
    )
}

export default Features