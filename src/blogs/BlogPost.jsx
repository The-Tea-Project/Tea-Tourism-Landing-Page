import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar';

function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the specific blog post
  useEffect(() => {
    const fetchBlogPost = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://tea-tourism-backend.onrender.com/blogs/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch blog post');
        }

        const blogData = await response.json();

        // Process the blog data
        const processedPost = {
          id: blogData._id,
          title: blogData.title,
          excerpt: blogData.summary,
          content: blogData.content,
          category: blogData.tags[0] || "Uncategorized", // Use first tag as category
          date: new Date(blogData.createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
          readTime: `${Math.ceil(blogData.content.split(' ').length / 200)} min read`, // Estimate read time
          author: blogData.author.name,
          authorTitle: "Tea Expert", // Default author title
          // Use a default tea image if the imageUrl is example.com placeholder
          image: blogData.imageUrl.includes('example.com')
            ? `https://source.unsplash.com/featured/?tea,${blogData.tags[0]}`
            : blogData.imageUrl,
          tags: blogData.tags
        };

        setPost(processedPost);

        // Fetch related posts (all posts for now, could be refined later)
        fetchRelatedPosts(blogData.tags);

        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching blog post:', err);
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchBlogPost();
  }, [id]);

  // Fetch related posts based on tags
  const fetchRelatedPosts = async (tags) => {
    try {
      const response = await fetch('https://tea-tourism-backend.onrender.com/blogs');
      if (!response.ok) {
        throw new Error('Failed to fetch related posts');
      }

      const data = await response.json();

      // Get 3 different posts that share at least one tag (excluding current post)
      const related = data.blogs
        .filter(blog => blog._id !== id && blog.tags.some(tag => tags.includes(tag)))
        .slice(0, 3)
        .map(blog => ({
          id: blog._id,
          title: blog.title,
          excerpt: blog.summary,
          category: blog.tags[0] || "Uncategorized",
          date: new Date(blog.createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
          readTime: `${Math.ceil(blog.content.split(' ').length / 200)} min read`,
          author: blog.author.name,
          image: blog.imageUrl.includes('example.com')
            ? `https://source.unsplash.com/featured/?tea,${blog.tags[0]}`
            : blog.imageUrl
        }));

      // If we don't have enough related posts, add some random ones
      if (related.length < 3) {
        const randomPosts = data.blogs
          .filter(blog => blog._id !== id && !related.some(r => r.id === blog._id))
          .slice(0, 3 - related.length)
          .map(blog => ({
            id: blog._id,
            title: blog.title,
            excerpt: blog.summary,
            category: blog.tags[0] || "Uncategorized",
            date: new Date(blog.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }),
            readTime: `${Math.ceil(blog.content.split(' ').length / 200)} min read`,
            author: blog.author.name,
            image: blog.imageUrl.includes('example.com')
              ? `https://source.unsplash.com/featured/?tea,${blog.tags[0]}`
              : blog.imageUrl
          }));

        setRelatedPosts([...related, ...randomPosts]);
      } else {
        setRelatedPosts(related);
      }
    } catch (err) {
      console.error('Error fetching related posts:', err);
      // Don't set main error state, just log the error
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[var(--cream)] pt-40 pb-20 flex justify-center">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary)]"></div>
          <span className="mt-4 text-[var(--primary)] font-satoshiMed">Loading blog post...</span>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !post) {
    return (
      <div className="container mx-auto py-20 px-4 text-center">
        <h1 className="text-3xl font-satoshi font-bold mb-6 text-[var(--primary-dark)]">Blog Post Not Found</h1>
        <p className="mb-8">{error || "The blog post you're looking for doesn't exist or has been removed."}</p>
        <Link to="/blogs" className="inline-flex items-center bg-[var(--primary)] text-white px-6 py-3 rounded-full font-satoshiMed hover:bg-[var(--primary-dark)] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blog
        </Link>
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
              <Link to="/blogs" className="hover:text-[var(--primary)] transition-colors">Blog</Link>
              <span className="mx-2">→</span>
              <span className="text-[var(--primary)]">{post.title}</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Post header */}
            <div className="mb-12 text-center">
              <div className="flex flex-wrap gap-2 items-center justify-center mb-4">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[var(--primary-light)] text-[var(--primary)] text-sm font-satoshiMed px-4 py-2 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl lg:text-5xl font-satoshi font-bold mb-6 text-[var(--primary-dark)]">
                {post.title}
              </h1>
              <div className="flex flex-col sm:flex-row items-center justify-center mb-6 text-gray-600">
                <span className="mb-2 sm:mb-0">{post.date}</span>
                <span className="hidden sm:inline mx-3">•</span>
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[var(--primary-light)] flex items-center justify-center mr-3">
                  <span className="text-base font-satoshiMed text-[var(--primary-dark)]">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="text-left">
                  <p className="font-satoshi font-bold text-[var(--text-dark)]">{post.author}</p>
                  <p className="text-sm text-gray-500">Tea Expert</p>
                </div>
              </div>
            </div>

            {/* Featured image */}
            <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1561296170-bee84ef356a7?q=80&w=2670&auto=format&fit=crop";
                }}
              />
            </div>

            {/* Post content */}
            <div className="prose prose-lg max-w-none mb-16">
              {/* Split the content into paragraphs */}
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Tags */}
            <div className="border-t border-gray-200 pt-8 mb-16">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-satoshi font-bold text-gray-700 mr-2">Related Topics:</span>
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    onClick={() => navigate(`/blogs?tag=${tag}`)}
                    className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full hover:bg-[var(--primary-light)] hover:text-[var(--primary)] transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share buttons */}
            <div className="flex flex-col sm:flex-row justify-between items-center border-t border-b border-gray-200 py-6 mb-16">
              <div className="font-satoshi font-bold text-gray-700 mb-4 sm:mb-0">Share this article:</div>
              <div className="flex space-x-4">
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[var(--primary)] text-gray-600 hover:text-white flex items-center justify-center transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href={`https://twitter.com/intent/tweet?text=${post.title}&url=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[var(--primary)] text-gray-600 hover:text-white flex items-center justify-center transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[var(--primary)] text-gray-600 hover:text-white flex items-center justify-center transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
                <a href={`https://api.whatsapp.com/send?text=${post.title} ${window.location.href}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[var(--primary)] text-gray-600 hover:text-white flex items-center justify-center transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Related posts */}
            {relatedPosts.length > 0 && (
              <div className="mb-20">
                <h3 className="text-2xl font-satoshi font-bold mb-8 text-[var(--primary-dark)]">You might also like</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <Link to={`/blogs/${relatedPost.id}`} key={relatedPost.id} className="group">
                      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                        <div className="h-48 overflow-hidden">
                          <img
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "https://images.unsplash.com/photo-1561296170-bee84ef356a7?q=80&w=2670&auto=format&fit=crop";
                            }}
                          />
                        </div>
                        <div className="p-5 flex-1 flex flex-col">
                          <div className="flex items-center text-xs text-gray-500 mb-2">
                            <span>{relatedPost.date}</span>
                            <span className="mx-2">•</span>
                            <span>{relatedPost.readTime}</span>
                          </div>
                          <h3 className="text-base font-satoshi font-bold mb-2 text-[var(--primary-dark)] group-hover:text-[var(--primary)] transition-colors">
                            {relatedPost.title}
                          </h3>
                          <p className="text-sm text-gray-600 line-clamp-2 mb-3 flex-1">
                            {relatedPost.excerpt}
                          </p>
                          <span className="text-[var(--primary)] text-sm font-satoshiMed group-hover:underline">Read more</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Newsletter signup */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="text-center">
                <div className="inline-block bg-[var(--primary-light)] p-3 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-satoshi font-bold mb-4 text-[var(--primary-dark)]">Enjoyed this article?</h3>
                <p className="text-gray-600 mb-8">
                  Subscribe to our newsletter for more tea insights, travel tips, and exclusive offers.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                  <button className="bg-[var(--primary)] text-white font-satoshi font-bold px-6 py-3 rounded-full hover:bg-[var(--primary-dark)] transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </main>
    </div>
  )
}

export default BlogPost 