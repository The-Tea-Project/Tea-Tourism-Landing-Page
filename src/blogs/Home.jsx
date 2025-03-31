import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Categories for filter (derived from API data later)
const initialCategories = ["All"];

function BlogsHome() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState(initialCategories);
  
  // Fetch blogs from the API
  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://tea-tourism-backend.onrender.com/blogs');
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        const data = await response.json();
        
        // Process the blogs data
        const blogs = data.blogs.map(blog => {
          // Extract unique tags for categories
          return {
            id: blog._id,
            title: blog.title,
            excerpt: blog.summary,
            content: blog.content,
            category: blog.tags[0] || "Uncategorized", // Use first tag as category
            date: new Date(blog.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }),
            readTime: `${Math.ceil(blog.content.split(' ').length / 200)} min read`, // Estimate read time
            author: blog.author.name,
            // Use a default tea image if the imageUrl is example.com placeholder
            image: blog.imageUrl.includes('example.com') 
              ? `https://source.unsplash.com/featured/?tea,${blog.tags[0]}`
              : blog.imageUrl,
            featured: blog.featured,
            tags: blog.tags
          };
        });
        
        setBlogPosts(blogs);
        
        // Extract unique categories from blog tags
        const uniqueTags = new Set(["All"]);
        blogs.forEach(blog => {
          blog.tags.forEach(tag => uniqueTags.add(tag));
        });
        setCategories(Array.from(uniqueTags));
        
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError(err.message);
        setIsLoading(false);
      }
    };
    
    fetchBlogs();
  }, []);
  
  // Filter blog posts based on active category and search term
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.tags.includes(activeCategory);
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Featured post is the first one marked as featured
  const featuredPost = blogPosts.find(post => post.featured);
  
  return (
    <main className="min-h-screen bg-[var(--cream)] pt-20 pb-20">
      {/* Decorative elements */}
      <div className="absolute top-40 left-0 w-40 h-40 rounded-full bg-[var(--primary-light)] opacity-10 blur-xl"></div>
      <div className="absolute top-80 right-10 w-60 h-60 rounded-full bg-[var(--primary-light)] opacity-10 blur-xl"></div>
      
      {/* Header section */}
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-[var(--primary-light)] text-[var(--primary)] text-sm font-satoshiMed px-4 py-2 rounded-full inline-block mb-4">Our Tea Stories</span>
          <h1 className="text-5xl font-satoshi font-bold mb-6 text-[var(--primary-dark)]">
            Tea Tourism Blog
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            Discover stories, insights and guides from tea estates around the world. Learn about tea culture, cultivation techniques, and travel tips.
          </p>
          
          {/* Search bar */}
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search articles..."
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
        
        {/* Loading state */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary)]"></div>
            <span className="ml-3 text-[var(--primary)] font-satoshiMed">Loading blog posts...</span>
          </div>
        )}
        
        {/* Error state */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-8 max-w-2xl mx-auto text-center">
            <p className="font-satoshiMed">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-2 text-sm underline"
            >
              Try again
            </button>
          </div>
        )}
        
        {/* Content (only show when not loading) */}
        {!isLoading && !error && (
          <>
            {/* Categories filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-satoshiMed transition-colors ${
                    activeCategory === category 
                      ? 'bg-[var(--primary)] text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
            
            {/* Featured post */}
            {featuredPost && (
              <div className="mb-16">
                <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="h-full">
                      <img 
                        src={featuredPost.image} 
                        alt={featuredPost.title} 
                        className="h-[400px] w-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null; 
                          e.target.src = "https://images.unsplash.com/photo-1561296170-bee84ef356a7?q=80&w=2670&auto=format&fit=crop";
                        }}
                      />
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center mb-4 flex-wrap gap-2">
                        <span className="bg-[var(--primary-light)] text-[var(--primary)] text-xs font-satoshiMed px-3 py-1 rounded-full">
                          {featuredPost.category}
                        </span>
                        <span className="mx-2 text-gray-300 hidden sm:inline">•</span>
                        <span className="text-gray-500 text-sm">{featuredPost.date}</span>
                        <span className="mx-2 text-gray-300 hidden sm:inline">•</span>
                        <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
                      </div>
                      <h2 className="text-3xl font-satoshi font-bold mb-4 text-[var(--primary-dark)]">
                        {featuredPost.title}
                      </h2>
                      <p className="text-gray-600 mb-6">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center mb-6">
                        <div className="w-10 h-10 rounded-full bg-[var(--primary-light)] flex items-center justify-center mr-3">
                          <span className="text-sm font-satoshiMed text-[var(--primary-dark)]">
                            {featuredPost.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <span className="text-gray-700 font-satoshiMed">{featuredPost.author}</span>
                      </div>
                      <Link 
                        to={`/blogs/${featuredPost.id}`} 
                        className="inline-flex items-center bg-[var(--primary)] text-white px-6 py-3 rounded-full font-satoshiMed hover:bg-[var(--primary-dark)] transition-colors"
                      >
                        Read Article
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Blog posts grid */}
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <Link to={`/blogs/${post.id}`} key={post.id} className="group">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.target.onerror = null; 
                            e.target.src = "https://images.unsplash.com/photo-1561296170-bee84ef356a7?q=80&w=2670&auto=format&fit=crop";
                          }}
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-[var(--primary-light)] text-[var(--primary)] text-xs font-satoshiMed px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-satoshi font-bold mb-3 text-[var(--primary-dark)] group-hover:text-[var(--primary)] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 flex-1">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-[var(--primary-light)] flex items-center justify-center mr-3">
                            <span className="text-xs font-satoshiMed text-[var(--primary-dark)]">
                              {post.author.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <span className="text-sm text-gray-700 font-satoshiMed">{post.author}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center bg-white p-10 rounded-xl shadow-md max-w-xl mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[var(--primary)] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 16h.01M20 5H4a1 1 0 00-1 1v10a1 1 0 001 1h16a1 1 0 001-1V6a1 1 0 00-1-1z" />
                </svg>
                <h3 className="text-xl font-satoshi font-bold mb-2">No articles found</h3>
                <p className="text-gray-600 mb-4">
                  We couldn't find any articles matching your search criteria.
                </p>
                <button 
                  onClick={() => {setActiveCategory("All"); setSearchTerm("");}}
                  className="text-[var(--primary)] font-satoshiMed hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </>
        )}
        
        {/* Newsletter signup */}
        <div className="mt-20 bg-[var(--primary)] rounded-2xl p-8 lg:p-12 text-center text-white shadow-lg relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-satoshi font-bold mb-4">Stay Updated with Tea Tourism</h2>
            <p className="text-white/80 mb-8">
              Subscribe to our newsletter to receive the latest articles, travel tips, and special offers directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-[var(--primary)] font-satoshi font-bold px-6 py-3 rounded-full hover:bg-white/90 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-white/60 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default BlogsHome 