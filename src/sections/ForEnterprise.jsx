import React from 'react'

function ForEnterprise() {
    return (
        <div className=' flex-col flex w-full items-center justify-center font-satoshi my-40'>
            <div style={{
                backgroundImage: `url('assets/bgGradient.png')`,
                backgroundSize: 'cover', // Adjusts the image to cover the entire div
                backgroundPosition: 'center', // Centers the background image
                backgroundRepeat: 'no-repeat', // Prevents the image from repeating
            }}
                className="flex mx-3 lg:w-[1104px] h-[488px]  rounded-[32px] flex-col space-y-12 items-center justify-center">
                {/* <img src="assets/bgGradient.png" alt="" srcset="" className='-z-10 absolute' /> */}

                <div className="flex space-y-6 flex-col">

                    <div className="text-6xl font-bold text-center text-white">MetaFrazo for Enterprise</div>
                    <div className="text-[20px] px-3 font-medium font-satoshi text-white text-center">MetaFrazo for Enterprise provides you with 99% accurate translational model and up to 10 requests</div>
                </div>
                <a href="https://dh4ftmjzfzn.typeform.com/to/XuzeNABu" target="_blank">

                <div className="flex font-satoshi bg-white w-[144px] h-[51px] rounded-full items-center justify-center">
                    Contact Us
                </div>
                </a>
            </div>
        </div>
    )
}

export default ForEnterprise