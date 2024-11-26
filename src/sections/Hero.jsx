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
                    Welcome to  <span className='text-[#0A47F2] '>TeaTech</span>
                    </div>
                    <div className="font-satoshiMed lg:px-80 lg:text-[20px] text-[14px] px-12 lg:leading-[30px] font-normal pt-[24px]">
                    TeaTech is a transformative project designed to revolutionize tea farming communities by blending tradition with technology. Our platform empowers local farmers, boosts tourism, and supports cultural exchange through cutting-edge digital tools and education.
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
                    Empowering Tea Farming Communities through Digital Innovation
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