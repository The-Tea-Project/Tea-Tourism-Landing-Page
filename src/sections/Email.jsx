import React from 'react'
import EmailBar from '../components/EmailBar'

function Email() {
    return (
        <>
            <div  id='email' className=" bg-[#F0F3F6] my-40 w-full flex flex-col items-center justify-center">
                <div className="lg:text-[56px] text-[32px]  font-bold my-6 text-center lg:leading-[67px] leading-[42px] font-satoshi">Want to hear from us or need more info?</div>
                <div className="lg:text-[20px] text-[14px] text-center font-satoshiMed px-12">
                    Drop your email here, and we’ll get back to you with the latest updates and any help you need!
                </div>
                <div className="mt-16 w-full flex items-center justify-center">

                    <EmailBar />
                </div>
            </div>

        </>)
}

export default Email