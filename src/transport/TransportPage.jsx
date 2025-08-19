import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';

function TransportPage() {
    const { id } = useParams();
    const [transport, setTransport] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedService, setSelectedService] = useState(null);
    const [selectedVehicle, setSelectedVehicle] = useState(null);

    useEffect(() => {
        const fetchTransport = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`https://tea-tourism-backend.onrender.com/transport/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch transport details');
                }
                const data = await response.json();
                
                // Process images with fallback
                const processedData = {
                    ...data,
                    mainImage: data.mainImage?.includes('image_url') 
                        ? `https://source.unsplash.com/featured/?transport,${data.type}`
                        : data.mainImage,
                    images: data.images.map(img => 
                        img.includes('image_url') 
                            ? `https://source.unsplash.com/featured/?transport,${data.type}`
                            : img
                    )
                };
                
                setTransport(processedData);
                if (processedData.services.length > 0) {
                    setSelectedService(processedData.services[0]);
                }
                if (processedData.vehicles.length > 0) {
                    setSelectedVehicle(processedData.vehicles[0]);
                }
                setIsLoading(false);
            } catch (err) {
                console.error('Error fetching transport details:', err);
                setError(err.message);
                setIsLoading(false);
            }
        };
        
        fetchTransport();
    }, [id]);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-[var(--cream)] pt-40 pb-20 flex justify-center">
                <div className="flex flex-col items-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary)]"></div>
                    <span className="mt-4 text-[var(--primary)] font-satoshiMed">Loading transport details...</span>
                </div>
            </div>
        );
    }

    if (error || !transport) {
        return (
            <div className="min-h-screen bg-[var(--cream)] pt-20 pb-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl font-satoshi font-bold mb-6 text-[var(--primary-dark)]">Transport Service Not Found</h1>
                    <p className="mb-8">{error || "This transport service doesn't exist or has been removed."}</p>
                    <Link to="/transport" className="inline-flex items-center bg-[var(--primary)] text-white px-6 py-3 rounded-full font-satoshiMed hover:bg-[var(--primary-dark)] transition-colors">
                        Back to Transport Services
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="flex bg-[var(--cream)] flex-col items-center justify-center w-full p-10">
            <NavBar />
            <main className="pt-24 pb-20">
                {/* Hero Section */}
                <div className="relative h-[500px] mb-12">
                    <div className="absolute inset-0">
                        <img 
                            src={transport?.mainImage}
                            alt={transport?.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?q=80&w=2672&auto=format&fit=crop";
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80"></div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="container mx-auto">
                            {/* Breadcrumbs */}
                            <div className="flex items-center text-white/80 text-sm font-satoshiMed mb-6">
                                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                                <span className="mx-2">→</span>
                                <Link to="/transport" className="hover:text-white transition-colors">Transport</Link>
                                <span className="mx-2">→</span>
                                <span className="text-white">{transport?.name}</span>
                            </div>

                            <div className="flex flex-wrap gap-3 mb-4">
                                {transport?.serviceAreas.map((area, index) => (
                                    <span key={index} className="bg-white/90 backdrop-blur-sm text-sm px-3 py-1.5 rounded-full text-gray-800">
                                        {area.city}, {area.state}
                                    </span>
                                ))}
                            </div>
                            <h1 className="text-4xl md:text-5xl font-satoshi font-bold text-white mb-4">{transport?.name}</h1>
                            <p className="text-white/90 text-lg max-w-2xl">{transport?.description}</p>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content - Left Column */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Services section */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg">
                                <h2 className="text-2xl font-satoshi font-bold mb-6 text-[var(--primary-dark)] flex items-center">
                                    <svg className="w-6 h-6 mr-2 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                    Available Services
                                </h2>
                                <div className="grid gap-4">
                                    {transport?.services.map((service, index) => (
                                        <div
                                            key={index}
                                            className={`group cursor-pointer p-6 rounded-xl border-2 transition-all hover:shadow-md ${
                                                selectedService?._id === service._id
                                                    ? 'border-[var(--primary)] bg-[var(--primary-light)] bg-opacity-5'
                                                    : 'border-gray-100 hover:border-[var(--primary)]'
                                            }`}
                                            onClick={() => setSelectedService(service)}
                                        >
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                                <div>
                                                    <h3 className="font-satoshi font-bold text-lg text-[var(--text-dark)] group-hover:text-[var(--primary)] transition-colors">
                                                        {service.name}
                                                    </h3>
                                                    <p className="text-gray-600 mt-1">{service.description}</p>
                                                    <div className="flex flex-wrap gap-2 mt-3">
                                                        {service.includes.map((item, idx) => (
                                                            <span key={idx} className="text-xs bg-[var(--primary-light)] bg-opacity-10 text-[var(--primary)] px-3 py-1 rounded-full">
                                                                ✓ {item}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-end">
                                                    <span className="text-[var(--primary)] font-satoshiMed text-lg">
                                                        ₹{service.price.min.toLocaleString()}
                                                    </span>
                                                    <span className="text-sm text-gray-500">
                                                        onwards
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Vehicles section */}
                            {transport?.vehicles.length > 0 && (
                                <div className="bg-white rounded-2xl p-8 shadow-lg">
                                    <h2 className="text-2xl font-satoshi font-bold mb-6 text-[var(--primary-dark)] flex items-center">
                                        <svg className="w-6 h-6 mr-2 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                        </svg>
                                        Our Fleet
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {transport.vehicles.map((vehicle, index) => (
                                            <div
                                                key={index}
                                                className={`group cursor-pointer p-6 rounded-xl border-2 transition-all hover:shadow-md ${
                                                    selectedVehicle?._id === vehicle._id
                                                        ? 'border-[var(--primary)] bg-[var(--primary-light)] bg-opacity-5'
                                                        : 'border-gray-100 hover:border-[var(--primary)]'
                                                }`}
                                                onClick={() => setSelectedVehicle(vehicle)}
                                            >
                                                <div className="flex justify-between items-start mb-3">
                                                    <h3 className="font-satoshi font-bold text-lg text-[var(--text-dark)] group-hover:text-[var(--primary)] transition-colors">
                                                        {vehicle.name}
                                                    </h3>
                                                    <span className="text-[var(--primary)] font-satoshiMed">
                                                        ₹{vehicle.priceRange.min.toLocaleString()}+
                                                    </span>
                                                </div>
                                                <p className="text-gray-600 mb-3">Capacity: {vehicle.capacity} persons</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {vehicle.features.map((feature, idx) => (
                                                        <span key={idx} className="text-xs bg-[var(--primary-light)] bg-opacity-10 text-[var(--primary)] px-3 py-1 rounded-full">
                                                            {feature}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Tea Experiences section */}
                            {transport?.teaRelated.teaActivities.length > 0 && (
                                <div className="bg-white rounded-2xl p-8 shadow-lg">
                                    <h2 className="text-2xl font-satoshi font-bold mb-6 text-[var(--primary-dark)] flex items-center">
                                        <svg className="w-6 h-6 mr-2 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                        </svg>
                                        Tea Experiences
                                    </h2>
                                    <p className="text-gray-600 mb-6 text-lg">{transport.teaRelated.teaDescription}</p>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {transport.teaRelated.teaActivities.map((activity, index) => (
                                            <div key={index} className="flex items-start space-x-3 p-4 bg-[var(--primary-light)] bg-opacity-5 rounded-xl">
                                                <svg className="w-5 h-5 text-[var(--primary)] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-gray-700">{activity}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Booking Sidebar - Right Column */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                {/* Booking Card */}
                                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[var(--primary-light)]">
                                    <h3 className="text-xl font-satoshi font-bold mb-6 text-[var(--primary-dark)] flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        Book Your Tour
                                    </h3>

                                    {/* Operating Hours */}
                                    <div className="mb-6">
                                        <h4 className="font-satoshiMed text-gray-700 mb-3 flex items-center">
                                            <svg className="w-4 h-4 mr-2 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Operating Hours
                                        </h4>
                                        <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                                            {transport?.operatingHours.map((hours, index) => (
                                                <div key={index} className="flex justify-between text-sm">
                                                    <span className="font-satoshiMed text-gray-600">{hours.day}</span>
                                                    {hours.isClosed ? (
                                                        <span className="text-red-500 font-satoshiMed">Closed</span>
                                                    ) : (
                                                        <span className="text-[var(--primary)]">{hours.open} - {hours.close}</span>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Contact Information */}
                                    <div className="space-y-4 mb-6">
                                        {transport?.contactInfo.phone.map((phone, index) => (
                                            <a
                                                key={index}
                                                href={`tel:${phone}`}
                                                className="flex items-center text-gray-600 hover:text-[var(--primary)] p-2 rounded-lg hover:bg-[var(--primary-light)] hover:bg-opacity-10 transition-all"
                                            >
                                                <svg className="w-5 h-5 mr-3 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                                {phone}
                                            </a>
                                        ))}
                                        <a
                                            href={`mailto:${transport?.contactInfo.email}`}
                                            className="flex items-center text-gray-600 hover:text-[var(--primary)] p-2 rounded-lg hover:bg-[var(--primary-light)] hover:bg-opacity-10 transition-all"
                                        >
                                            <svg className="w-5 h-5 mr-3 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            {transport?.contactInfo.email}
                                        </a>
                                    </div>

                                    {/* Book Now Button */}
                                    <button className="w-full bg-[var(--primary)] text-white py-4 rounded-xl font-satoshi font-bold hover:bg-[var(--primary-dark)] transition-colors flex items-center justify-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        Book Now
                                    </button>
                                </div>

                                {/* Service Areas Card */}
                                <div className="bg-white rounded-2xl p-6 shadow-lg">
                                    <h3 className="text-xl font-satoshi font-bold mb-4 text-[var(--primary-dark)] flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        Service Areas
                                    </h3>
                                    {transport?.serviceAreas.map((area, index) => (
                                        <div key={index} className="mb-4 last:mb-0">
                                            <h4 className="font-satoshiMed text-[var(--primary)] mb-2">{area.city}, {area.state}</h4>
                                            <ul className="space-y-2">
                                                {area.coverage.map((location, idx) => (
                                                    <li key={idx} className="text-sm text-gray-600 flex items-center bg-gray-50 p-2 rounded-lg">
                                                        <svg className="w-4 h-4 mr-2 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        {location}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default TransportPage;
