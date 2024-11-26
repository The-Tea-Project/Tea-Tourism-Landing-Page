import React from 'react'
import "../App.css"
import Tesimonials_Card from '../components/Tesimonials_Card'
import CTAWideBtn from '../components/CTAWideBtn'

function Testimonials() {
    return (
        <>
            <div className="bg-[#F0F3F6] flex w-full my-20 flex-col items-center justify-center ">
                <div className="flex space-x-0 lg:space-x-6 flex-wrap space-y-6 px-6">
                    <div className="p-0 w-full lg:w-[352px] lg:mt-6 m-0 rounded-[32px]  boxShadow hover:shadow-2xl hover:shadow-[#EBF5FF]">

                        <Tesimonials_Card percentage={"90%"} text={"Faster than industry standards"} />
                    </div>
                    <div className="p-0 m-0 lg:w-[352px] rounded-[32px] w-full boxShadow hover:shadow-2xl hover:shadow-[#EBF5FF]">

                        <Tesimonials_Card percentage={"94%"} text={"Cheaper compared to competitors"} />
                    </div>
                    <div className="p-0 m-0 lg:w-[352px] rounded-[32px] w-full boxShadow hover:shadow-2xl hover:shadow-[#EBF5FF]">
                        <Tesimonials_Card percentage={"99%"} text={"Accuracy in translations"} />
                    </div>
                </div>
                {/* <CTAWideBtn /> */}
            </div>
        </>)
}

export default Testimonials