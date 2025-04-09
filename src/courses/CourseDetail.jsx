import { useParams } from "react-router-dom";

function CourseDetail() {
  const { level, courseName } = useParams();
  
  // Course content mapping
  const courseContent = {
    // Beginner courses
    "beginner/basic_literacy": {
      title: "Basic Literacy",
      description: "Our Basic Literacy course is designed to help tea garden workers develop fundamental reading and writing skills in their native language. This course focuses on practical, everyday applications to immediately improve your quality of life. Through engaging lessons and supportive instructors, you'll gain confidence in reading important documents, writing personal correspondence, and developing vocabulary that's relevant to your daily experiences in and around the tea gardens.",
      duration: "12 weeks",
      level: "Beginner",
      price: "Free"
    },
    "beginner/fundamental_numeracy": {
      title: "Fundamental Numeracy",
      description: "The Fundamental Numeracy course equips tea garden workers with essential mathematical skills needed for daily life and work. You'll master counting, basic operations, measurements, and practical financial skills that will help you understand your wages, manage household finances, and perform work-related calculations with confidence. Our hands-on approach ensures these skills are directly applicable to your real-world needs in the tea garden community.",
      duration: "8 weeks",
      level: "Beginner",
      price: "Free"
    },
    "beginner/health_hygiene": {
      title: "Health & Hygiene",
      description: "Our Health & Hygiene course provides vital knowledge about sanitation practices, nutrition, first aid, and preventive healthcare specifically tailored to the tea garden community. This course empowers workers and their families to make informed health decisions, create safer living environments, and respond to common health issues. With a focus on maternal and child health, the program addresses the unique health challenges faced by tea garden communities.",
      duration: "6 weeks",
      level: "Beginner",
      price: "Free"
    },
    
    // Intermediate courses
    "intermediate/advanced_literacy": {
      title: "Advanced Literacy",
      description: "Building on basic literacy skills, this course develops more sophisticated reading comprehension and writing abilities. Students will learn to navigate complex documents like government forms, write formal letters and applications, and develop communication skills for advocacy. This advanced literacy training enables tea garden workers to better understand their rights, access government services, and effectively communicate their needs to authorities.",
      duration: "10 weeks",
      level: "Intermediate",
      price: "₹500"
    },
    "intermediate/financial_literacy": {
      title: "Financial Literacy",
      description: "The Financial Literacy course teaches essential skills for managing income, creating savings plans, and understanding banking systems. Participants learn budgeting methods, how to access and use banking services responsibly, manage loans, and plan for their children's education. These practical financial skills help tea garden families build financial resilience, avoid debt traps, and work toward economic stability and growth.",
      duration: "6 weeks",
      level: "Intermediate",
      price: "₹800"
    },
    "intermediate/vocational_skills": {
      title: "Vocational Skills",
      description: "This hands-on course teaches practical craft and trade skills that create additional income opportunities beyond tea garden work. Students learn local craft production techniques, basic tailoring, food processing methods, and product marketing strategies. These diversified skills help tea garden workers supplement their income, develop small home businesses, and reduce economic vulnerability through multiple income streams.",
      duration: "8 weeks",
      level: "Intermediate",
      price: "₹1000"
    },
    
    // Advanced courses
    "advanced/business_fundamentals": {
      title: "Business Fundamentals",
      description: "The Business Fundamentals course introduces tea garden workers to essential concepts for managing personal enterprises or community initiatives. Covering business planning, marketing basics, financial management, and customer relations, this course provides the foundation needed to turn skills into sustainable businesses. Participants develop a comprehensive understanding of what it takes to start and grow a successful small enterprise in the tea garden context.",
      duration: "10 weeks",
      level: "Advanced",
      price: "₹1500"
    },
    "advanced/community_leadership": {
      title: "Community Leadership",
      description: "This transformative course develops leadership skills that strengthen community bonds and drive positive change in tea garden communities. Participants learn effective communication, conflict resolution, project planning, and community mobilization techniques. The program empowers emerging leaders to advocate for improved conditions, organize community initiatives, and foster collective action that addresses shared challenges facing tea garden workers.",
      duration: "8 weeks",
      level: "Advanced",
      price: "₹2000"
    },
    "advanced/agricultural_sciences": {
      title: "Agricultural Sciences",
      description: "Our Agricultural Sciences course teaches modern, sustainable farming practices to enhance crop yields and improve land management. Tea garden workers learn principles of sustainable farming, crop diversification techniques, soil management, and water conservation strategies. This knowledge allows participants to maximize productivity of small garden plots, integrate complementary crops with tea cultivation, and implement environmentally sound agricultural practices.",
      duration: "12 weeks",
      level: "Advanced",
      price: "₹2500"
    }
  };

  const courseKey = `${level}/${courseName}`;
  const course = courseContent[courseKey] || {
    title: "Course Not Found",
    description: "The requested course information could not be found.",
    duration: "N/A",
    level: "N/A",
    price: "N/A"
  };

  return (
    <div className="bg-[var(--cream)] min-h-screen py-20 px-6 md:px-10">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-[var(--primary)] py-8 px-6 md:px-10">
          <div className="flex items-center justify-between">
            <h1 className="text-white text-2xl md:text-3xl font-satoshi font-bold">{course.title}</h1>
            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
              {course.level}
            </span>
          </div>
        </div>
        
        <div className="p-6 md:p-10">
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center text-gray-600 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Duration: {course.duration}
            </div>
            <div className="flex items-center text-gray-600 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Price: {course.price}
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-satoshi font-bold text-gray-800 mb-4">Course Description</h2>
            <p className="text-gray-600 font-satoshiMed leading-relaxed">
              {course.description}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-[var(--primary)] text-white px-6 py-3 rounded-lg font-medium hover:bg-[var(--primary-dark)] transition-colors">
              Enroll Now
            </button>
            <button className="border-2 border-[var(--primary)] text-[var(--primary)] px-6 py-3 rounded-lg font-medium hover:bg-[var(--primary-light)] hover:bg-opacity-20 transition-colors">
              Download Syllabus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;