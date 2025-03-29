import React from 'react'
import { Link, useParams } from 'react-router-dom'

// Dummy blog data - same as in Home.jsx
const blogPosts = [
  {
    id: 1,
    title: "The Art of Tea Cultivation in Darjeeling",
    excerpt: "Discover the centuries-old techniques that make Darjeeling tea one of the most sought-after varieties in the world.",
    category: "Tea Culture",
    date: "April 10, 2024",
    readTime: "8 min read",
    author: "Priya Sharma",
    authorTitle: "Tea Expert & Cultural Guide",
    image: "/assets/blog-1.jpg",
    content: `
      <p>Tea cultivation in Darjeeling is not just an agricultural practice but an art form that has been perfected over generations. Nestled in the foothills of the Himalayas, the tea gardens of Darjeeling benefit from unique geographical and climatic conditions that contribute to the distinctive flavor profile of Darjeeling tea.</p>
      
      <h2>The Perfect Environment</h2>
      <p>At elevations ranging from 600 to 2,000 meters above sea level, Darjeeling tea gardens experience cool, misty conditions and receive abundant rainfall. The combination of altitude, soil composition, rainfall, and sunlight creates the perfect environment for growing tea bushes that produce the celebrated "champagne of teas."</p>
      
      <p>The steep slopes not only provide proper drainage but also expose the tea plants to varying degrees of sunlight throughout the day, enhancing their flavor complexity. The soil, rich in minerals from the Himalayan region, further contributes to the tea's distinctive muscatel character.</p>
      
      <h2>Traditional Harvesting Techniques</h2>
      <p>One of the most remarkable aspects of Darjeeling tea cultivation is the harvesting process, which has remained largely unchanged for centuries. Skilled tea pluckers, predominantly women, carefully select only the most tender leaves—typically the bud and two adjacent leaves—using a technique known as "fine plucking."</p>
      
      <p>This meticulous process ensures that only the highest quality leaves make it to processing. An experienced plucker can collect between 20-30 kilograms of leaves per day, moving swiftly but carefully along the bushes to harvest just the right leaves while allowing others to mature.</p>
      
      <h2>Seasonal Flushes</h2>
      <p>Darjeeling tea is harvested in distinct seasons, or "flushes," each producing tea with unique characteristics:</p>
      
      <ul>
        <li><strong>First Flush (March-April):</strong> Light, floral, and delicate with a subtle astringency</li>
        <li><strong>Second Flush (May-June):</strong> Fuller-bodied with the distinctive muscatel flavor</li>
        <li><strong>Monsoon Flush (July-September):</strong> Stronger and less nuanced, typically used in blends</li>
        <li><strong>Autumn Flush (October-November):</strong> Full-bodied with a rich copper color</li>
      </ul>
      
      <p>Connoisseurs worldwide eagerly anticipate each flush, particularly the prized second flush with its grape-like muscatel notes.</p>
      
      <h2>Processing Methods</h2>
      <p>The processing of Darjeeling tea follows the orthodox method, which preserves the leaf's integrity and allows for the development of complex flavors. The steps include:</p>
      
      <ol>
        <li><strong>Withering:</strong> Freshly plucked leaves are spread out to reduce moisture content</li>
        <li><strong>Rolling:</strong> The withered leaves are rolled to break down cell walls and release essential oils</li>
        <li><strong>Oxidation:</strong> Rolled leaves are exposed to oxygen, developing flavor and color</li>
        <li><strong>Drying:</strong> The oxidized leaves are dried to halt oxidation and preserve flavor</li>
      </ol>
      
      <p>The carefully controlled oxidation process is particularly crucial for developing the complex flavor profile that Darjeeling tea is known for.</p>
      
      <h2>Preserving Tradition in Modern Times</h2>
      <p>While many tea-producing regions have moved toward mechanization, Darjeeling remains committed to traditional methods. This commitment to quality over quantity is one reason why genuine Darjeeling tea accounts for less than 1% of India's total tea production, making it truly precious.</p>
      
      <p>The Geographical Indication (GI) status granted to Darjeeling tea protects its heritage and ensures that only tea produced in this specific region can bear the Darjeeling name and logo.</p>
      
      <p>As you sip a cup of authentic Darjeeling tea, remember that you're experiencing the result of centuries of expertise, perfect natural conditions, and the dedicated work of skilled artisans who continue to preserve this living tradition in the mist-covered hills of the Himalayas.</p>
    `
  },
  {
    id: 2,
    title: "5 Hidden Tea Estates Worth Visiting This Summer",
    excerpt: "Beyond the popular tourist destinations lie these hidden gems that offer authentic tea experiences and breathtaking views.",
    category: "Travel",
    date: "April 5, 2024",
    readTime: "6 min read",
    author: "Michael Chen",
    authorTitle: "Travel Writer & Tea Enthusiast",
    image: "/assets/blog-2.jpg",
    content: `
      <p>While famous tea destinations like Darjeeling and Assam attract thousands of tourists each year, there are several lesser-known tea estates that offer equally enchanting experiences without the crowds. These hidden gems provide authentic insights into tea production while treating visitors to stunning landscapes and unique cultural encounters.</p>
      
      <h2>1. Temi Tea Garden, Sikkim</h2>
      <p>Nestled in the southern region of Sikkim, the Temi Tea Garden is the only tea estate in this small Himalayan state. Established in 1969, this organic garden spreads across rolling hills with the majestic Kanchenjunga mountain range serving as a backdrop.</p>
      
      <p>What makes Temi special is not just its exceptional tea but also its commitment to sustainable farming practices. The garden produces some of the finest orthodox teas, and visitors can tour the factory to witness traditional processing methods firsthand.</p>
      
      <p>Stay at the charming Temi Tea Bungalow, a heritage property that offers panoramic views of the estate and mountains. The best time to visit is between March and May when the first flush is harvested, or September to November for the autumn flush.</p>
      
      <h2>2. Kausani Tea Estate, Uttarakhand</h2>
      <p>Perched at an altitude of 1,800 meters in the Kumaon region of the Himalayas, the Kausani Tea Estate offers breathtaking views of the snow-capped Nanda Devi, Trishul, and Panchachuli peaks. This relatively small estate produces high-quality orthodox black and green teas using traditional methods.</p>
      
      <p>What sets Kausani apart is its location in a region less associated with tea tourism. The estate provides a tranquil retreat away from the typical tourist circuit, with guided walks through tea gardens and comprehensive factory tours explaining the entire process from plucking to packaging.</p>
      
      <p>Nearby accommodations range from budget guesthouses to boutique resorts. Visit between April and June for pleasant weather and active harvesting.</p>
      
      <h2>3. Wild Mahseer, Assam</h2>
      <p>While Assam is famous for its tea, Wild Mahseer in the Balipara region offers an experience far removed from the typical tea estate visit. This heritage tea bungalow complex, spread across 22 acres within the Addabarie Tea Estate, provides an immersive journey into the colonial tea planter's lifestyle.</p>
      
      <p>The estate takes its name from the mighty mahseer fish found in nearby rivers and focuses on both tea tourism and ecological conservation. Guests stay in beautifully restored colonial bungalows while enjoying guided tea tours, nature walks, and local Assamese cuisine.</p>
      
      <p>Wild Mahseer is accessible year-round, but October to April offers the most comfortable weather for exploring the lush surroundings.</p>
      
      <h2>4. Glenburn Tea Estate, West Bengal</h2>
      <p>While not entirely unknown, Glenburn deserves mention for creating one of the most refined tea tourism experiences in India while remaining less crowded than many Darjeeling estates. This boutique tea plantation and hotel sits on a hillock above the Rungeet River, offering spectacular views of the Kanchenjunga mountain range.</p>
      
      <p>Established in 1859, Glenburn combines working tea estate authenticity with luxury accommodation in its planter's bungalows. Guests can participate in every aspect of tea production, from plucking leaves alongside workers to touring the factory and participating in professional tea tastings.</p>
      
      <p>The estate is most beautiful during the first flush season (March-April) and autumn flush (October-November), though it welcomes visitors year-round with activities adapted to each season.</p>
      
      <h2>5. Nuxalbari Tea Estate, North Bengal</h2>
      <p>For those interested in sustainable and ethical tea production, Nuxalbari in the Dooars region offers a unique perspective. This family-owned organic estate is pioneering the concept of "Elephant Friendly Tea" by creating safe corridors for wild elephants to pass through the plantation.</p>
      
      <p>Visitors can tour the gardens to learn about organic farming methods, interact with local workers to understand the social aspects of tea production, and potentially spot wild elephants from safe viewing platforms. The estate also offers workshops on sustainable agriculture and wildlife conservation.</p>
      
      <p>Basic but comfortable accommodation is available in a renovated planter's bungalow. The best time to visit is between October and April, avoiding the heavy monsoon season.</p>
      
      <h2>Planning Your Visit</h2>
      <p>Most of these hidden tea estates require advance booking for tours and accommodations. Contact them directly through their websites or work with specialized tea tourism operators who can arrange comprehensive packages including transportation from nearby cities.</p>
      
      <p>When visiting, respect the working environment of the estate, dress appropriately for walking through gardens (sturdy shoes and sun protection), and be prepared for varying weather conditions, particularly in mountain regions.</p>
      
      <p>These lesser-known tea destinations offer authentic experiences that connect visitors with the land, people, and processes behind one of the world's most beloved beverages—all without the crowds that can sometimes diminish the tranquility of more famous tea regions.</p>
    `
  }
];

