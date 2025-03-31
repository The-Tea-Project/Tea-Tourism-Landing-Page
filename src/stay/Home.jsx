import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

function StayHome() {
    const [hotels, setHotels] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeFilter, setActiveFilter] = useState('All');
    const [activeHotel, setActiveHotel] = useState(null);
    
    const filters = ['All', 'Hotel', 'Resort', 'Hostel', 'Homestay'];

    // Fetch hotels data
    useEffect(() => {
        const fetchHotels = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('https://tea-tourism-backend.onrender.com/stays/accommodations');
                if (!response.ok) {
                    throw new Error('Failed to fetch accommodations');
                }
                const data = await response.json();
                
                // Process the accommodations data
                const processedHotels = data.accommodations.map(hotel => ({
                    ...hotel,
                    image: hotel.mainImage?.includes('example.com') 
                        ? `https://source.unsplash.com/featured/?hotel,${hotel.tags[0]}`
                        : hotel.mainImage,
                    // Get minimum price from roomTypes
                    pricePerNight: Math.min(...hotel.roomTypes.map(room => room.priceRange.min))
                }));
                
                setHotels(processedHotels);
                setIsLoading(false);
            } catch (err) {
                console.error('Error fetching accommodations:', err);
                setError(err.message);
                setIsLoading(false);
            }
        };
        
        fetchHotels();
    }, []);

    return (
        // <div className="flex bg-[var(--cream)] flex-col items-center justify-center w-full">
            // {/* <NavBar /> */}
            <div className="w-full bg-[var(--light-bg)] to-[#f7f9fc] py-[100px] relative overflow-hidden">
                {/* Architectural decorative elements */}
                <svg className="absolute top-0 left-0 w-full h-96 opacity-15" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,224C672,235,768,213,864,192C960,171,1056,149,1152,149.3C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" 
                        fill="var(--primary-light)" opacity="0.2"></path>
                </svg>

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
                    {/* Header section */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="bg-[var(--primary-light)] text-[var(--primary)] text-sm font-satoshiMed px-4 py-2 rounded-full inline-block mb-4">
                            LUXURY STAYS
                        </span>
                        <h1 className="text-5xl font-satoshi font-bold mb-6 text-[var(--primary-dark)]">
                            Tea Estate Hotels
                        </h1>
                        <div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-6 rounded-full"></div>
                        <p className="text-lg text-gray-600 mb-10">
                            Experience luxury accommodations nestled within historic tea estates, offering breathtaking views and authentic tea experiences.
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

                    {/* Loading state */}
                    {isLoading && (
                        <div className="flex justify-center items-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary)]"></div>
                            <span className="ml-3 text-[var(--primary)] font-satoshiMed">Loading hotels...</span>
                        </div>
                    )}

                    {/* Error state */}
                    {error && (
                        <div className="text-center py-20">
                            <p className="text-red-500 mb-4">{error}</p>
                            <button 
                                onClick={() => window.location.reload()}
                                className="text-[var(--primary)] underline"
                            >
                                Try again
                            </button>
                        </div>
                    )}

                    {/* Hotels grid */}
                    {!isLoading && !error && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {hotels.map((hotel) => (
                                <div 
                                    key={hotel._id} 
                                    className="group"
                                    onMouseEnter={() => setActiveHotel(hotel._id)}
                                    onMouseLeave={() => setActiveHotel(null)}
                                >
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                                        {/* Image container */}
                                        <div className="relative h-64 overflow-hidden">
                                            <img 
                                                src={hotel.image} 
                                                alt={hotel.name} 
                                                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src = "https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=2670&auto=format&fit=crop";
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent"></div>
                                            
                                            {/* Location and type badge */}
                                            <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                                                <span className="bg-white/90 backdrop-blur-sm text-[var(--primary)] text-xs font-satoshiMed px-3 py-1.5 rounded-full">
                                                    {hotel.address.city}, {hotel.address.state}
                                                </span>
                                                <span className="bg-[var(--primary)]/90 backdrop-blur-sm text-white text-xs font-satoshiMed px-3 py-1.5 rounded-full">
                                                    {hotel.type.charAt(0).toUpperCase() + hotel.type.slice(1)}
                                                </span>
                                            </div>
                                            
                                            {/* Price and rating */}
                                            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                                                <span className="text-white font-satoshiMed text-sm">
                                                    From ${hotel.pricePerNight}/night
                                                </span>
                                                <div className="flex items-center bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                                                    <div className="flex items-center">
                                                        {[...Array(hotel.starRating)].map((_, index) => (
                                                            <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                            </svg>
                                                        ))}
                                                    </div>
                                                    {hotel.rating > 0 && (
                                                        <span className="text-xs text-gray-500 ml-1">({hotel.numReviews} reviews)</span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Content section */}
                                        <div className="p-6 flex-1 flex flex-col">
                                            <h3 className="font-satoshi text-xl font-bold text-[var(--text-dark)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                                                {hotel.name}
                                            </h3>
                                            <p className="font-satoshiMed text-[15px] text-gray-600 mb-4 flex-grow">
                                                {hotel.description}
                                            </p>
                                            
                                            {/* Amenities */}
                                            <div className="mb-5">
                                                <div className="flex flex-wrap gap-2">
                                                    {hotel.amenities.slice(0, 4).map((amenity, index) => (
                                                        <span key={index} className="inline-flex items-center text-xs font-satoshiMed px-2.5 py-1 rounded-full bg-[var(--cream)] text-gray-700">
                                                            {amenity.name}
                                                        </span>
                                                    ))}
                                                    {hotel.amenities.length > 4 && (
                                                        <span className="inline-flex items-center text-xs font-satoshiMed px-2.5 py-1 rounded-full bg-[var(--cream)] text-gray-700">
                                                            +{hotel.amenities.length - 4} more
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            
                                            {/* Expanded info on hover */}
                                            <div className={`overflow-hidden transition-all duration-300 mb-4 ${activeHotel === hotel._id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                                <div className="w-full h-px bg-gray-200 mb-4"></div>
                                                <h4 className="font-satoshi font-bold text-sm text-[var(--primary)] mb-2">Room Types:</h4>
                                                <ul className="text-[13px] text-gray-600 space-y-1 pl-5 list-disc">
                                                    {hotel.roomTypes.slice(0, 2).map((room, index) => (
                                                        <li key={index}>
                                                            {room.name} - ${room.priceRange.min}-${room.priceRange.max}/night
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            
                                            {/* Contact and Booking Button */}
                                            <div className="flex flex-col gap-2">
                                                <a 
                                                    href={`tel:${hotel.contactInfo?.phone[0]}`}
                                                    className="text-sm text-center text-gray-600 hover:text-[var(--primary)]"
                                                >
                                                    {hotel.contactInfo?.phone[0]}
                                                </a>
                                                <Link 
                                                    to={`/stays/${hotel._id}`}
                                                    className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-full border-2 border-[var(--primary)] text-[var(--primary)] font-satoshi font-bold hover:bg-[var(--primary)] hover:text-white transition-colors group"
                                                >
                                                    View Details & Book
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        // {/* </div> */}
    );
}

export default StayHome;