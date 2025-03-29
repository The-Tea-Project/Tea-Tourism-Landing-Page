import React, { useState } from 'react'
import CTABtn from '../components/CTABtn'

function Banner() {
  const [activeTab, setActiveTab] = useState(0);

  const courses = [
    {
      id: 0,
      title: "Tea Masterclass Series",
      subtitle: "For Beginners & Enthusiasts",
      description: "A comprehensive introduction to different tea varieties, their origins, and proper brewing techniques. Learn to identify flavors and aromas like a pro.",
      duration: "4 weeks",
      modules: "6 modules",
      image: "https://plus.unsplash.com/premium_photo-1661603403807-aa68bfcc983a?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$199",
      features: [
        "Hands-on brewing sessions",
        "Tea origin exploration",
        "Flavor profiling techniques",
        "Tea and food pairing",
        "2 live Q&A sessions"
      ]
    },
    {
      id: 1,
      title: "Tea Farm Management",
      subtitle: "For Tea Entrepreneurs",
      description: "Discover sustainable farming techniques, processing methods, and business strategies for running a successful tea plantation or small-scale tea business.",
      duration: "8 weeks",
      modules: "12 modules",
      image: "/assets/course-management.jpg",
      price: "$349",
      features: [
        "Soil assessment methods",
        "Organic farming practices",
        "Processing equipment guide",
        "Marketing strategies",
        "3 case studies with expert tea farmers"
      ]
    },
    {
      id: 2,
      title: "Tea Tourism Planning",
      subtitle: "For Tourism Professionals",
      description: "Learn how to create engaging tea tourism experiences, from plantation tours to tasting events. Covers logistics, storytelling, and customer service excellence.",
      duration: "6 weeks",
      modules: "8 modules",
      image: "/assets/course-tourism.jpg",
      price: "$249",
      features: [
        "Guest experience mapping",
        "Tour design principles",
        "Storytelling techniques",
        "Local culture integration",
        "Sustainable tourism practices"
      ]
    }
  ];

  return (
    <div id="courses" className="w-full bg-white py-[100px] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[var(--primary-light)] opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[var(--primary-light)] opacity-5 blur-3xl"></div>
      
      <img src="/assets/tea-leaves-pattern.svg" alt="Tea Leaves" className="absolute left-0 top-40 w-48 opacity-10 hidden lg:block transform -rotate-90" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-[var(--primary-light)] bg-opacity-20 text-[var(--primary)] text-sm font-medium mb-4">EXPERT EDUCATION</span>
          <h2 className="font-satoshi text-[40px] lg:text-[56px] font-bold mb-6 text-[var(--text-dark)]">Our Courses</h2>
          <div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-6 rounded-full"></div>
          <p className="font-satoshiMed text-[18px] text-[var(--text-dark)] opacity-90">
            Master the Art and Science of Tea. Our specialized courses cater to tea enthusiasts, aspiring tea entrepreneurs, and tourism professionals.
          </p>
        </div>

        {/* Course tabs */}
        <div className="flex justify-center mb-12 bg-[var(--cream)] rounded-full p-2 max-w-xl mx-auto">
          {courses.map((course, index) => (
            <button 
              key={course.id}
              onClick={() => setActiveTab(index)}
              className={`flex-1 py-3 px-4 rounded-full text-center transition-all duration-300 font-satoshi font-bold text-sm md:text-base ${
                activeTab === index 
                  ? "bg-[var(--primary)] text-white shadow-lg" 
                  : "text-[var(--text-dark)] hover:bg-[var(--primary-light)] hover:bg-opacity-20"
              }`}
            >
              {course.title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Course display */}
        <div className="max-w-7xl mx-auto">
          <div className="tea-card bg-white overflow-hidden shadow-xl">
            <div className="flex flex-col lg:flex-row">
              {/* Course image */}
              <div className="lg:w-1/2 relative">
                <div className="absolute inset-0 bg-black/20 z-10"></div>
                <img 
                  src={courses[activeTab].image} 
                  alt={courses[activeTab].title}
                  className="w-full h-full object-cover min-h-[300px] lg:min-h-[550px]"
                />
                <div className="absolute top-6 left-6 z-20">
                  <span className="inline-block py-2 px-4 bg-[var(--primary)] text-white font-bold rounded-lg shadow-lg">
                    {courses[activeTab].price}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent z-20">
                  <span className="text-white/80 text-sm font-medium">{courses[activeTab].subtitle}</span>
                  <h3 className="font-satoshi text-3xl font-bold text-white mt-2">{courses[activeTab].title}</h3>
                </div>
              </div>
              
              {/* Course details */}
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="flex items-center mr-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="ml-2 text-[var(--text-dark)] font-medium">{courses[activeTab].duration}</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span className="ml-2 text-[var(--text-dark)] font-medium">{courses[activeTab].modules}</span>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-satoshi text-xl font-bold text-[var(--text-dark)] mb-4">Course Overview</h4>
                  <p className="font-satoshiMed text-[var(--text-dark)] opacity-90 mb-6">
                    {courses[activeTab].description}
                  </p>
                  
                  <h4 className="font-satoshi text-xl font-bold text-[var(--text-dark)] mb-4">What You'll Learn</h4>
                  <ul className="space-y-3">
                    {courses[activeTab].features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--primary-light)] bg-opacity-20 flex items-center justify-center mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="ml-3 text-[var(--text-dark)]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto flex flex-col sm:flex-row items-center gap-4">
                  <CTABtn text="Enroll Now" />
                  
                  <button className="flex items-center text-[var(--primary)] font-satoshi font-bold hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-16">
          <div className="flex items-center space-x-3">
            <span className="font-satoshiMed text-[var(--text-dark)]">Browse all courses</span>
            <a href="#" className="w-12 h-12 rounded-full bg-[var(--primary-light)] bg-opacity-10 flex items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner 