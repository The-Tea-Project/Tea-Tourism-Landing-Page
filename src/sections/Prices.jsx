import React from 'react'
import PriceCard from '../components/PriceCard'

function Prices() {
    return (
        <>
            <div className="bg-black w-full flex flex-col justify-center items-center text-white h-[1336px] ">
                <img src="assets/Union.png" alt="" srcset="" className='absolute w-full z-10 mt-96 overflow-hidden' />
                <div className="pt-96 z-20 flex flex-col items-center justify-center">

                
                <img src="assets/Price.png" alt="" srcset="" className='w-[48px] z-20' />
                <div className="text-[56px] z-20 font-bold my-6 font-satoshi">Pricing plans for all use cases</div>
                <div className="text-[20px] z-20 font-satoshiMed">Unlock a world of international engagement with our effortless, cutting-edge solution</div>
                <div className="flex items-center justify-center z-20 space-x-6 mt-16">
                    <div className="text-[20px] font-bold font-satoshi">Annually</div>
                    <label class="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div class="relative w-11 h-6 bg-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-white dark:peer-focus:ring-white rounded-full peer dark:bg-white peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-[#0A47F2] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-white peer-checked:bg-white"></div>

                    </label>
                    <div className="text-[20px] text-[#8EAAF9] font-bold font-satoshi">Monthly</div>

                </div>
                <div className="flex z-20 mt-16 space-x-12">
                    <PriceCard/>
                    <PriceCard/>
                    <PriceCard/>
                </div>
                </div>
            </div>
        </>)
}

export default Prices