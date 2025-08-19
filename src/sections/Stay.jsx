import React, { useState, useEffect } from 'react'
import CTABtn from '../components/CTABtn'

function Stay() {
    const [accommodations, setAccommodations] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');
    const [activeAccommodation, setActiveAccommodation] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Filters based on API categories
    const filters = ['All', 'Homestays', 'Eco Lodges', 'Heritage', 'Luxury', 'SAD'];

    useEffect(() => {
        const fetchAccommodations = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://theteaprojbackend.vercel.app/api/accomodations');
                if (!response) throw new Error('Failed to fetch accommodations');

                const data = await response.json();
                console.log('Fetched accommodations:', data);
                // Map API fields to UI fields
                const mapped = data.map(acc => ({
                    id: acc._id,
                    title: acc.title,
                    type: acc.category,
                    priceRange: acc.priceRange,
                    rating: acc.rating,
                    reviewCount: acc.reviews,
                    description: acc.description,
                    location: acc.location,
                    image: acc.imageUrl,
                    amenities: acc.tags || [],
                    features: acc.uniqueFeatures || [],
                    whatsapp: acc.whatsapp,
                    brochureUrl: acc.brochureUrl,
                }));
                setAccommodations(mapped);
                console.log('Mapped accommodations:', mapped);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchAccommodations();
    }, []);

    const filteredAccommodations = activeFilter === 'All'
        ? accommodations
        : accommodations.filter(acc => acc.type === activeFilter);
    
    return (
        <div id="accommodations" className="w-full bg-[var(--light-bg)] to-[#f7f9fc] py-[100px] relative overflow-hidden">
            {/* Unique architectural elements */}
            <svg className="absolute top-0 left-0 w-full h-96 opacity-15" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,224C672,235,768,213,864,192C960,171,1056,149,1152,149.3C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" 
                    fill="var(--primary-light)" opacity="0.2"></path>
            </svg>
            
            {/* Architectural window pattern */}
            <div className="absolute top-40 right-10 w-72 h-96 opacity-5 hidden lg:block">
                <svg viewBox="0 0 100 120" className="w-full h-full">
                    <rect x="10" y="10" width="80" height="100" rx="40" fill="none" stroke="var(--primary-dark)" strokeWidth="2" />
                    <rect x="20" y="20" width="60" height="40" rx="20" fill="none" stroke="var(--primary-dark)" strokeWidth="1" />
                    <rect x="20" y="70" width="60" height="30" rx="15" fill="none" stroke="var(--primary-dark)" strokeWidth="1" />
                    <line x1="50" y1="20" x2="50" y2="60" stroke="var(--primary-dark)" strokeWidth="1" />
                    <line x1="20" y1="40" x2="80" y2="40" stroke="var(--primary-dark)" strokeWidth="1" />
                    <line x1="50" y1="70" x2="50" y2="100" stroke="var(--primary-dark)" strokeWidth="1" />
                    <line x1="20" y1="85" x2="80" y2="85" stroke="var(--primary-dark)" strokeWidth="1" />
                </svg>
            </div>
            
            {/* Architectural frames */}
            <div className="absolute bottom-20 left-5 w-64 h-64 opacity-5 hidden lg:block transform rotate-6">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    <rect x="10" y="10" width="80" height="80" rx="2" fill="none" stroke="var(--primary-dark)" strokeWidth="2" />
                    <rect x="15" y="15" width="70" height="70" rx="1" fill="none" stroke="var(--primary-dark)" strokeWidth="1" />
                    <path d="M10,30 H90 M10,50 H90 M10,70 H90 M30,10 V90 M50,10 V90 M70,10 V90" stroke="var(--primary-dark)" strokeWidth="0.5" strokeDasharray="2,2" />
                </svg>
            </div>
            
            {/* House shape decorative element */}
            <div className="absolute top-60 left-10 w-40 h-40 opacity-5 hidden lg:block">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M50,10 L90,40 V90 H10 V40 Z" fill="none" stroke="var(--primary-dark)" strokeWidth="2" />
                    <rect x="40" y="60" width="20" height="30" fill="none" stroke="var(--primary-dark)" strokeWidth="1.5" />
                    <rect x="20" y="50" width="15" height="15" fill="none" stroke="var(--primary-dark)" strokeWidth="1" />
                    <rect x="65" y="50" width="15" height="15" fill="none" stroke="var(--primary-dark)" strokeWidth="1" />
                    <path d="M50,10 L65,22 H35 Z" fill="var(--primary)" opacity="0.3" />
                </svg>
            </div>
            
            {/* Architectural column decorative element */}
            <div className="absolute top-1/2 right-20 w-20 h-80 opacity-5 hidden lg:block">
                <svg viewBox="0 0 40 100" className="w-full h-full">
                    <rect x="15" y="10" width="10" height="80" fill="none" stroke="var(--primary-dark)" strokeWidth="1" />
                    <rect x="5" y="5" width="30" height="5" rx="1" fill="none" stroke="var(--primary-dark)" strokeWidth="1" />
                    <rect x="5" y="90" width="30" height="5" rx="1" fill="none" stroke="var(--primary-dark)" strokeWidth="1" />
                    <line x1="15" y1="15" x2="15" y2="85" stroke="var(--primary-dark)" strokeWidth="0.5" />
                    <line x1="25" y1="15" x2="25" y2="85" stroke="var(--primary-dark)" strokeWidth="0.5" />
                    <line x1="15" y1="25" x2="25" y2="25" stroke="var(--primary-dark)" strokeWidth="0.5" />
                    <line x1="15" y1="40" x2="25" y2="40" stroke="var(--primary-dark)" strokeWidth="0.5" />
                    <line x1="15" y1="55" x2="25" y2="55" stroke="var(--primary-dark)" strokeWidth="0.5" />
                    <line x1="15" y1="70" x2="25" y2="70" stroke="var(--primary-dark)" strokeWidth="0.5" />
                </svg>
            </div>
            
            {/* Blueprint grid pattern background */}
            <div className="absolute inset-0 opacity-[0.03]">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="var(--primary-dark)" strokeWidth="0.5"/>
                        </pattern>
                        <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                            <rect width="100" height="100" fill="url(#smallGrid)"/>
                            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="var(--primary-dark)" strokeWidth="1"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded-full bg-[var(--primary-light)] bg-opacity-20 text-[var(--primary)] text-sm font-medium mb-4">ACCOMMODATIONS</span>
                    <h2 className="font-satoshi text-[40px] lg:text-[56px] font-bold mb-6 text-[var(--text-dark)]">Stay in Tea Country</h2>
                    <div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-6 rounded-full"></div>
                    <p className="font-satoshiMed text-[18px] text-[var(--text-dark)] opacity-90">
                        Immerse yourself in the serene beauty of tea plantations with our carefully selected accommodations, from authentic homestays to luxury retreats.
                    </p>
                </div>

                {/* Filter buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {filters.map((filter, index) => (
                        <button 
                            key={index}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-3 rounded-full text-sm font-satoshi font-bold transition-all duration-300 ${
                                activeFilter === filter 
                                    ? 'bg-[var(--primary)] text-white shadow-md' 
                                    : 'bg-white text-[var(--text-dark)] hover:bg-[var(--primary-light)] hover:text-[var(--primary)]'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Loading and error states */}
                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary)]"></div>
                        <span className="ml-3 text-[var(--primary)] font-satoshiMed">Loading accommodations...</span>
                    </div>
                ) : error ? (
                    <div className="text-center py-20">
                        <p className="text-red-500 mb-4">{error}</p>
                        <button onClick={() => window.location.reload()} className="text-[var(--primary)] underline">Try again</button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {filteredAccommodations.map((accommodation) => (
                            <div 
                                key={accommodation.id} 
                                className="group"
                                onMouseEnter={() => setActiveAccommodation(accommodation.id)}
                                onMouseLeave={() => setActiveAccommodation(null)}
                            >
                                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                                    {/* Image container */}
                                    <div className="relative h-64 overflow-hidden">
                                        <img 
                                            src={accommodation.image} 
                                            alt={accommodation.title} 
                                            className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                                            onError={e => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=2670&auto=format&fit=crop"; }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent"></div>
                                        {/* Location and type badge */}
                                        <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                                            <span className="bg-white/90 backdrop-blur-sm text-[var(--primary)] text-xs font-satoshiMed px-3 py-1.5 rounded-full">
                                                {accommodation.location}
                                            </span>
                                            <span className="bg-[var(--primary)]/90 backdrop-blur-sm text-white text-xs font-satoshiMed px-3 py-1.5 rounded-full">
                                                {accommodation.type}
                                            </span>
                                        </div>
                                        {/* Price and rating */}
                                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                                            <span className="text-white font-satoshiMed text-sm">
                                                {accommodation.priceRange}
                                            </span>
                                            <div className="flex items-center bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <span className="text-xs font-satoshiMed text-gray-800 ml-1">{accommodation.rating}</span>
                                                <span className="text-xs text-gray-500 ml-1">({accommodation.reviewCount})</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Content section */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="font-satoshi text-xl font-bold text-[var(--text-dark)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                                            {accommodation.title}
                                        </h3>
                                        <p className="font-satoshiMed text-[15px] text-gray-600 mb-4 flex-grow">
                                            {accommodation.description}
                                        </p>
                                        {/* Amenities */}
                                        <div className="mb-5">
                                            <div className="flex flex-wrap gap-2">
                                                {accommodation.amenities && accommodation.amenities.slice(0, 4).map((amenity, index) => (
                                                    <span key={index} className="inline-flex items-center text-xs font-satoshiMed px-2.5 py-1 rounded-full bg-[var(--cream)] text-gray-700">
                                                        {amenity}
                                                    </span>
                                                ))}
                                                {accommodation.amenities && accommodation.amenities.length > 4 && (
                                                    <span className="inline-flex items-center text-xs font-satoshiMed px-2.5 py-1 rounded-full bg-[var(--cream)] text-gray-700">
                                                        +{accommodation.amenities.length - 4} more
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        {/* Features - shown on hover or mobile tap */}
                                        <div className={`overflow-hidden transition-all duration-300 mb-4 ${activeAccommodation === accommodation.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                            <div className="w-full h-px bg-gray-200 mb-4"></div>
                                            <h4 className="font-satoshi font-bold text-sm text-[var(--primary)] mb-2">Unique Features:</h4>
                                            <ul className="text-[13px] text-gray-600 space-y-1 pl-5 list-disc">
                                                {accommodation.features && accommodation.features.slice(0, 2).map((feature, index) => (
                                                    <li key={index}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        {/* CTA button */}
                                        {accommodation.brochureUrl ? (
                                            <a href={accommodation.brochureUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-full border-2 border-[var(--primary)] text-[var(--primary)] font-satoshi font-bold hover:bg-[var(--primary)] hover:text-white transition-colors group">
                                                View Brochure
                                            </a>
                                        ) : (
                                            <a href={`#booking-${accommodation.id}`} className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-full border-2 border-[var(--primary)] text-[var(--primary)] font-satoshi font-bold hover:bg-[var(--primary)] hover:text-white transition-colors group">
                                                View Details & Book
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                
                {/* Additional information section */}
                <div className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-md max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <div className="bg-[var(--primary-light)] rounded-full p-6 w-24 h-24 flex items-center justify-center mx-auto md:mx-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                                </svg>
                            </div>
                        </div>
                        <div className="w-full md:w-2/3 md:pl-8">
                            <h3 className="font-satoshi text-2xl font-bold text-[var(--text-dark)] mb-4 text-center md:text-left">Not finding what you're looking for?</h3>
                            <p className="font-satoshiMed text-gray-600 mb-6 text-center md:text-left">
                                We offer custom accommodation arrangements to suit your preferences. Contact our team for personalized recommendations and special packages, including guided tea tours, cultural experiences, and more.
                            </p>
                            <div className="flex justify-center md:justify-start">
                                <CTABtn text="Contact for Custom Bookings" link="/contact" />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Stay