// Related posts - simplified version
const relatedPosts = [1, 2].map(id => blogPosts.find(post => post.id === id));

function BlogPost() {
  const { id } = useParams();
  const postId = parseInt(id);
  const post = blogPosts.find(post => post.id === postId);
  
  if (!post) {
    return (
      <div className="container mx-auto py-20 px-4 text-center">
        <h1 className="text-3xl font-satoshi font-bold mb-6 text-[var(--primary-dark)]">Blog Post Not Found</h1>
        <p className="mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
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
            <div className="flex items-center justify-center mb-4">
              <span className="bg-[var(--primary-light)] text-[var(--primary)] text-sm font-satoshiMed px-4 py-2 rounded-full">
                {post.category}
              </span>
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
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                <span className="text-base font-satoshiMed text-gray-600">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="text-left">
                <p className="font-satoshi font-bold text-[var(--text-dark)]">{post.author}</p>
                <p className="text-sm text-gray-500">{post.authorTitle}</p>
              </div>
            </div>
          </div>
          
          {/* Featured image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={post.image || "https://placehold.co/1200x600?text=Tea+Tourism"} 
              alt={post.title} 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Post content */}
          <div className="prose prose-lg max-w-none mb-16">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          
          {/* Tags */}
          <div className="border-t border-gray-200 pt-8 mb-16">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-satoshi font-bold text-gray-700 mr-2">Related Topics:</span>
              <a href="#" className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full hover:bg-[var(--primary-light)] hover:text-[var(--primary)] transition-colors">Tea Culture</a>
              <a href="#" className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full hover:bg-[var(--primary-light)] hover:text-[var(--primary)] transition-colors">Darjeeling</a>
              <a href="#" className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full hover:bg-[var(--primary-light)] hover:text-[var(--primary)] transition-colors">Tea Cultivation</a>
              <a href="#" className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full hover:bg-[var(--primary-light)] hover:text-[var(--primary)] transition-colors">Tea History</a>
            </div>
          </div>
          
          {/* Share buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-center border-t border-b border-gray-200 py-6 mb-16">
            <div className="font-satoshi font-bold text-gray-700 mb-4 sm:mb-0">Share this article:</div>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[var(--primary)] text-gray-600 hover:text-white flex items-center justify-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[var(--primary)] text-gray-600 hover:text-white flex items-center justify-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[var(--primary)] text-gray-600 hover:text-white flex items-center justify-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[var(--primary)] text-gray-600 hover:text-white flex items-center justify-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Related posts */}
          <div className="mb-20">
            <h3 className="text-2xl font-satoshi font-bold mb-8 text-[var(--primary-dark)]">You might also like</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link to={`/blogs/${relatedPost.id}`} key={relatedPost.id} className="group">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={relatedPost.image || "https://placehold.co/600x400?text=Tea+Tourism"} 
                        alt={relatedPost.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
  )
}

export default BlogPost 