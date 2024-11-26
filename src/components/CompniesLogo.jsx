import React from 'react'

function CompniesLogo() {
const logos = [
    {name:"",herf:"",src:"/assets/Logos/img1.png"},
    {name:"",herf:"",src:"/assets/Logos/img2.png"},
    {name:"",herf:"",src:"/assets/Logos/img3.png"},
    {name:"",herf:"",src:"/assets/Logos/img4.png"},
    {name:"",herf:"",src:"/assets/Logos/img5.png"},
    {name:"",herf:"",src:"/assets/Logos/img6.png"},
    {name:"",herf:"",src:"/assets/Logos/img7.png"},
    {name:"",herf:"",src:"/assets/Logos/img8.png"},
    {name:"",herf:"",src:"/assets/Logos/img9.png"},

]
  return (
    <div className='flex justify-evenly mt-4 space-x-10 overflow-clip'>
        {logos.map((logo) => (
            <img src={logo.src} alt={logo.name} srcset={logo.src} className='w-[48px]'/>
        ))}

    </div>
  )
}

export default CompniesLogo