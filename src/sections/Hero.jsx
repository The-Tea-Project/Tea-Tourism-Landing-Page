import React from 'react'
import NavBar from '../components/NavBar'
import CompniesLogo from '../components/CompniesLogo'
import CTABtn from '../components/CTABtn'
import "../App.css"
function Hero() {
    return (
        <>
            <div id='product' className=" w-full   flex flex-col items-center pb-[110px] lg:py-[32px] py-[12px] overflow-hidden space-y-[110px]">
                <NavBar />

                <div className=" text-center self-center justify-self-center my-auto z-10 w-full">
                    <div className="font-satoshi lg:text-[56px] text-[40px] lg:leading-[67px] leading-[48px] font-bold">
                        AI Dubbing and Translation <br />
                        for <span className='text-[#0A47F2] '>Media</span>
                    </div>
                    <div className="font-satoshiMed lg:text-[20px] text-[14px] px-12 lg:leading-[30px] font-normal pt-[24px]">
                        Globalize your content with lip-sync, preserved original voices, and accurate <br /> on-screen text translation—faster and more cost-effectively than ever
                    </div>
                    <div className="mt-[14px]">
                        <CTABtn />
                        <div className="font-satoshiMed text-[16px] mt-2">
                        TTP
                        </div>
                    </div>
                </div>
                <div className="flex-col flex items-center justify-center overflow-hidden">

                    <div className="lg:text-[16px] text-[12px] font-satoshiMed mt-8">
                        Helping people translate videos at
                    </div>
                    <CompniesLogo />
                </div>
            </div>
            <div className="bg-[#F0F3F6] -z-20 w-full  absolute pb-[110px] top-0 left-0">
                <img src="assets/grid.png" alt="" srcset="" className=' -z-10 top-0 left-0 max-w-full  ' />
            </div>

        </>
    )
}

export default Hero