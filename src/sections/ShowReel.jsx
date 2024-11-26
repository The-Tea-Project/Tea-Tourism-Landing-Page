import React from 'react'

function ShowReel() {
    return (
        <>
            <div className="w-full lg:p-[120px] p-3 z-20 flex items-center justify-center">
                <div className="w-full bg-[#fff] lg:rounded-[32px] sm:rounded-[3px] ">
                    {/* <img src="assets/Desktop.png" alt="" srcset="" className='w-full' /> */}
                    <iframe className='w-full lg:rounded-[12px] rounded-[6px] lg:h-[644px] h-[210px]' width="560"  src="https://www.youtube.com/embed/grAKdEFqZYo?si=yxVQZC55Hwvq6d8a" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </>
    )
}

export default ShowReel