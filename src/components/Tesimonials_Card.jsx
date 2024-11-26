import React from 'react'

function Tesimonials_Card(props) {
    return (
        <>
            <div className="flex flex-col lg:w-[352px]  bg-white p-8 pb-9 rounded-[32px]  h-[167px] justify-between">
                <div className="text-[40px] font-bold text-[#0A47F2] font-satoshi">
                    {props.percentage}
                </div>
                <div className="text-[18px] font-satoshiMed whitespace-nowrap">
                    {props.text}
                </div>
            </div>
        </>)
}

export default Tesimonials_Card