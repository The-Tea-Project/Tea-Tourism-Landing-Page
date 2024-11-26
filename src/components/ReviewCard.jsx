import React from 'react'

function ReviewCard(props) {
    return (
        <>
            <div className="flex-none w-11/12 lg:w-[724px] h-[487px] bg-white rounded-[32px] flex flex-col justify-around p-16 text-black">
                <img src="assets/stars.png" alt="" srcset="" className='w-[150px]' />
                <div className="text-[20px] font-satoshiMed">
                    {props.review}
                </div>
                <div className="flex items-center mt-3">
                    <div className="bg-black rounded-full w-[48px] h-[48px]">
                        <img src={props.img} alt="" srcset="" className="rounded-full w-[48px] h-[48px]"/>
                    </div>
                    <div className="flex flex-col mx-2">
                        <div className="text-[18px]  font-satoshiMed">{props.name}</div>
                        <div className="text-[18px] text-[#0A47F2] font-satoshiMed">{props.position}</div>
                    </div>
                </div>
            </div>
        </>)
}

export default ReviewCard