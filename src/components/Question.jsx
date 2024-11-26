import React, { useEffect, useState } from 'react'

function Question(props) {
    const [height, setheight] = useState("h-[0px] scale-0");
    const [rotation, setrotation] = useState("");
    const handleClick = () => {
        if (rotation === "") {

            setheight("h-[296px] scale-100");
            setrotation("rotate-45");
        }
        else {

            setheight("h-[0px] scale-0");
            setrotation("");

        }
    }

    return (
        <>
            <div onClick={handleClick} className={"flex-col lg:w-4/5 w-11/12 max-w-[1104px] bg-white hover:bg-[#EBF5FF]  rounded-[32px] flex items-center justify-between px-6 duration-200"}>
                <div className="flex items-center justify-between w-full h-[78px]">

                    <div className="lg:text-[20px] text-[14px] font-bold font-satoshi">{props.title}</div>
                    <button onClick={handleClick} className={rotation + " duration-200"}>

                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="11" width="2" height="24" rx="1" fill="#0E0E0C" />
                            <rect x="24" y="11" width="2" height="24" rx="1" transform="rotate(90 24 11)" fill="#0E0E0C" />
                        </svg>
                    </button>
                </div>
                <div className={height + " w-full duration-200"}>
                    <div className="text-[20px]">
                        {props.content}

                    </div>
                </div>

            </div>
        </>)
}

export default Question