import React from 'react'

function NavBar() {
    const navItems = [
        { title: 'Home', href: '#home', className: "text-[var(--primary)] font-satoshi " },
        { title: 'Why Choose Us', href: '#benefits', className: "text-[var(--text-dark)] font-satoshiMed hover:text-[var(--primary)] transition-colors" },
        { title: 'Local Products', href: '#products', className: "text-[var(--text-dark)] font-satoshiMed hover:text-[var(--primary)] transition-colors" },
        { title: 'Blogs', href: '#blogs', className: "text-[var(--text-dark)] font-satoshiMed hover:text-[var(--primary)] transition-colors" },
        { title: 'Courses', href: '#edtech', className: "text-[var(--text-dark)] font-satoshiMed hover:text-[var(--primary)] transition-colors" },
    ]
    return (
        <>
            <div className="bg-white/90 backdrop-blur-sm lg:w-4/5 w-11/12 flex p-3 lg:p-4 rounded-full justify-between items-center z-10 shadow-md">
                <div className="logo">
                    <img src="/assets/tea-logo.png" alt="Tea Tourism Logo" className='w-32' />
                </div>
                <div className="lg:flex hidden flex-grow justify-center">
                    {navItems.map((item, index) => (
                        <a key={index} href={item.href} className={item.className + " mx-4 text-sm font-medium"}>{item.title}</a>
                    ))}
                </div>
                <div className="flex justify-center items-center">
                    <a href="#cta">
                        <div className="lg:text-sm text-[12px] whitespace-nowrap font-medium mx-2 font-satoshi bg-[var(--primary)] text-white px-[25px] py-[10px] rounded-full hover:bg-[var(--primary-dark)] transition-colors">Explore Now</div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default NavBar