import React from 'react'

function NavBar() {
    const navItems = [
        { title: 'Products', href: '#products', className: "text-[#0A47F2] font-satoshi " },
        { title: 'Features', href: '#features', className: "text-[#] font-satoshiMed " },
        { title: 'Benefits', href: '#benefits', className: "text-[#] font-satoshiMed " },
        // {title:'Pricing',href:'#',className:"text-[#] font-satoshiMed "},
        { title: 'Contact Us', href: '#email', className: "text-[#] font-satoshiMed " },

    ]
    return (
        <>
            <div className="bg-white lg:w-4/5 w-11/12 flex p-3 lg:p-4 rounded-full justify-between items-center z-10">
                <div className="logo">
                    <img src="assets/Frame 4.png" alt="logo" className='w-32' />
                </div>
                <div className="lg:flex hidden flex-grow justify-center">
                    {navItems.map((item, index) => (
                        <a key={index} href={item.href} className={item.className + " mx-4  text-sm font-medium"}>{item.title}</a>
                    ))}

                </div>
                <div className="flex justify-center items-center">
                    <a href="https://dh4ftmjzfzn.typeform.com/to/XuzeNABu" target="_blank">
                        {/* <div className="lg:text-sm text-[12px] font-medium mx-2 font-satoshiMed">JOIN WAITLIST</div> */}
                    </a>
                    <a href="https://dh4ftmjzfzn.typeform.com/to/XuzeNABu" target="_blank">
                        <div className="lg:text-sm text-[12px] whitespace-nowrap font-medium mx-2 font-satoshi bg-[#0A47F2] text-white px-[25px] py-[10px] rounded-full">Sign Up</div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default NavBar