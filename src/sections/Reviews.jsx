import React from 'react'

function Reviews() {
  const blogPosts = [
    {
      id: 1,
      category: "Cultural Tales",
      title: "The Ancient Art of Tea Plucking",
      description: "Read detailed narratives about tea estates, time-honored tea-making techniques, and the communities that keep these traditions alive.",
      image: "/assets/blog-culture.jpg",
      author: "Maya Patel",
      date: "July 15, 2023",
      readTime: "8 min read",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      id: 2,
      category: "Travel Memoirs",
      title: "Journey Through Darjeeling's Hidden Trails",
      description: "Enjoy personal stories and travel accounts from both visitors and locals, sharing their unique experiences with tea tourism.",
      image: "/assets/blog-travel.jpg",
      author: "James Wilson",
      date: "August 3, 2023",
      readTime: "12 min read",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 3,
      category: "Helpful Tips & Guides",
      title: "The Ultimate Guide to Tea Tasting Ceremonies",
      description: "Gain practical insights on how to fully immerse yourself in the local culture while exploring the wonders of tea country.",
      image: "/assets/blog-guide.jpg",
      author: "Sophia Chen",
      date: "September 21, 2023",
      readTime: "10 min read",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <div id="blogs" className="w-full bg-[var(--cream)] py-[100px] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[var(--light-bg)] to-transparent"></div>
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[var(--primary)] opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-[var(--light-bg)] to-transparent"></div>
      
      <img src="/assets/tea-leaves-pattern.svg" alt="Tea Leaves" className="absolute right-0 top-40 w-64 opacity-10 hidden lg:block" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-[var(--primary-light)] bg-opacity-20 text-[var(--primary)] text-sm font-medium mb-4">OUR BLOG</span>
          <h2 className="font-satoshi text-[40px] lg:text-[56px] font-bold mb-6 text-[var(--text-dark)]">Educational Blogs</h2>
          <div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-6 rounded-full"></div>
          <p className="font-satoshiMed text-[18px] text-[var(--text-dark)] opacity-90">
            Unlock the Stories Behind Tea. Our blog is your doorway to exploring the intricate world of tea culture, age-old traditions, and innovative sustainable tourism practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/3 left-0 w-full border-t-2 border-dashed border-[var(--primary-light)] opacity-30 z-0"></div>
          
          {blogPosts.map((post, index) => (
            <div key={post.id} className={`relative z-10 ${index === 1 ? 'md:mt-16' : ''}`}>
              {/* Category badge */}
              <div className="absolute -top-3 left-8 z-20 py-1 px-3 bg-[var(--primary)] text-white text-xs font-bold rounded-full shadow-lg">
                {post.category}
              </div>
              
              <div className="tea-card bg-white overflow-hidden transform hover:-translate-y-2 transition-all duration-500">
                {/* Image section */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Article info */}
                  <div className="absolute bottom-0 left-0 w-full p-4 flex justify-between items-center">
                    <div className="flex items-center">
                      <img src="/assets/avatar-placeholder.jpg" alt="Author" className="w-8 h-8 rounded-full border-2 border-white mr-2" />
                      <span className="text-white text-sm font-medium">{post.author}</span>
                    </div>
                    <span className="text-white/80 text-xs">{post.readTime}</span>
                  </div>
                </div>
                
                {/* Content section */}
                <div className="p-6 relative">
                  {/* Icon */}
                  <div className="absolute -top-8 right-6 w-16 h-16 tea-icon-bg rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                    {post.icon}
                  </div>
                  
                  <span className="text-[var(--primary-light)] text-sm font-medium">{post.date}</span>
                  <h3 className="font-satoshi text-[24px] font-bold my-3 text-[var(--text-dark)]">{post.title}</h3>
                  <p className="font-satoshiMed text-[16px] mb-6 text-[var(--text-dark)]">
                    {post.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <a href="#" className="text-[var(--primary)] font-satoshi font-bold hover:underline flex items-center group">
                      Read article
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                    
                    <div className="flex space-x-2">
                      <span className="w-8 h-8 rounded-full bg-[var(--primary-light)] bg-opacity-10 flex items-center justify-center text-[var(--primary)]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </span>
                      <span className="w-8 h-8 rounded-full bg-[var(--primary-light)] bg-opacity-10 flex items-center justify-center text-[var(--primary)]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center justify-center px-8 py-3 border-2 border-[var(--primary)] text-[var(--primary)] font-bold rounded-full transition-all hover:bg-[var(--primary)] hover:text-white transform hover:scale-105">
            <span>View All Articles</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Reviews