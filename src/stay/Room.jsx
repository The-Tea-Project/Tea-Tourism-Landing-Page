import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';

function Room() {
    const { id } = useParams();
    const [stay, setStay] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedRoomType, setSelectedRoomType] = useState(null);

    useEffect(() => {
        const fetchStayDetails = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`https://tea-tourism-backend.onrender.com/stays/accommodations/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch accommodation details');
                }
                const data = await response.json();
                
                // Process images with fallback
                const processedData = {
                    ...data,
                    mainImage: data.mainImage?.includes('example.com') 
                        ? `https://source.unsplash.com/featured/?hotel,${data.type}`
                        : data.mainImage,
                    images: data.images.map(img => 
                        img.includes('example.com') 
                            ? `https://source.unsplash.com/featured/?hotel,${data.type}`
                            : img
                    )
                };
                
                setStay(processedData);
                if (processedData.roomTypes.length > 0) {
                    setSelectedRoomType(processedData.roomTypes[0]);
                }
                setIsLoading(false);
            } catch (err) {
                console.error('Error fetching stay details:', err);
                setError(err.message);
                setIsLoading(false);
            }
        };
        
        fetchStayDetails();
    }, [id]);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-[var(--cream)] pt-40 pb-20 flex justify-center">
                <div className="flex flex-col items-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary)]"></div>
                    <span className="mt-4 text-[var(--primary)] font-satoshiMed">Loading accommodation details...</span>
                </div>
            </div>
        );
    }

    if (error || !stay) {
        return (
            <div className="min-h-screen bg-[var(--cream)] pt-20 pb-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl font-satoshi font-bold mb-6 text-[var(--primary-dark)]">Accommodation Not Found</h1>
                    <p className="mb-8">{error || "This accommodation doesn't exist or has been removed."}</p>
                    <Link to="/stays" className="inline-flex items-center bg-[var(--primary)] text-white px-6 py-3 rounded-full font-satoshiMed hover:bg-[var(--primary-dark)] transition-colors">
                        Back to Stays
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="flex bg-[var(--cream)] flex-col items-center justify-center w-full p-10">
            <NavBar />
            <main className="pt-20 pb-20">
                <div className="container mx-auto px-4">
                    {/* Breadcrumbs */}
                    <div className="mb-8">
                        <div className="flex items-center text-[var(--text-dark)] text-sm font-satoshiMed">
                            <Link to="/" className="hover:text-[var(--primary)] transition-colors">Home</Link>
                            <span className="mx-2">→</span>
                            <Link to="/stays" className="hover:text-[var(--primary)] transition-colors">Stays</Link>
                            <span className="mx-2">→</span>
                            <span className="text-[var(--primary)]">{stay.name}</span>
                        </div>
                    </div>

                    {/* Main content */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left column - Images and Details */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Image gallery */}
                            <div className="space-y-4">
                                <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                                    <img 
                                        src={selectedImage === 0 ? stay.mainImage : stay.images[selectedImage - 1]}
                                        alt={stay.name}
                                        className="w-full h-[500px] object-cover"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=2670&auto=format&fit=crop";
                                        }}
                                    />
                                </div>
                                <div className="flex gap-4 overflow-x-auto pb-2">
                                    <button 
                                        onClick={() => setSelectedImage(0)}
                                        className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                                            selectedImage === 0 ? 'border-[var(--primary)]' : 'border-transparent'
                                        }`}
                                    >
                                        <img 
                                            src={stay.mainImage}
                                            alt={`${stay.name} main`}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                    {stay.images.map((image, index) => (
                                        <button 
                                            key={index}
                                            onClick={() => setSelectedImage(index + 1)}
                                            className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                                                selectedImage === index + 1 ? 'border-[var(--primary)]' : 'border-transparent'
                                            }`}
                                        >
                                            <img 
                                                src={image}
                                                alt={`${stay.name} ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Property details */}
                            <div className="bg-white rounded-2xl p-8 shadow-md">
                                <h2 className="text-2xl font-satoshi font-bold mb-6 text-[var(--primary-dark)]">About this property</h2>
                                <p className="text-gray-600 mb-6">{stay.description}</p>
                                
                                {/* Amenities */}
                                <h3 className="text-lg font-satoshi font-bold mb-4 text-[var(--primary-dark)]">Amenities</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                                    {stay.amenities.map((amenity, index) => (
                                        <div key={index} className="flex items-center space-x-2">
                                            <span className="w-8 h-8 rounded-full bg-[var(--primary-light)] flex items-center justify-center">
                                                <i className={`fas fa-${amenity.icon} text-[var(--primary)]`}></i>
                                            </span>
                                            <span className="text-gray-600">{amenity.name}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Tea-related features */}
                                {stay.teaRelated && Object.values(stay.teaRelated).some(value => value) && (
                                    <div className="border-t pt-6">
                                        <h3 className="text-lg font-satoshi font-bold mb-4 text-[var(--primary-dark)]">Tea Experience</h3>
                                        <ul className="space-y-2">
                                            {stay.teaRelated.isTeaEstate && (
                                                <li className="flex items-center text-gray-600">
                                                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    Located on a Tea Estate
                                                </li>
                                            )}
                                            {stay.teaRelated.hasTeaGardens && (
                                                <li className="flex items-center text-gray-600">
                                                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    Tea Gardens on Property
                                                </li>
                                            )}
                                            {stay.teaRelated.teaActivities.map((activity, index) => (
                                                <li key={index} className="flex items-center text-gray-600">
                                                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    {activity}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Location and nearby attractions */}
                            <div className="bg-white rounded-2xl p-8 shadow-md">
                                <h2 className="text-2xl font-satoshi font-bold mb-6 text-[var(--primary-dark)]">Location</h2>
                                <div className="mb-6">
                                    <p className="text-gray-600">
                                        {stay.address.street}, {stay.address.city}, {stay.address.state}, {stay.address.country}
                                    </p>
                                </div>
                                
                                {stay.nearbyAttractions.length > 0 && (
                                    <>
                                        <h3 className="text-lg font-satoshi font-bold mb-4 text-[var(--primary-dark)]">Nearby Attractions</h3>
                                        <ul className="space-y-3">
                                            {stay.nearbyAttractions.map((attraction, index) => (
                                                <li key={index} className="flex items-start space-x-3">
                                                    <svg className="w-5 h-5 text-[var(--primary)] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    <div>
                                                        <span className="font-satoshiMed text-gray-700">{attraction.name}</span>
                                                        <p className="text-sm text-gray-600">{attraction.description}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Right column - Booking section */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24">
                                <div className="bg-white rounded-2xl p-6 shadow-md mb-6">
                                    <div className="flex justify-between items-center mb-6">
                                        <div>
                                            <span className="text-2xl font-satoshi font-bold text-[var(--primary-dark)]">
                                                From ${Math.min(...stay.roomTypes.map(room => room.priceRange.min))}/night
                                            </span>
                                        </div>
                                        <div className="flex items-center">
                                            {[...Array(stay.starRating)].map((_, index) => (
                                                <svg key={index} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Room type selector */}
                                    <div className="mb-6">
                                        <label className="block text-sm font-satoshiMed text-gray-700 mb-2">Select Room Type</label>
                                        <div className="space-y-3">
                                            {stay.roomTypes.map((room, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setSelectedRoomType(room)}
                                                    className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                                                        selectedRoomType?._id === room._id
                                                            ? 'border-[var(--primary)] bg-[var(--primary-light)] bg-opacity-10'
                                                            : 'border-gray-200 hover:border-[var(--primary)]'
                                                    }`}
                                                >
                                                    <div className="flex justify-between items-center mb-2">
                                                        <span className="font-satoshi font-bold text-[var(--text-dark)]">{room.name}</span>
                                                        <span className="text-[var(--primary)] font-satoshiMed">
                                                            ${room.priceRange.min}-${room.priceRange.max}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-gray-600">{room.description}</p>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Contact information */}
                                    <div className="border-t pt-6 mb-6">
                                        <h3 className="font-satoshi font-bold text-[var(--text-dark)] mb-4">Contact Information</h3>
                                        <div className="space-y-3">
                                            {stay.contactInfo.phone.map((phone, index) => (
                                                <a
                                                    key={index}
                                                    href={`tel:${phone}`}
                                                    className="flex items-center text-gray-600 hover:text-[var(--primary)]"
                                                >
                                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                    {phone}
                                                </a>
                                            ))}
                                            <a
                                                href={`mailto:${stay.contactInfo.email}`}
                                                className="flex items-center text-gray-600 hover:text-[var(--primary)]"
                                            >
                                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                {stay.contactInfo.email}
                                            </a>
                                        </div>
                                    </div>

                                    {/* Check-in/out times */}
                                    <div className="border-t pt-6 mb-6">
                                        <div className="flex justify-between text-sm">
                                            <div>
                                                <span className="block font-satoshiMed text-gray-700">Check-in</span>
                                                <span className="text-gray-600">{stay.checkInTime}</span>
                                            </div>
                                            <div className="text-right">
                                                <span className="block font-satoshiMed text-gray-700">Check-out</span>
                                                <span className="text-gray-600">{stay.checkOutTime}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Book now button */}
                                    <button className="w-full bg-[var(--primary)] text-white py-3 rounded-full font-satoshi font-bold hover:bg-[var(--primary-dark)] transition-colors">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Room;
