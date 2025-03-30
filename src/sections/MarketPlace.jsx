import React from 'react'

function MarketPlace() {
  const benefits = [
    {
      id: 1,
      title: "Experience Authenticity",
      description: "Stay in carefully selected accommodations that reflect the local culture, from heritage tea bungalows to eco-friendly cottages nestled in tea estates.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7m-14 0l2 2m0 0l7 7 7-7m-14 0l2-2" />
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      title: "Effortless Journeys",
      description: "All transportation is handled for you, whether it's a scenic train ride through tea plantations or private vehicles for your group to explore hidden gems.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      image: "/assets/easy-travel.jpg"
    },
    {
      id: 3,
      title: "Readymade Plans",
      description: "Our itineraries are crafted by local experts who know the tea regions intimately, ensuring you experience the perfect blend of must-see attractions and hidden treasures.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <div id="benefits" className="w-full bg-[var(--cream)] py-[100px] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[var(--primary-light)] opacity-5 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-[var(--primary-light)] opacity-5 blur-3xl"></div>
      
      <img src="/assets/tea-leaves-pattern.svg" alt="Tea Leaves" className="absolute left-0 top-40 w-48 opacity-10 hidden lg:block transform -rotate-45" />
      <img src="/assets/tea-leaves-pattern.svg" alt="Tea Leaves" className="absolute right-0 bottom-40 w-64 opacity-10 hidden lg:block transform rotate-45" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-[var(--primary-light)] bg-opacity-20 text-[var(--primary)] text-sm font-medium mb-4">WHY CHOOSE US</span>
          <h2 className="font-satoshi text-[40px] lg:text-[56px] font-bold mb-6 text-[var(--text-dark)]">Tea Tourism Benefits</h2>
          <div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-6 rounded-full"></div>
          <p className="font-satoshiMed text-[18px] text-[var(--text-dark)] opacity-90">
            We bring together the best aspects of tea culture and tourism to create unforgettable experiences for tea enthusiasts and curious travelers alike.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/3 left-0 w-full border-t-2 border-dashed border-[var(--primary-light)] opacity-30 z-0"></div>
          
          {benefits.map((benefit, index) => (
            <div key={benefit.id} className="relative z-10">
              <div className="tea-card bg-white overflow-hidden transform hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={benefit.image} 
                    alt={benefit.title} 
                    className="w-full h-full object-cover transition duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-16 h-16 tea-icon-bg rounded-full flex items-center justify-center shadow-lg">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="font-satoshi text-[24px] font-bold text-white absolute bottom-4 left-4">{benefit.title}</h3>
                </div>
                
                <div className="p-6 flex-grow">
                  <p className="font-satoshiMed text-[16px] text-[var(--text-dark)]">
                    {benefit.description}
                  </p>
                </div>
                
                <div className="p-6 pt-0">
                  <a href="#" className="text-[var(--primary)] font-satoshi font-bold hover:underline flex items-center group">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MarketPlace