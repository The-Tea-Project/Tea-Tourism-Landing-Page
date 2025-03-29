import React from 'react'
import CTABtn from '../components/CTABtn'

function Contact() {
  return (
    <div id="contact" className="w-full bg-[var(--cream)] py-[100px] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-[var(--primary)] opacity-5 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-[var(--primary)] opacity-5 blur-3xl"></div>
      
      <img src="/assets/tea-leaves-pattern.svg" alt="Tea Leaves" className="absolute right-0 top-20 w-48 opacity-10 hidden lg:block transform rotate-90" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="tea-card bg-white shadow-xl overflow-hidden rounded-2xl">
            <div className="flex flex-col lg:flex-row">
              {/* Contact info section */}
              <div className="lg:w-5/12 bg-[var(--primary)] p-8 lg:p-12 text-white relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <img 
                    src="/assets/tea-pattern-white.png" 
                    alt="Tea Pattern" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="relative z-10">
                  <h3 className="font-satoshi text-3xl font-bold mb-6">Get in Touch</h3>
                  <p className="font-satoshiMed text-white/90 mb-8 max-w-md">
                    Have questions about our tea tourism experiences or courses? We're here to help you plan your perfect tea adventure.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-satoshi font-bold">Phone</h4>
                        <p className="font-satoshiMed text-white/90 mt-1">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-satoshi font-bold">Email</h4>
                        <p className="font-satoshiMed text-white/90 mt-1">info@teatourism.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-satoshi font-bold">Location</h4>
                        <p className="font-satoshiMed text-white/90 mt-1">123 Tea Garden Lane, Darjeeling, India</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-12">
                    <h4 className="font-satoshi font-bold mb-4">Connect With Us</h4>
                    <div className="flex space-x-3">
                      <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[var(--primary)] transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[var(--primary)] transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[var(--primary)] transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact form section */}
              <div className="lg:w-7/12 p-8 lg:p-12">
                <div className="max-w-lg">
                  <h3 className="font-satoshi text-3xl font-bold text-[var(--text-dark)] mb-6">Send Us a Message</h3>
                  <p className="font-satoshiMed text-[var(--text-dark)]/80 mb-8">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                  
                  <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-satoshi font-bold text-[var(--text-dark)] mb-2">Full Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--primary)] transition-colors" 
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-satoshi font-bold text-[var(--text-dark)] mb-2">Email Address</label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--primary)] transition-colors" 
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-satoshi font-bold text-[var(--text-dark)] mb-2">Subject</label>
                      <input 
                        type="text" 
                        id="subject" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--primary)] transition-colors" 
                        placeholder="How can we help you?"
                      />
                    </div>
                    
                    <div className="mb-8">
                      <label htmlFor="message" className="block text-sm font-satoshi font-bold text-[var(--text-dark)] mb-2">Message</label>
                      <textarea 
                        id="message" 
                        rows="5" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--primary)] transition-colors" 
                        placeholder="Tell us more about your query..."
                      ></textarea>
                    </div>
                    
                    <div className="flex items-center mb-8">
                      <input type="checkbox" id="newsletter" className="w-4 h-4 text-[var(--primary)] rounded border-gray-300 focus:ring-[var(--primary)]" />
                      <label htmlFor="newsletter" className="ml-3 text-sm font-satoshiMed text-[var(--text-dark)]/80">
                        Subscribe to our newsletter for the latest updates on tea tourism experiences and courses.
                      </label>
                    </div>
                    
                    <CTABtn text="Send Message" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map section */}
        <div className="mt-16 tea-card bg-white p-1 rounded-2xl shadow-lg max-w-7xl mx-auto overflow-hidden">
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <img 
              src="/assets/tea-garden-map.jpg" 
              alt="Tea Tourism Map" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent pointer-events-none"></div>
            <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs">
              <h4 className="font-satoshi text-xl font-bold text-[var(--text-dark)] mb-2">Visit Our Garden</h4>
              <p className="font-satoshiMed text-sm text-[var(--text-dark)]/80">
                Experience the beauty of our tea estate in person. Tour bookings are available year-round.
              </p>
            </div>
            <div className="absolute bottom-8 right-8">
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 bg-[var(--primary)] text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg">
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact 