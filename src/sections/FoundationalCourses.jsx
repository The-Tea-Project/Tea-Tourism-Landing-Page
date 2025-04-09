import { useState } from "react";

function FoundationalCourses() {
  const [activeTab, setActiveTab] = useState("beginner");

  const beginnerCourses = [
    {
      id: 1,
      title: "Basic Literacy",
      type: "Beginner",
      priceRange: "Free",
      rating: 4.8,
      reviewCount: 342,
      description:
        "Learn to read and write in your native language with a focus on practical everyday applications.",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2122&auto=format&fit=crop",
      features: [
        "Reading and writing fundamentals",
        "Basic vocabulary development",
        "Understanding simple documents",
        "Practical daily communication",
      ],
      schedule: "Three times weekly, 2 hours per session for 12 weeks",
    },
    {
      id: 2,
      title: "Fundamental Numeracy",
      type: "Beginner",
      priceRange: "Free",
      rating: 4.7,
      reviewCount: 287,
      description:
        "Master basic math skills essential for daily life and work in the tea industry.",
      image:
        "https://images.unsplash.com/photo-1564939558297-fc396f18e5c7?q=80&w=2071&auto=format&fit=crop",
      features: [
        "Counting and basic operations",
        "Simple measurements for work",
        "Understanding wages and payments",
        "Managing household finances",
      ],
      schedule: "Twice weekly, 2 hours per session for 8 weeks",
    },
    {
      id: 3,
      title: "Health & Hygiene",
      type: "Beginner",
      priceRange: "Free",
      rating: 4.9,
      reviewCount: 412,
      description:
        "Learn essential health practices to prevent illness and promote wellbeing for workers and families.",
      image:
        "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=2070&auto=format&fit=crop",
      features: [
        "Basic sanitation practices",
        "Nutrition and healthy eating",
        "First aid fundamentals",
        "Maternal and child health",
      ],
      schedule: "Once weekly, 3 hours per session for 6 weeks",
    },
  ];

  const intermediateCourses = [
    {
      id: 4,
      title: "Advanced Literacy",
      type: "Intermediate",
      priceRange: "₹500",
      rating: 4.6,
      reviewCount: 189,
      description:
        "Build on basic literacy skills with more advanced reading comprehension and writing abilities.",
      image:
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2073&auto=format&fit=crop",
      features: [
        "Advanced reading comprehension",
        "Writing letters and applications",
        "Understanding government forms",
        "Communication for advocacy",
      ],
      schedule: "Twice weekly, 2.5 hours per session for 10 weeks",
    },
    {
      id: 5,
      title: "Financial Literacy",
      type: "Intermediate",
      priceRange: "₹800",
      rating: 4.8,
      reviewCount: 203,
      description:
        "Develop essential financial skills to manage income, save for the future, and understand banking systems.",
      image:
        "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=2070&auto=format&fit=crop",
      features: [
        "Budgeting and saving methods",
        "Understanding banking services",
        "Managing loans responsibly",
        "Planning for children's education",
      ],
      schedule: "Weekend classes, 4 hours per session for 6 weeks",
    },
    {
      id: 6,
      title: "Vocational Skills",
      type: "Intermediate",
      priceRange: "₹1000",
      rating: 4.7,
      reviewCount: 156,
      description:
        "Learn practical craft and trade skills that create additional income opportunities beyond tea work.",
      image:
        "https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?q=80&w=2069&auto=format&fit=crop",
      features: [
        "Local craft production",
        "Basic tailoring skills",
        "Food processing methods",
        "Product marketing",
      ],
      schedule: "Twice weekly, 3 hours per session for 8 weeks",
    },
  ];

  const advancedCourses = [
    {
      id: 7,
      title: "Business Fundamentals",
      type: "Advanced",
      priceRange: "₹1500",
      rating: 4.9,
      reviewCount: 98,
      description:
        "Learn basic business concepts to help manage personal enterprises or community initiatives.",
      image:
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop",
      features: [
        "Business planning",
        "Marketing basics",
        "Financial management",
        "Customer relations",
      ],
      schedule: "Weekend classes, 5 hours per session for 10 weeks",
    },
    {
      id: 8,
      title: "Community Leadership",
      type: "Advanced",
      priceRange: "₹2000",
      rating: 4.8,
      reviewCount: 76,
      description:
        "Develop leadership skills to strengthen community bonds and drive positive change.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop",
      features: [
        "Effective communication",
        "Conflict resolution",
        "Project planning",
        "Community mobilization",
      ],
      schedule: "Twice weekly, 4 hours per session for 8 weeks",
    },
    {
      id: 9,
      title: "Agricultural Sciences",
      type: "Advanced",
      priceRange: "₹2500",
      rating: 4.7,
      reviewCount: 64,
      description:
        "Learn modern agricultural practices to enhance crop yields and improve sustainability.",
      image:
        "https://images.unsplash.com/photo-1527847263472-aa5338d178b8?q=80&w=2070&auto=format&fit=crop",
      features: [
        "Sustainable farming",
        "Crop diversification",
        "Soil management",
        "Water conservation",
      ],
      schedule: "Weekend classes, 6 hours per session for 12 weeks",
    },
  ];

  const tabs = [
    { id: "beginner", label: "Beginner" },
    { id: "intermediate", label: "Intermediate" },
    { id: "advanced", label: "Advanced" },
  ];

  const getActiveCourses = () => {
    switch (activeTab) {
      case "beginner":
        return beginnerCourses;
      case "intermediate":
        return intermediateCourses;
      case "advanced":
        return advancedCourses;
      default:
        return beginnerCourses;
    }
  };

  return (
    <section>
      <div
        id="courses"
        className="w-full bg-[var(--cream)] py-[100px] relative overflow-hidden px-20"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-white to-transparent opacity-70"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[var(--primary)] opacity-5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-[var(--primary-light)] opacity-10 blur-3xl"></div>

        <img
          src="/assets/tea-leaves-pattern.svg"
          alt="Tea Leaves"
          className="absolute left-0 top-40 w-48 opacity-10 hidden lg:block transform rotate-45"
        />
        <img
          src="/assets/tea-leaves-pattern.svg"
          alt="Tea Leaves"
          className="absolute right-0 bottom-80 w-32 opacity-10 hidden lg:block transform -rotate-12"
        />

        {/* 3D illustration elements */}
        <div className="absolute top-20 right-10 w-24 h-24 rounded-full border-4 border-[var(--primary-light)] border-opacity-20 hidden lg:block"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 rounded-full border-4 border-dashed border-[var(--primary-light)] border-opacity-30 hidden lg:block"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-[var(--primary-light)] bg-opacity-20 text-[var(--primary)] text-sm font-medium mb-4">
              FOUNDATIONAL EDUCATION
            </span>
            <h2 className="font-satoshi text-[40px] lg:text-[56px] font-bold mb-6 text-[var(--text-dark)]">
              Foundational Courses
            </h2>
            <div className="w-24 h-1 bg-[var(--primary)] mx-auto mb-6 rounded-full"></div>
            <p className="font-satoshiMed text-[18px] text-[var(--text-dark)] opacity-90 mt-4">
              Designed specifically for tea garden workers seeking literacy and essential life skills, our courses provide a supportive environment to build confidence, improve daily living, and unlock new opportunities.
            </p>
          </div>

          {/* Tabs navigation */}
          <div className="flex justify-center mb-8 border-b border-gray-200">
            <div className="flex space-x-1 md:space-x-4 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`py-3 px-4 md:px-6 font-medium text-sm md:text-base focus:outline-none transition-colors duration-200 whitespace-nowrap ${
                    activeTab === tab.id
                      ? "text-[var(--primary)] border-b-2 border-[var(--primary)]"
                      : "text-gray-600 hover:text-[var(--primary)]"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Course Cards Grid - Same layout as transportOptions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {getActiveCourses().map((course) => (
              <div
                key={course.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 h-full flex flex-col"
              >
                {/* Image container */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent"></div>

                  {/* Type badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-[var(--primary)]/90 backdrop-blur-sm text-white text-xs font-satoshiMed px-3 py-1.5 rounded-full">
                      {course.type}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="absolute bottom-4 right-4">
                    <div className="flex items-center bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-xs font-satoshiMed text-gray-800 ml-1">
                        {course.rating}
                      </span>
                      <span className="text-xs text-gray-500 ml-1">
                        ({course.reviewCount})
                      </span>
                    </div>
                  </div>

                  {/* Title and price */}
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-satoshi text-xl font-bold text-white mb-1">
                      {course.title}
                    </h3>
                    <span className="text-white/80 font-satoshiMed text-sm">
                      {course.priceRange}
                    </span>
                  </div>
                </div>

                {/* Content section */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="font-satoshiMed text-[15px] text-gray-600 mb-4 flex-grow">
                    {course.description}
                  </p>

                  <div className="mb-5">
                    <h4 className="font-satoshi font-bold text-sm text-[var(--primary)] mb-3">
                      What You&apos;ll Learn:
                    </h4>
                    <ul className="text-[13px] text-gray-600 space-y-1.5">
                      {course.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-[var(--primary)] mr-2 mt-0.5 flex-shrink-0"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-100 pt-4 mb-5">
                    <div className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-[var(--primary)] mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="text-[13px] text-gray-600">
                        {course.schedule}
                      </p>
                    </div>
                  </div>

                  {/* CTA button */}
                  <a
                    href="#enroll"
                    className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-full border-2 border-[var(--primary)] text-[var(--primary)] font-satoshi font-bold hover:bg-[var(--primary)] hover:text-white transition-colors group"
                  >
                    Enroll Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FoundationalCourses;
