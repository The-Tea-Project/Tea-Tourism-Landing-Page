import React from 'react'

function NavBar() {
    const navItems = [
        { title: 'Home', href: '/', className: "text-[var(--primary)] font-satoshi " },
        { title: 'Why Us', href: '#benefits', className: "text-[var(--text-dark)] font-satoshiMed hover:text-[var(--primary)] transition-colors" },
        { title: 'Local Products', href: '/products', className: "text-[var(--text-dark)] font-satoshiMed hover:text-[var(--primary)] transition-colors" },
        { title: 'Stays', href: '/stays', className: "text-[var(--text-dark)] font-satoshiMed hover:text-[var(--primary)] transition-colors" },
        { title: 'Blogs', href: '/blogs', className: "text-[var(--text-dark)] font-satoshiMed hover:text-[var(--primary)] transition-colors" },
        { title: 'Transport', href: '/transport', className: "text-[var(--text-dark)] font-satoshiMed hover:text-[var(--primary)] transition-colors" },
    ]
    return (
        <>
            <div className="bg-white/90 backdrop-blur-sm lg:w-4/5 w-11/12 flex p-3 lg:p-4 rounded-full justify-between items-center z-10 shadow-md">
                <div className="logo">
                    <div className="flex items-center">
                      <svg className="h-6 w-6 text-[var(--primary)]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 8C8.5 8 7 11 7 12C7 13 7.5 16 12 16C16.5 16 17 13 17 12C17 11 15.5 8 12 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 8C12 8 12 5 12 4C12 3 12.5 2 14 2C15.5 2 16 3 16 4C16 5 14 8 12 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-[var(--primary)] font-satoshi font-bold text-2xl ml-1">Tea</span>
                      <span className="text-[var(--text-dark)] font-satoshi font-bold text-2xl">Tourism</span>
                    </div>
                </div>
                <div className="lg:flex hidden flex-grow justify-center">
                    {navItems.map((item, index) => (
                        <a key={index} href={item.href} className={item.className + " mx-4 text-sm font-medium"}>{item.title}</a>
                    ))}
                </div>
                <div className="flex justify-center items-center">
                    <a href="https://hefa-project-s1.web.app/">
                        <div className="lg:text-sm text-[12px] whitespace-nowrap font-medium mx-2 font-satoshi bg-[var(--primary)] text-white px-[25px] py-[10px] rounded-full hover:bg-[var(--primary-dark)] transition-colors">Sensor Monitoring</div>
                    </a>
                </div>
                <div className="flex justify-center items-center">
                    <a href="https://theteaprojadmin.vercel.app/">
                        <div className="lg:text-sm text-[12px] whitespace-nowrap font-medium mx-2 font-satoshi bg-[var(--primary)] text-white px-[25px] py-[10px] rounded-full hover:bg-[var(--primary-dark)] transition-colors">Sign In</div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default NavBar