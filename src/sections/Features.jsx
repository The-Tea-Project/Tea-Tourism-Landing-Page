import React, { useState } from 'react'

function Features() {
    const [activeProduct, setActiveProduct] = useState(0);
    
    const products = [
        {
            id: 1,
            title: "Tea & Beverages",
            description: "Discover premium, locally sourced teas from the region's finest estates.",
            image: "/assets/tea-products.jpg",
            details: "Our collection features single-estate teas, rare seasonal harvests, and signature blends exclusive to the regions you'll visit. Each tea is ethically sourced and packaged to preserve its exceptional flavor profile."
        },
        {
            id: 2,
            title: "Handicrafts & Art",
            description: "Explore unique handcrafted items created by skilled local artisans.",
            image: "/assets/handicrafts.jpg",
            details: "From intricately woven bamboo baskets to hand-painted tea accessories, these authentic crafts reflect generations of traditional techniques and cultural heritage from tea-growing communities."
        },
        {
            id: 3,
            title: "Culinary Delights",
            description: "Sample regional delicacies and tea-infused culinary creations.",
            image: "/assets/culinary.jpg",
            details: "Discover delicious tea-infused chocolates, cookies, and preserves made with local ingredients. Our culinary products showcase innovative ways to incorporate tea into everyday cooking and special treats."
        }
    ];
    
    return (
        <div id="products" className="w-full bg-white py-[100px] relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[var(--cream)] opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[var(--cream)] opacity-30 blur-3xl"></div>
            
            <img src="/assets/tea-leaves-pattern.svg" alt="Tea Leaves" className="absolute left-0 top-40 w-48 opacity-10 hidden lg:block transform rotate-45" />
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded-full bg-[var(--primary-light)] bg-opacity-20 text-[var(--primary)] text-sm font-medium mb-4">LOCAL MARKETPLACE</span>
                    <h2 className="font-satoshi text-[40px] lg:text-[56px] font-bold mb-6 text-[var(--text-dark)]">Authentic Products</h2>
                    <div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-6 rounded-full"></div>
                    <p className="font-satoshiMed text-[18px] text-[var(--text-dark)] opacity-90">
                        Discover and purchase unique products from the tea-growing regions, supporting local communities and taking home authentic mementos of your journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto relative">
                    {products.map((product, index) => (
                        <div 
                            key={product.id} 
                            className="relative"
                            onMouseEnter={() => setActiveProduct(index)}
                        >
                            <div className={`tea-card bg-white overflow-hidden h-full shadow-lg transition-all duration-500 ${activeProduct === index ? 'transform -translate-y-2' : ''}`}>
                                <div className="relative h-64 overflow-hidden">
                                    <img 
                                        src={product.image} 
                                        alt={product.title} 
                                        className="w-full h-full object-cover transition duration-700 hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <h3 className="font-satoshi text-[24px] font-bold text-white">{product.title}</h3>
                                        <p className="font-satoshiMed text-[16px] text-white/80 mt-2">
                                            {product.description}
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="p-6">
                                    <div className={`transition-all duration-500 ${activeProduct === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                                        <p className="font-satoshiMed text-[16px] text-[var(--text-dark)] mb-4">
                                            {product.details}
                                        </p>
                                        <a href="#" className="text-[var(--primary)] font-satoshi font-bold hover:underline flex items-center group">
                                            View Collection
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Hover indicators */}
                            <div className="flex justify-center mt-4">
                                {products.map((_, i) => (
                                    <div 
                                        key={i} 
                                        className={`w-2 h-2 rounded-full mx-1 ${
                                            i === index 
                                                ? activeProduct === index 
                                                    ? 'bg-[var(--primary)]' 
                                                    : 'bg-[var(--primary-light)]' 
                                                : 'bg-[var(--primary-light)] bg-opacity-30'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features