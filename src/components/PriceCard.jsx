import React from 'react'
import CTABtn from './CTABtn'

function PriceCard() {
    return (
        <>
            <div className="w-[352px] h-[698px] bg-white rounded-[32px] flex flex-col text-black items-center justify-around p-8">
                <div>
                    <div className="text-[40px] font-bold flex items-center justify-center font-satoshi">
                        Creators
                    </div>
                    <div className="text-[18px] text-center font-satoshiMed">For course creators who need efficient translation</div>
                </div>
                <div className="flex justify-end items-center text-[#0A47F2] font-satoshi ">
                    <span className='text-[40px] font-bold'>₹3</span>
                    <span className='text-[18px]'>/minute</span>
                </div>
                <div className="flex flex-col space-y-4 font-satoshiMed">
                    <div className="flex items-center space-x-2">
                        <div className='bg-black w-4 h-4 text-white rounded-full flex items-center justify-center'>
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.5 3.59375L4.15625 6.6875L8.84375 2" stroke="white" stroke-linecap="round" />
                            </svg>

                        </div>
                        <div>60+ Language Translation</div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className='bg-black w-4 h-4 text-white rounded-full flex items-center justify-center'>
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.5 3.59375L4.15625 6.6875L8.84375 2" stroke="white" stroke-linecap="round" />
                            </svg>

                        </div>
                        <div>No Watermark</div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className='bg-black w-4 h-4 text-white rounded-full flex items-center justify-center'>
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.5 3.59375L4.15625 6.6875L8.84375 2" stroke="white" stroke-linecap="round" />
                            </svg>

                        </div>
                        <div>AI Translation lip dub</div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className='bg-black w-4 h-4 text-white rounded-full flex items-center justify-center'>
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.5 3.59375L4.15625 6.6875L8.84375 2" stroke="white" stroke-linecap="round" />
                            </svg>

                        </div>
                        <div>Process up to 3 videos at a time</div>
                    </div>

                </div>
                {/* <div
                    style={{
                        background: " linear-gradient(0deg, #0A47F2 79.79%, #B5C9FF 122.34%), radial-gradient(342.89% 359.97% at 49.74% 48.94%, rgba(10, 71, 242, 0.5) 0%, rgba(181, 201, 255, 0.5) 100%)",
                        boxShadow: "0px 0px 25px 10px #3277F826"

                    }}
                    className="bg-[#0A47F2] w-[190px] h-[51px] flex items-center justify-center rounded-[16px] text-white font-bold">
                    Get Started Now
                </div> */}
                <CTABtn/>
            </div>

        </>
    )
}

export default PriceCard