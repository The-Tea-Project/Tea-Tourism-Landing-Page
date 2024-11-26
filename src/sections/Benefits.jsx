import React from 'react'
import CTAWideBtn from '../components/CTAWideBtn'

function Benefits() {
    return (
        <>
            <div id='benefits' 
            style={{
                backgroundImage: `url('assets/Union.png')`,
                backgroundSize: 'cover', // Adjusts the image to cover the entire div
                backgroundPosition: 'center', // Centers the background image
                backgroundRepeat: 'no-repeat', // Prevents the image from repeating
            }}
            className="flex justify-center max-w-full items-center flex-col py-40 overflow-clip">


                {/* <img src="assets/Union.png" alt="" srcset="" className='absolute w-full -translate-y-[1400px] scale-y-150  -z-10 mt-96' /> */}

                <img src="assets\Benifits.png" alt="" srcset="" className='w-[48px] ' />
                <div className="text-[40px] font-bold my-6 font-satoshi text-white">Benefits</div>
                <div className="text-[20px] text-center font-satoshiMed text-white px-12">
                    Our intuitive platform makes it easy for anyone to create multilingual content, helping you <br />
                    connect with audiences around the world like never before.
                </div>
                <div className=" flex flex-wrap justify-center mt-16 my-[64px] space-y-6 lg:space-y-3 lg:space-x-3  mx-6">
                    <div className="lg:w-[540px] w-[352px] h-[408px] bg-white rounded-[32px] mt-3">
                        <div className="flex flex-col justify-between items-center h-full p-8">
                            <div className="text-[24px] font-bold font-satoshi">Time-Saving</div>
                            <img src="assets/TimeSaving.png" alt="" srcset="" className='' />

                            <div className="text-[18px] text-center font-satoshiMed">Expand your audience by making content accessible in multiple languages.</div>
                        </div>
                    </div>
                    <div className="lg:w-[540px] w-[352px] h-[408px] bg-white rounded-[32px]">
                        <div className="flex flex-col justify-between items-center h-full p-8">
                            <div className="text-[24px] font-bold font-satoshi">User-Friendly</div>
                            <img src="assets/UserFriendly.png" alt="" srcset="" className='' />

                            <div className="text-[18px] text-center font-satoshiMed">Expand your audience by making content accessible in multiple languages.</div>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-6 lg:space-y-3">

                        <div className="lg:w-[540px] w-[352px] h-[408px] bg-white rounded-[32px] ">
                            <div className="flex flex-col justify-between items-center h-full p-8">
                                <div className="text-[24px] font-bold font-satoshi">Global Reach</div>
                                <img src="assets/GlobalReach.png" alt="" srcset="" className='' />
                                <div className="text-[18px] text-center font-satoshiMed">Expand your audience by making content accessible in multiple languages.</div>
                            </div>
                        </div>
                        <div className="lg:w-[540px] w-[352px] h-[408px] bg-white rounded-[32px]">
                            <div className="flex flex-col justify-between items-center h-full p-8">
                                <div className="text-[24px] font-bold font-satoshi">Cost-Saving</div>
                                <img src="assets/CostSaving.png" alt="" srcset="" className='' />

                                <div className="text-[18px] text-center font-satoshiMed">Expand your audience by making content accessible in multiple languages.</div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-[550px]  w-[352px] h-[608px] lg:h-[832px] bg-white rounded-[32px] mb-3">
                        <div className="flex flex-col justify-between items-center h-full p-8">
                            <div className="text-[24px] font-bold font-satoshi">Create your own plan</div>
                            <img src="assets/CreateYourOwnPlan.png" alt="" srcset="" className='' />

                            <div className="text-[18px] text-center font-satoshiMed">Create your own subscription that perfectly fits your needs and budget</div>
                        </div>
                    </div>
                </div>
                {/* <CTAWideBtn /> */}
            </div>
        </>
    )
}

export default Benefits