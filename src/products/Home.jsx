import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProductsHome() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTag, setActiveTag] = useState('all');
    const [tags, setTags] = useState(['all']);

    // Fetch products from API
    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('https://tea-tourism-backend.onrender.com/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                
                // Process the products data
                const processedProducts = data.products.map(product => ({
                    ...product,
                    image: product.mainImage.includes('example.com') 
                        ? `https://source.unsplash.com/featured/?tea,${product.tags[0]}`
                        : product.mainImage
                }));
                
                setProducts(processedProducts);
                setFilteredProducts(processedProducts);
                
                // Extract unique tags
                const uniqueTags = new Set(['all']);
                processedProducts.forEach(product => {
                    product.tags.forEach(tag => uniqueTags.add(tag));
                });
                setTags(Array.from(uniqueTags));
                
                setIsLoading(false);
            } catch (err) {
                console.error('Error fetching products:', err);
                setError(err.message);
                setIsLoading(false);
            }
        };
        
        fetchProducts();
    }, []);

    // Filter products based on search term and active tag
    useEffect(() => {
        const filtered = products.filter(product => {
            const matchesSearch = (
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
            const matchesTag = activeTag === 'all' || product.tags.includes(activeTag);
            return matchesSearch && matchesTag;
        });
        setFilteredProducts(filtered);
    }, [searchTerm, activeTag, products]);

    return (
        <main className="min-h-screen bg-[var(--cream)] pt-20 pb-20">
            {/* Decorative elements */}
            <div className="absolute top-40 left-0 w-40 h-40 rounded-full bg-[var(--primary-light)] opacity-10 blur-xl"></div>
            <div className="absolute top-80 right-10 w-60 h-60 rounded-full bg-[var(--primary-light)] opacity-10 blur-xl"></div>
            
            <div className="container mx-auto px-4">
                {/* Header section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="bg-[var(--primary-light)] text-[var(--primary)] text-sm font-satoshiMed px-4 py-2 rounded-full inline-block mb-4">
                        Tea Marketplace
                    </span>
                    <h1 className="text-5xl font-satoshi font-bold mb-6 text-[var(--primary-dark)]">
                        Discover Premium Teas
                    </h1>
                    <p className="text-lg text-gray-600 mb-10">
                        Explore our curated collection of authentic tea products from the finest tea gardens around the world.
                    </p>
                    
                    {/* Search bar */}
                    <div className="relative max-w-xl mx-auto">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-white border border-gray-200 rounded-full px-6 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] pl-12"
                        />
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Tags filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {tags.map((tag, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTag(tag)}
                            className={`px-4 py-2 rounded-full text-sm font-satoshiMed transition-colors ${
                                activeTag === tag 
                                    ? 'bg-[var(--primary)] text-white' 
                                    : 'bg-white text-gray-600 hover:bg-gray-100'
                            }`}
                        >
                            {tag.charAt(0).toUpperCase() + tag.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Loading state */}
                {isLoading && (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary)]"></div>
                        <span className="ml-3 text-[var(--primary)] font-satoshiMed">Loading products...</span>
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

                {/* Products grid */}
                {!isLoading && !error && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.map((product) => (
                            <div key={product._id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                                <div className="relative h-64 overflow-hidden">
                                    <img 
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://images.unsplash.com/photo-1561296170-bee84ef356a7?q=80&w=2670&auto=format&fit=crop";
                                        }}
                                    />
                                    {product.discountPrice && (
                                        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-satoshiMed">
                                            Save ₹{(product.price - product.discountPrice).toFixed(2)}
                                        </div>
                                    )}
                                </div>
                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {product.tags.map((tag, index) => (
                                            <span 
                                                key={index}
                                                className="bg-[var(--primary-light)] text-[var(--primary)] text-xs px-2 py-1 rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-xl font-satoshi font-bold mb-2 text-[var(--primary-dark)]">
                                        {product.name}
                                    </h3>
                                    <p className="text-gray-600 mb-4 line-clamp-2">
                                        {product.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            {product.discountPrice ? (
                                                <>
                                                    <span className="text-2xl font-satoshi font-bold text-[var(--primary)]">
                                                        ₹{product.discountPrice.toFixed(2)}
                                                    </span>
                                                    <span className="text-gray-400 line-through">
                                                        ₹{product.price.toFixed(2)}
                                                    </span>
                                                </>
                                            ) : (
                                                <span className="text-2xl font-satoshi font-bold text-[var(--primary)]">
                                                    ₹{product.price.toFixed(2)}
                                                </span>
                                            )}
                                        </div>
                                        <Link 
                                            to={`/products/${product._id}`}
                                            className="bg-[var(--primary)] text-white px-4 py-2 rounded-full hover:bg-[var(--primary-dark)] transition-colors"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* No results */}
                {!isLoading && !error && filteredProducts.length === 0 && (
                    <div className="text-center bg-white p-10 rounded-xl shadow-md max-w-xl mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[var(--primary)] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 16h.01M20 5H4a1 1 0 00-1 1v10a1 1 0 001 1h16a1 1 0 001-1V6a1 1 0 00-1-1z" />
                        </svg>
                        <h3 className="text-xl font-satoshi font-bold mb-2">No products found</h3>
                        <p className="text-gray-600 mb-4">
                            We couldn't find any products matching your criteria.
                        </p>
                        <button 
                            onClick={() => {setActiveTag('all'); setSearchTerm('');}}
                            className="text-[var(--primary)] font-satoshiMed hover:underline"
                        >
                            Clear filters
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
}

export default ProductsHome;