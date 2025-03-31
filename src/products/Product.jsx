import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';

function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);

    // Fetch product data
    useEffect(() => {
        const fetchProduct = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`https://tea-tourism-backend.onrender.com/products/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                const data = await response.json();
                
                // Process images to use Unsplash if example.com
                const processedData = {
                    ...data,
                    mainImage: data.mainImage.includes('example.com') 
                        ? `https://source.unsplash.com/featured/?tea,${data.tags[0]}`
                        : data.mainImage,
                    images: data.images.map(img => 
                        img.includes('example.com') 
                            ? `https://source.unsplash.com/featured/?tea,${data.tags[0]}`
                            : img
                    )
                };
                
                setProduct(processedData);
                setIsLoading(false);
            } catch (err) {
                console.error('Error fetching product:', err);
                setError(err.message);
                setIsLoading(false);
            }
        };
        
        fetchProduct();
    }, [id]);

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value);
        if (value > 0 && value <= (product?.stock || 1)) {
            setQuantity(value);
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-[var(--cream)] pt-40 pb-20 flex justify-center">
                <div className="flex flex-col items-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary)]"></div>
                    <span className="mt-4 text-[var(--primary)] font-satoshiMed">Loading product...</span>
                </div>
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className="min-h-screen bg-[var(--cream)] pt-20 pb-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl font-satoshi font-bold mb-6 text-[var(--primary-dark)]">Product Not Found</h1>
                    <p className="mb-8">{error || "This product doesn't exist or has been removed."}</p>
                    <Link to="/products" className="inline-flex items-center bg-[var(--primary)] text-white px-6 py-3 rounded-full font-satoshiMed hover:bg-[var(--primary-dark)] transition-colors">
                        Back to Products
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="flex bg-[var(--cream)] flex-col items-center justify-center w-full p-10">
      <NavBar />
        <main className="min-h-screen bg-[var(--cream)] pt-20 pb-20">
            {/* Decorative elements */}
            <div className="absolute top-40 left-0 w-40 h-40 rounded-full bg-[var(--primary-light)] opacity-10 blur-xl"></div>
            <div className="absolute top-80 right-10 w-60 h-60 rounded-full bg-[var(--primary-light)] opacity-10 blur-xl"></div>
            
            <div className="container mx-auto px-4">
                {/* Breadcrumbs */}
                <div className="mb-10">
                    <div className="flex items-center text-[var(--text-dark)] text-sm font-satoshiMed">
                        <Link to="/" className="hover:text-[var(--primary)] transition-colors">Home</Link>
                        <span className="mx-2">→</span>
                        <Link to="/products" className="hover:text-[var(--primary)] transition-colors">Products</Link>
                        <span className="mx-2">→</span>
                        <span className="text-[var(--primary)]">{product.name}</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Product Images */}
                    <div className="space-y-4">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                            <img 
                                src={selectedImage === 0 ? product.mainImage : product.images[selectedImage - 1]}
                                alt={product.name}
                                className="w-full h-[500px] object-cover"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://images.unsplash.com/photo-1561296170-bee84ef356a7?q=80&w=2670&auto=format&fit=crop";
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
                                    src={product.mainImage}
                                    alt={`${product.name} main`}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                            {product.images.map((image, index) => (
                                <button 
                                    key={index}
                                    onClick={() => setSelectedImage(index + 1)}
                                    className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                                        selectedImage === index + 1 ? 'border-[var(--primary)]' : 'border-transparent'
                                    }`}
                                >
                                    <img 
                                        src={image}
                                        alt={`${product.name} ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-8">
                        <div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {product.tags.map((tag, index) => (
                                    <span 
                                        key={index}
                                        className="bg-[var(--primary-light)] text-[var(--primary)] text-sm font-satoshiMed px-3 py-1 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h1 className="text-4xl font-satoshi font-bold mb-4 text-[var(--primary-dark)]">
                                {product.name}
                            </h1>
                            <p className="text-gray-600 text-lg mb-6">
                                {product.description}
                            </p>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="flex items-center gap-2">
                                    {product.discountPrice ? (
                                        <>
                                            <span className="text-3xl font-satoshi font-bold text-[var(--primary)]">
                                                ${product.discountPrice.toFixed(2)}
                                            </span>
                                            <span className="text-xl text-gray-400 line-through">
                                                ${product.price.toFixed(2)}
                                            </span>
                                        </>
                                    ) : (
                                        <span className="text-3xl font-satoshi font-bold text-[var(--primary)]">
                                            ${product.price.toFixed(2)}
                                        </span>
                                    )}
                                </div>
                                {product.stock > 0 ? (
                                    <span className="bg-green-100 text-green-800 text-sm font-satoshiMed px-3 py-1 rounded-full">
                                        In Stock ({product.stock})
                                    </span>
                                ) : (
                                    <span className="bg-red-100 text-red-800 text-sm font-satoshiMed px-3 py-1 rounded-full">
                                        Out of Stock
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Specifications */}
                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <h2 className="text-xl font-satoshi font-bold mb-4 text-[var(--primary-dark)]">
                                Specifications
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-gray-500 text-sm">Type</p>
                                    <p className="font-satoshiMed">{product.specifications.type}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">Grade</p>
                                    <p className="font-satoshiMed">{product.specifications.grade}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">Flush Type</p>
                                    <p className="font-satoshiMed">{product.specifications.flushType}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">Certifications</p>
                                    <p className="font-satoshiMed">{product.specifications.certifications}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">Origin</p>
                                    <p className="font-satoshiMed">{product.origin}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">Seller</p>
                                    <p className="font-satoshiMed">{product.seller.name}</p>
                                </div>
                            </div>
                        </div>

                        {/* Add to Cart */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <input
                                        type="number"
                                        value={quantity}
                                        onChange={handleQuantityChange}
                                        min="1"
                                        max={product.stock}
                                        className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                                    />
                                </div>
                                <button 
                                    className="flex-1 bg-[var(--primary)] text-white px-6 py-3 rounded-full font-satoshiMed hover:bg-[var(--primary-dark)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={product.stock === 0}
                                >
                                    Add to Cart
                                </button>
                            </div>
                            <button className="w-full border-2 border-[var(--primary)] text-[var(--primary)] px-6 py-3 rounded-full font-satoshiMed hover:bg-[var(--primary-light)] transition-colors">
                                Add to Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </div>
    );
}

export default Product; 