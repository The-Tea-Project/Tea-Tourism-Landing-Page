import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

function TransportHome() {
    const [transports, setTransports] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeFilter, setActiveFilter] = useState('All');
    const [activeService, setActiveService] = useState(null);

    const filters = ['All', 'Tour', 'Taxi', 'Bus', 'Private'];

    useEffect(() => {
        const fetchTransports = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('https://tea-tourism-backend.onrender.com/transport');
                if (!response.ok) {
                    throw new Error('Failed to fetch transport services');
                }
                const data = await response.json();
                
                // Process the transport data
                const processedTransports = data.transport.map(transport => ({
                    ...transport,
                    mainImage: transport.mainImage?.includes('image_url') 
                        ? `https://source.unsplash.com/featured/?transport,${transport.type}`
                        : transport.mainImage
                }));
                
                setTransports(processedTransports);
                setIsLoading(false);
            } catch (err) {
                console.error('Error fetching transports:', err);
                setError(err.message);
                setIsLoading(false);
            }
        };
        
        fetchTransports();
    }, []);

    const filteredTransports = activeFilter === 'All' 
        ? transports 
        : transports.filter(transport => transport.type.toLowerCase() === activeFilter.toLowerCase());

    return (
       
            <main className="pt-20 pb-20">
                {/* Decorative elements */}
                <div className="absolute top-40 left-0 w-40 h-40 rounded-full bg-[var(--primary-light)] opacity-10 blur-xl"></div>
                <div className="absolute top-80 right-10 w-60 h-60 rounded-full bg-[var(--primary-light)] opacity-10 blur-xl"></div>

                <div className="container mx-auto px-4">
                    {/* Header section */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="bg-[var(--primary-light)] text-[var(--primary)] text-sm font-satoshiMed px-4 py-2 rounded-full inline-block mb-4">
                            TRANSPORT SERVICES
                        </span>
                        <h1 className="text-5xl font-satoshi font-bold mb-6 text-[var(--primary-dark)]">
                            Tea Garden Tours & Transport
                        </h1>
                        <div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-6 rounded-full"></div>
                        <p className="text-lg text-gray-600">
                            Explore tea gardens and estates with our curated selection of transport services and guided tours.
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
                            <span className="ml-3 text-[var(--primary)] font-satoshiMed">Loading transport services...</span>
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

                    {/* Transport services grid */}
                    {!isLoading && !error && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredTransports.map((transport) => (
                                <div 
                                    key={transport._id}
                                    className="group"
                                    onMouseEnter={() => setActiveService(transport._id)}
                                    onMouseLeave={() => setActiveService(null)}
                                >
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                                        {/* Image container */}
                                        <div className="relative h-64 overflow-hidden">
                                            <img 
                                                src={transport.mainImage}
                                                alt={transport.name}
                                                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src = "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?q=80&w=2672&auto=format&fit=crop";
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent"></div>

                                            {/* Service type and rating badge */}
                                            <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                                                <span className="bg-white/90 backdrop-blur-sm text-[var(--primary)] text-xs font-satoshiMed px-3 py-1.5 rounded-full">
                                                    {transport.type.charAt(0).toUpperCase() + transport.type.slice(1)}
                                                </span>
                                                {transport.rating > 0 && (
                                                    <div className="flex items-center bg-[var(--primary)]/90 backdrop-blur-sm px-2 py-1 rounded-full">
                                                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <span className="text-white text-xs ml-1">{transport.rating} ({transport.numReviews})</span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Service areas */}
                                            <div className="absolute bottom-4 left-4 right-4">
                                                <div className="flex flex-wrap gap-2">
                                                    {transport.serviceAreas.map((area, index) => (
                                                        <span key={index} className="bg-white/90 backdrop-blur-sm text-xs px-2 py-1 rounded-full text-gray-700">
                                                            {area.city}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content section */}
                                        <div className="p-6 flex-1 flex flex-col">
                                            <h3 className="font-satoshi text-xl font-bold text-[var(--text-dark)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                                                {transport.name}
                                            </h3>
                                            <p className="text-gray-600 mb-4 flex-grow">
                                                {transport.description}
                                            </p>

                                            {/* Services preview */}
                                            <div className="mb-4">
                                                <div className="flex flex-wrap gap-2">
                                                    {transport.services.map((service, index) => (
                                                        <span key={index} className="bg-[var(--primary-light)] bg-opacity-20 text-[var(--primary)] text-xs px-3 py-1.5 rounded-full">
                                                            {service.name}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Tea activities - shown on hover */}
                                            {transport.teaRelated.teaActivities.length > 0 && (
                                                <div className={`overflow-hidden transition-all duration-300 mb-4 ${activeService === transport._id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                                    <div className="w-full h-px bg-gray-200 mb-4"></div>
                                                    <h4 className="font-satoshi font-bold text-sm text-[var(--primary)] mb-2">Tea Activities:</h4>
                                                    <ul className="text-sm text-gray-600 space-y-1">
                                                        {transport.teaRelated.teaActivities.map((activity, index) => (
                                                            <li key={index} className="flex items-center">
                                                                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                                </svg>
                                                                {activity}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {/* Contact and booking button */}
                                            <div className="flex flex-col gap-2">
                                                <a 
                                                    href={`tel:${transport.contactInfo.phone[0]}`}
                                                    className="text-sm text-center text-gray-600 hover:text-[var(--primary)]"
                                                >
                                                    {transport.contactInfo.phone[0]}
                                                </a>
                                                <Link 
                                                    to={`/transport/${transport._id}`}
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

                    {/* No results */}
                    {!isLoading && !error && filteredTransports.length === 0 && (
                        <div className="text-center bg-white p-10 rounded-xl shadow-md max-w-xl mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[var(--primary)] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h3 className="text-xl font-satoshi font-bold mb-2">No transport services found</h3>
                            <p className="text-gray-600 mb-4">
                                We couldn't find any transport services matching your criteria.
                            </p>
                            <button 
                                onClick={() => setActiveFilter('All')}
                                className="text-[var(--primary)] font-satoshiMed hover:underline"
                            >
                                View all services
                            </button>
                        </div>
                    )}
                </div>
            </main>
    );
}

export default TransportHome;