import React from 'react'
import "../App.css"

function CTABtn({ text = "JOIN WAITLIST", link = "#" }) {
    return (
        <>
        <a href={link} target="_blank" rel="noopener noreferrer">
            <button 
            className="rounded font-satoshi text-[18px] font-bold text-white py-[10px] px-[30px] duration-300 mt-[30px] relative overflow-hidden group bg-[var(--primary)]">
                <span className="absolute top-0 left-0 w-full h-full bg-[var(--primary-dark)] opacity-0 group-hover:opacity-70 transition-opacity duration-300"></span>
                <span className="absolute -top-1 -right-1 w-6 h-6 bg-[var(--primary-light)] rounded-full opacity-0 group-hover:opacity-40 transform scale-0 group-hover:scale-100 transition-all duration-500"></span>
                <span className="absolute -bottom-1 -left-1 w-6 h-6 bg-[var(--primary-light)] rounded-full opacity-0 group-hover:opacity-40 transform scale-0 group-hover:scale-100 transition-all duration-500"></span>
                <span className="relative z-10">{text}</span>
            </button>
        </a>
        </>
    )
}

export default CTABtn