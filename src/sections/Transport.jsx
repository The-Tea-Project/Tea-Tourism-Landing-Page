import React, { useState, useRef } from 'react'
import CTABtn from '../components/CTABtn'

function Transport() {
    const [activeTab, setActiveTab] = useState('transport');
    const [selectedRegion, setSelectedRegion] = useState('Darjeeling');
    const mapRef = useRef(null);

    // Transport options data with region filtering
    const transportOptions = [
        {
            id: 1,
            title: "Toy Train Experience",
            type: "Heritage",
            regions: ["Darjeeling"],
            priceRange: "$15-$45 per person",
            rating: 4.9,
            reviewCount: 214,
            description: "Journey on the UNESCO World Heritage Darjeeling Himalayan Railway, enjoying breathtaking views of tea gardens.",
            image: "https://images.unsplash.com/photo-1598002490557-4581f34547c7?q=80&w=2670&auto=format&fit=crop",
            features: [
                "2-4 hour scenic journey through tea plantations",
                "Original steam locomotives on select routes",
                "Stops at colonial-era stations",
                "Panoramic views of the Himalayas on clear days"
            ],
            schedule: "Daily departures from Darjeeling at 8:00 AM and 12:00 PM"
        },
        {
            id: 2,
            title: "Tea Estate Jeep Safari",
            type: "Adventure",
            regions: ["Darjeeling", "Assam", "Nilgiris"],
            priceRange: "$25-$60 per vehicle",
            rating: 4.7,
            reviewCount: 156,
            description: "Explore remote tea plantations in rugged 4x4 vehicles with knowledgeable local drivers and guides.",
            image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2621&auto=format&fit=crop",
            features: [
                "Off-road routes through working tea estates",
                "Vehicle capacity: 4-6 persons",
                "Stops for photography and tea tasting",
                "Optional picnic lunch arrangements"
            ],
            schedule: "Bookable daily, best times: 7:00 AM - 10:00 AM or 3:00 PM - 5:30 PM"
        },
        {
            id: 3,
            title: "Private Chauffeur Service",
            type: "Luxury",
            regions: ["Darjeeling", "Assam", "Nilgiris", "Munnar"],
            priceRange: "$40-$100 per day",
            rating: 4.8,
            reviewCount: 98,
            description: "Comfortable air-conditioned vehicles with experienced drivers familiar with tea plantation routes.",
            image: "https://images.unsplash.com/photo-1536746803623-cef87080bfc8?q=80&w=2680&auto=format&fit=crop",
            features: [
                "Modern sedans or SUVs with AC",
                "English-speaking drivers",
                "Flexible itinerary planning",
                "Door-to-door service from accommodations"
            ],
            schedule: "Available 24/7 with advance booking"
        },
        {
            id: 4,
            title: "Guided Trekking Routes",
            type: "Adventure",
            regions: ["Darjeeling", "Munnar", "Nilgiris"],
            priceRange: "$10-$30 per person",
            rating: 4.6,
            reviewCount: 187,
            description: "Scenic hiking paths through tea plantations with experienced local guides sharing knowledge of tea cultivation.",
            image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?q=80&w=2560&auto=format&fit=crop",
            features: [
                "Various difficulty levels available",
                "Duration: 2-6 hours depending on route",
                "Small groups (max 8 people)",
                "Includes refreshment stops at local tea shops"
            ],
            schedule: "Daily morning departures, weather permitting"
        },
        {
            id: 5,
            title: "Tea Region Helicopter Tours",
            type: "Luxury",
            regions: ["Darjeeling", "Assam"],
            priceRange: "$200-$450 per person",
            rating: 4.9,
            reviewCount: 42,
            description: "Breathtaking aerial views of sprawling tea estates, mountains, and rivers from a private helicopter.",
            image: "https://images.unsplash.com/photo-1534331262957-b79e1e1d850a?q=80&w=2670&auto=format&fit=crop",
            features: [
                "30-60 minute flights",
                "Maximum 4-6 passengers",
                "Professional pilot commentary",
                "Champagne tea service included"
            ],
            schedule: "Weather dependent, advance booking required"
        },
        {
            id: 6,
            title: "Local Tea Garden Shuttle",
            type: "Economy",
            regions: ["Darjeeling", "Assam", "Nilgiris", "Munnar"],
            priceRange: "$5-$15 per person",
            rating: 4.5,
            reviewCount: 236,
            description: "Regular shared shuttle service connecting major hotels to popular tea estates and attractions.",
            image: "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?q=80&w=2672&auto=format&fit=crop",
            features: [
                "Air-conditioned minivans",
                "Hourly departures during daytime",
                "Multiple pickup and drop-off points",
                "Affordable hop-on-hop-off option"
            ],
            schedule: "Operates 7:00 AM - 7:00 PM with hourly frequency"
        }
    ];

    // Region data for map component
    const regions = [
        { id: "Darjeeling", name: "Darjeeling", center: { lat: 27.0410, lng: 88.2663 } },
        { id: "Assam", name: "Assam", center: { lat: 26.1433, lng: 91.7898 } },
        { id: "Nilgiris", name: "Nilgiris", center: { lat: 11.4916, lng: 76.7399 } },
        { id: "Munnar", name: "Munnar", center: { lat: 10.0889, lng: 77.0595 } }
    ];

    // Travel tips data
    const travelTips = [
        {
            title: "Best Time to Visit",
            description: "For most tea regions in India, the ideal time to visit is from March to May (first flush) and September to November (autumn flush).",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "What to Pack",
            description: "Light, breathable clothing with layers, good walking shoes, rain protection, insect repellent, and sun protection are essential.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
            )
        },
        {
            title: "Local Transportation",
            description: "Pre-arrange major travel between regions. Within tea regions, local transport can be limited, so booking in advance is recommended.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
            )
        }
    ];

    // Filter transport options based on selected region
    const filteredTransport = transportOptions.filter(option =>
        option.regions.includes(selectedRegion)
    );

    return (
        <div id="transport" className="w-full bg-gradient-to-b from-white via-[var(--cream)] to-white py-[100px] relative overflow-hidden">
            {/* Custom unique SVG background elements */}
            <svg className="absolute top-0 right-0 w-full h-full z-0 opacity-10" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <path d="M0,0 L1000,0 L1000,1000 L0,1000 Z" fill="none" stroke="var(--primary)" strokeWidth="2" opacity="0.2" />
                <path d="M100,100 L900,100 L900,900 L100,900 Z" fill="none" stroke="var(--primary)" strokeWidth="1.5" opacity="0.15" strokeDasharray="5,5" />
                <circle cx="500" cy="500" r="350" fill="none" stroke="var(--primary)" strokeWidth="1" opacity="0.1" />
            </svg>
            
            {/* Honeycomb tea pattern background */}
            <svg className="absolute top-0 left-0 w-full h-full z-0 opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                    <pattern id="teaHoneycomb" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M10,0 L20,5 L20,15 L10,20 L0,15 L0,5 Z" fill="none" stroke="var(--primary-dark)" strokeWidth="0.5" />
                        <path d="M8,8 C12,5 16,8 14,12" fill="none" stroke="var(--primary-dark)" strokeWidth="0.3" />
                    </pattern>
                </defs>
                <rect x="0" y="0" width="100" height="100" fill="url(#teaHoneycomb)" />
            </svg>
            
            {/* Tea leaf branch large decorative element */}
            <svg className="absolute top-20 right-10 w-64 h-64 opacity-10 hidden lg:block" viewBox="0 0 100 100">
                <path d="M50,10 C80,30 70,50 50,60 C20,75 10,40 50,10 Z" fill="var(--primary)" opacity="0.2" />
                <path d="M50,10 C65,25 60,45 50,60" fill="none" stroke="var(--primary-dark)" strokeWidth="1" />
                <path d="M20,30 C40,35 45,50 30,60 C15,70 5,50 20,30 Z" fill="var(--primary)" opacity="0.2" />
                <path d="M20,30 C30,40 25,55 15,60" fill="none" stroke="var(--primary-dark)" strokeWidth="0.8" />
                <path d="M70,40 C85,55 80,75 60,80 C40,85 30,60 70,40 Z" fill="var(--primary)" opacity="0.2" />
                <path d="M70,40 C75,55 65,70 55,75" fill="none" stroke="var(--primary-dark)" strokeWidth="0.8" />
            </svg>
            
            {/* Tea route map decorative element */}
            <svg className="absolute bottom-20 left-10 w-72 h-72 opacity-15 hidden lg:block" viewBox="0 0 100 100">
                <path d="M10,50 C30,20 50,80 70,30 C90,60 80,80 90,90" fill="none" stroke="var(--primary)" strokeWidth="1" strokeDasharray="2,2" />
                <circle cx="10" cy="50" r="3" fill="var(--primary)" opacity="0.6" />
                <circle cx="40" cy="35" r="2" fill="var(--primary)" opacity="0.6" />
                <circle cx="70" cy="30" r="3" fill="var(--primary)" opacity="0.6" />
                <circle cx="90" cy="90" r="2" fill="var(--primary)" opacity="0.6" />
                <path d="M20,60 C15,70 25,80 35,75" fill="none" stroke="var(--primary-dark)" strokeWidth="0.5" />
                <path d="M60,50 C65,60 75,55 70,45" fill="none" stroke="var(--primary-dark)" strokeWidth="0.5" />
                <path d="M80,70 C75,80 85,85 90,75" fill="none" stroke="var(--primary-dark)" strokeWidth="0.5" />
                <rect x="5" y="45" width="10" height="10" rx="2" fill="var(--primary)" opacity="0.1" />
                <rect x="85" y="85" width="10" height="10" rx="2" fill="var(--primary)" opacity="0.1" />
            </svg>
            
            {/* Topographic pattern - emulating tea plantation contours */}
            <svg className="absolute right-0 bottom-0 w-full h-64 opacity-8" viewBox="0 0 1000 400" preserveAspectRatio="none">
                <path d="M0,400 C200,380 300,350 500,360 C700,370 800,340 1000,380 L1000,400 L0,400 Z" fill="var(--primary)" opacity="0.05" />
                <path d="M0,400 C200,360 300,320 500,340 C700,360 800,300 1000,340 L1000,400 L0,400 Z" fill="var(--primary)" opacity="0.05" />
                <path d="M0,400 C200,340 300,290 500,320 C700,350 800,280 1000,300 L1000,400 L0,400 Z" fill="var(--primary)" opacity="0.05" />
            </svg>
            
            {/* Compass rose element */}
            <svg className="absolute top-1/3 left-1/4 w-20 h-20 opacity-10 hidden xl:block" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="var(--primary)" strokeWidth="1" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="var(--primary)" strokeWidth="0.5" strokeDasharray="3,3" />
                <circle cx="50" cy="50" r="5" fill="var(--primary)" opacity="0.3" />
                <path d="M50,5 L50,95" stroke="var(--primary)" strokeWidth="0.5" />
                <path d="M5,50 L95,50" stroke="var(--primary)" strokeWidth="0.5" />
                <path d="M20,20 L80,80" stroke="var(--primary)" strokeWidth="0.3" strokeDasharray="2,2" />
                <path d="M20,80 L80,20" stroke="var(--primary)" strokeWidth="0.3" strokeDasharray="2,2" />
                <path d="M50,5 L45,15 L55,15 Z" fill="var(--primary)" />
                <text x="50" y="20" textAnchor="middle" fill="var(--primary)" fontSize="8" fontWeight="bold">N</text>
                <text x="80" y="50" textAnchor="middle" fill="var(--primary)" fontSize="8" fontWeight="bold">E</text>
                <text x="50" y="85" textAnchor="middle" fill="var(--primary)" fontSize="8" fontWeight="bold">S</text>
                <text x="20" y="50" textAnchor="middle" fill="var(--primary)" fontSize="8" fontWeight="bold">W</text>
            </svg>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header with travel map illustration */}
                <div className="flex flex-col md:flex-row items-start justify-between mb-16 mx-28">
                    <div className="md:w-2/3 md:pr-12">
                        <span className="inline-block py-1 px-3 rounded-full bg-[var(--primary-light)] bg-opacity-30 text-[var(--primary-dark)] text-sm font-medium mb-4">TRANSPORTATION & MAPS</span>
                        <h2 className="font-satoshi text-[40px] lg:text-[56px] font-bold mb-6 text-[var(--text-dark)]">Journey Through <br className="hidden md:block" />Tea Country</h2>
                        <div className="w-24 h-1 bg-[var(--primary)] mb-6 rounded-full"></div>
                        <p className="font-satoshiMed text-[18px] text-[var(--text-dark)] opacity-90 max-w-xl">
                            Discover the best ways to traverse tea estates and plantations, with curated transport options and detailed maps for a seamless journey.
                        </p>
                    </div>
                    
                    <div className="mt-8 md:mt-0 md:w-1/3 relative">
                        {/* Travel map illustration */}
                        <svg className="absolute -top-10 -left-10 w-32 h-32 opacity-20" viewBox="0 0 100 100">
                            <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="var(--primary)" strokeWidth="2" />
                            <path d="M20,20 L40,10 L100,10 L80,20" fill="none" stroke="var(--primary)" strokeWidth="1" />
                            <path d="M80,80 L100,70 L100,10" fill="none" stroke="var(--primary)" strokeWidth="1" />
                            <path d="M30,20 C40,40 50,30 60,50 C70,70 80,60 80,80" fill="none" stroke="var(--primary-dark)" strokeWidth="1.5" strokeDasharray="2,2" />
                            <circle cx="30" cy="20" r="2" fill="var(--primary)" />
                            <circle cx="60" cy="50" r="2" fill="var(--primary)" />
                            <circle cx="80" cy="80" r="2" fill="var(--primary)" />
                        </svg>

                        <div className="bg-white p-6 rounded-3xl shadow-lg relative border border-[var(--primary-light)]/20">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-full bg-[var(--primary-light)] flex items-center justify-center mr-4">
                                    <svg className="h-6 w-6 text-[var(--primary)]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.05493 11H5C6.10457 11 7 11.8954 7 13V14C7 15.1046 7.89543 16 9 16H15C16.1046 16 17 15.1046 17 14V13C17 11.8954 17.8954 11 19 11H20.9451" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                                        <path d="M8 8.5C9 7.5 10 7 12 7C14 7 15 7.5 16 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                        <path d="M16 15.5C15 16.5 14 17 12 17C10 17 9 16.5 8 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                </div>
                                <h3 className="font-satoshi font-bold text-xl text-[var(--text-dark)]">Travel Facts</h3>
                            </div>
                            <ul className="space-y-2 text-[15px] text-gray-600">
                                <li className="flex items-start">
                                    <svg className="h-5 w-5 text-[var(--primary)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    4 major tea regions covered
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-5 w-5 text-[var(--primary)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    6 transport options available
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-5 w-5 text-[var(--primary)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Downloadable offline maps
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="bg-[var(--cream)] p-1 rounded-full">
                        <button
                            onClick={() => setActiveTab('transport')}
                            className={`px-8 py-3 rounded-full text-sm font-satoshi font-bold transition-all duration-300 ${activeTab === 'transport'
                                    ? 'bg-[var(--primary)] text-white shadow-md'
                                    : 'bg-transparent text-[var(--text-dark)] hover:bg-[var(--primary-light)] hover:text-[var(--primary)]'
                                }`}
                        >
                            Transport Options
                        </button>
                        <button
                            onClick={() => setActiveTab('maps')}
                            className={`px-8 py-3 rounded-full text-sm font-satoshi font-bold transition-all duration-300 ${activeTab === 'maps'
                                    ? 'bg-[var(--primary)] text-white shadow-md'
                                    : 'bg-transparent text-[var(--text-dark)] hover:bg-[var(--primary-light)] hover:text-[var(--primary)]'
                                }`}
                        >
                            Tea Region Maps
                        </button>
                    </div>
                </div>

                {/* Region selector */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {regions.map((region) => (
                        <button
                            key={region.id}
                            onClick={() => setSelectedRegion(region.id)}
                            className={`px-4 py-2 rounded-full text-xs md:text-sm font-satoshi font-bold transition-all duration-300 ${selectedRegion === region.id
                                    ? 'bg-[var(--primary-dark)] text-white shadow-md'
                                    : 'bg-white border border-[var(--primary-light)] text-[var(--text-dark)] hover:bg-[var(--primary-light)] hover:text-[var(--primary)]'
                                }`}
                        >
                            {region.name}
                        </button>
                    ))}
                </div>

                {/* Transport options tab */}
                {activeTab === 'transport' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {filteredTransport.map((option) => (
                            <div key={option.id} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                                {/* Image container */}
                                <div className="relative h-52 overflow-hidden">
                                    <img
                                        src={option.image}
                                        alt={option.title}
                                        className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent"></div>

                                    {/* Type badge */}
                                    <div className="absolute top-4 right-4">
                                        <span className="bg-[var(--primary)]/90 backdrop-blur-sm text-white text-xs font-satoshiMed px-3 py-1.5 rounded-full">
                                            {option.type}
                                        </span>
                                    </div>

                                    {/* Rating */}
                                    <div className="absolute bottom-4 right-4">
                                        <div className="flex items-center bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <span className="text-xs font-satoshiMed text-gray-800 ml-1">{option.rating}</span>
                                            <span className="text-xs text-gray-500 ml-1">({option.reviewCount})</span>
                                        </div>
                                    </div>

                                    {/* Title and price */}
                                    <div className="absolute bottom-4 left-4">
                                        <h3 className="font-satoshi text-xl font-bold text-white mb-1">
                                            {option.title}
                                        </h3>
                                        <span className="text-white/80 font-satoshiMed text-sm">
                                            {option.priceRange}
                                        </span>
                                    </div>
                                </div>

                                {/* Content section */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <p className="font-satoshiMed text-[15px] text-gray-600 mb-4 flex-grow">
                                        {option.description}
                                    </p>

                                    <div className="mb-5">
                                        <h4 className="font-satoshi font-bold text-sm text-[var(--primary)] mb-3">Key Features:</h4>
                                        <ul className="text-[13px] text-gray-600 space-y-1.5">
                                            {option.features.map((feature, index) => (
                                                <li key={index} className="flex items-start">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[var(--primary)] mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="border-t border-gray-100 pt-4 mb-5">
                                        <div className="flex items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <p className="text-[13px] text-gray-600">{option.schedule}</p>
                                        </div>
                                    </div>

                                    {/* CTA button */}
                                    <a href={`#booking-${option.id}`} className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-full border-2 border-[var(--primary)] text-[var(--primary)] font-satoshi font-bold hover:bg-[var(--primary)] hover:text-white transition-colors group">
                                        Book Transport
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Maps tab */}
                {activeTab === 'maps' && (
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Map container */}
                            <div className="lg:col-span-2">
                                <div className="bg-white rounded-2xl shadow-md overflow-hidden h-full">
                                    <div className="relative h-[500px] bg-[var(--cream)]" ref={mapRef}>
                                        {/* Map placeholder - in a real app, integrate Google Maps or other map services */}
                                        <div className="absolute inset-0 bg-[var(--cream)] flex flex-col items-center justify-center p-8">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[var(--primary)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                            </svg>
                                            <div className="text-center">
                                                <h3 className="font-satoshi text-xl font-bold text-[var(--text-dark)] mb-2">
                                                    Interactive {selectedRegion} Tea Region Map
                                                </h3>
                                                <p className="text-gray-600 font-satoshiMed text-sm mb-4">
                                                    The interactive map would display the location of tea estates, accommodations, and transport routes in {selectedRegion}.
                                                </p>
                                                <p className="text-[var(--primary)] font-satoshiMed text-xs">
                                                    Map integration would require Google Maps API or similar service.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Region info */}
                            <div className="lg:col-span-1">
                                <div className="bg-white rounded-2xl shadow-md overflow-hidden h-full flex flex-col">
                                    <div className="p-6 flex-1">
                                        <h3 className="font-satoshi text-xl font-bold text-[var(--text-dark)] mb-4">
                                            {selectedRegion} Tea Region
                                        </h3>

                                        <div className="mb-6">
                                            <h4 className="font-satoshi font-bold text-sm text-[var(--primary)] mb-2">Key Locations:</h4>
                                            <ul className="text-[15px] text-gray-600 space-y-2">
                                                <li className="flex items-start">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    Popular Tea Estates
                                                </li>
                                                <li className="flex items-start">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    Recommended Accommodations
                                                </li>
                                                <li className="flex items-start">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    Transportation Hubs
                                                </li>
                                                <li className="flex items-start">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    Popular Scenic Routes
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="mb-6">
                                            <h4 className="font-satoshi font-bold text-sm text-[var(--primary)] mb-2">Getting There:</h4>
                                            <p className="text-[15px] text-gray-600 mb-4">
                                                Information about how to reach {selectedRegion} tea region from major cities and transport hubs would be displayed here, including approximate travel times and recommended routes.
                                            </p>

                                            <div className="mt-4">
                                                <button className="flex items-center text-[var(--primary)] hover:underline text-sm font-medium">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                    View detailed travel guide
                                                </button>
                                            </div>
                                        </div>

                                        {/* Download buttons */}
                                        <div className="space-y-3">
                                            <a href="#" className="flex items-center justify-center w-full px-4 py-3 rounded-full bg-[var(--primary)] text-white font-satoshi font-bold hover:bg-[var(--primary-dark)] transition-colors">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                </svg>
                                                Download Printable Map
                                            </a>
                                            <a href="#" className="flex items-center justify-center w-full px-4 py-3 rounded-full border-2 border-[var(--primary)] text-[var(--primary)] font-satoshi font-bold hover:bg-[var(--primary-light)] transition-colors">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                                </svg>
                                                Offline Mobile Map
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Custom travel path visualization between sections */}
                <div className="my-20 relative hidden lg:block">
                    <svg className="w-full h-20" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path d="M0,50 C200,80 300,20 500,50 C700,80 800,20 1000,50" fill="none" stroke="var(--primary)" strokeWidth="2" strokeDasharray="5,5" />
                        <circle cx="0" cy="50" r="8" fill="var(--primary)" opacity="0.6" />
                        <circle cx="250" cy="65" r="6" fill="var(--primary)" opacity="0.4" />
                        <circle cx="500" cy="50" r="8" fill="var(--primary)" opacity="0.6" />
                        <circle cx="750" cy="65" r="6" fill="var(--primary)" opacity="0.4" />
                        <circle cx="1000" cy="50" r="8" fill="var(--primary)" opacity="0.6" />
                    </svg>
                </div>

                {/* Travel tips section with custom tea leaf pattern background */}
                <div className="mt-24 relative">
                    <div className="absolute inset-0 opacity-5">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <defs>
                                <pattern id="teaLeafPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <path d="M10,2 C15,5 15,15 10,18 C5,15 5,5 10,2 Z" fill="var(--primary)" />
                                </pattern>
                            </defs>
                            <rect x="0" y="0" width="100" height="100" fill="url(#teaLeafPattern)" />
                        </svg>
                    </div>
                    
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-lg z-10">
                        <div className="w-16 h-16 rounded-full bg-[var(--primary)] flex items-center justify-center">
                            <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-[var(--primary-light)]/10 via-white to-[var(--primary-light)]/10 rounded-2xl p-8 md:p-12 shadow-md max-w-5xl mx-auto pt-16">
                        <h3 className="font-satoshi text-2xl font-bold text-[var(--text-dark)] mb-10 text-center">Tea Region Travel Tips</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {travelTips.map((tip, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="bg-[var(--primary-light)] rounded-full p-5 w-16 h-16 flex items-center justify-center mb-4">
                                        <div className="text-[var(--primary)]">
                                            {tip.icon}
                                        </div>
                                    </div>
                                    <h4 className="font-satoshi text-lg font-bold text-[var(--text-dark)] mb-2">{tip.title}</h4>
                                    <p className="font-satoshiMed text-sm text-gray-600">{tip.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* Custom transport service with unique tea field background */}
                <div className="mt-24 relative">
                    <div className="absolute inset-0 opacity-10">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <defs>
                                <pattern id="teaFieldPattern" x="0" y="0" width="20" height="10" patternUnits="userSpaceOnUse">
                                    <path d="M0,10 Q10,0 20,10" fill="none" stroke="var(--primary)" strokeWidth="0.5" />
                                </pattern>
                            </defs>
                            <rect x="0" y="0" width="100" height="100" fill="url(#teaFieldPattern)" />
                        </svg>
                    </div>
                    
                    <div className="absolute top-0 left-0 w-1/3 h-full bg-[var(--primary-light)]/10 transform -skew-x-12 rounded-3xl hidden md:block"></div>
                    
                    <div className="max-w-5xl mx-auto relative">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 relative z-10">
                                {/* <div className="hidden md:block absolute -top-10 -left-10 w-20 h-20 rounded-full border-4 border-[var(--primary-light)] border-opacity-30"></div> */}
                                <h3 className="font-satoshi text-[32px] font-bold text-[var(--text-dark)] mb-4">Need Custom Transportation?</h3>
                                <p className="font-satoshiMed text-[16px] text-[var(--text-dark)]/80 mb-6">
                                    We can arrange specialized transportation and create custom itineraries for groups or specific requirements. Our transportation team will work with you to design the perfect travel solution.
                                </p>
                                <CTABtn text="Contact Transportation Team" link="/contact" />
                            </div>

                            <div className="md:w-1/2 relative">
                                <div className="bg-white p-6 rounded-2xl shadow-lg border border-[var(--primary-light)]/20">
                                    <h4 className="font-satoshi text-lg font-bold text-[var(--primary)] mb-4 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                        </svg>
                                        What Travelers Say
                                    </h4>

                                    <blockquote className="border-l-4 border-[var(--primary-light)] pl-4 mb-6">
                                        <p className="italic text-gray-600 text-sm mb-2">"The custom tea trail journey arranged for our family was perfect. The transportation was comfortable and the local drivers knew exactly where to take us for the best views and experiences."</p>
                                        <footer className="text-[var(--text-dark)] font-medium text-xs">— Sarah T., Tea Enthusiast</footer>
                                    </blockquote>

                                    <div className="flex space-x-2 mb-4">
                                        <span className="px-3 py-1 bg-[var(--primary-light)]/20 text-[var(--primary)] rounded-full text-xs font-medium">Private Tours</span>
                                        <span className="px-3 py-1 bg-[var(--primary-light)]/20 text-[var(--primary)] rounded-full text-xs font-medium">Group Transfers</span>
                                        <span className="px-3 py-1 bg-[var(--primary-light)]/20 text-[var(--primary)] rounded-full text-xs font-medium">Custom Routes</span>
                                    </div>

                                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                                        <div className="flex">
                                            <div className="w-6 h-6 rounded-full bg-[var(--primary)] flex items-center justify-center text-white text-xs font-bold">?</div>
                                            <div className="w-6 h-6 rounded-full bg-[var(--primary-light)] flex items-center justify-center text-[var(--primary)] text-xs font-bold -ml-2">!</div>
                                        </div>
                                        <a href="#faq" className="text-sm text-[var(--primary)] hover:underline font-medium">View Transport FAQs</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transport