import React from 'react'

function Features() {
    return (
        <>
            <div id='features' className="w-full my-40 flex bg-[#F0F3F6] flex-col justify-center items-center py-16 text-center">
                <img src="assets/Crown.png" alt="" srcset="" className='w-[48px]' />
                <img src="assets/WithMF.png" alt="" srcset="" className='w-[322px] my-[24px]' />
                <div className="lg:text-[20px] px-12 text-[14px] font-satoshiMed text-center">
                    You can now easily translate any video content into multiple languages with just a few clicks. <br />No more struggling to understand foreign videos or spending hours on manual translations.
                </div>
                <div className="flex flex-wrap lg:flex-nowrap lg:w-4/5 w-11/12 mt-[48px] space-y-6 lg:space-y-0">
                    <div className="lg:w-[352px] w-full bg-white h-[622px] rounded-[32px] p-6">
                        <div className="flex flex-col items-center justify-between h-full">
                            <div className="text-[24px] font-bold text-center font-satoshi">
                                Multiple Language Support
                            </div>
                            <img src="assets/multiLang.png" alt="" srcset="" className='w-full' />
                            <div className="text-[18px] text-center p-6 font-satoshi">
                                We support a variety of languages for broad accessibility.
                            </div>
                        </div>
                    </div>
                    <div className="grow  flex-wrap flex-col flex lg:ml-6">
                        <div className="w-full  bg-white h-[299px] rounded-[32px]">
                            <div className="flex justify-between flex-col items-center p-6 h-full">

                                <div className="text-[24px] font-bold font-satoshi">
                                    Easy Upload
                                </div>
                                <img src="assets/EsyUpload.png" alt="" srcset="" className='w-60 max-w-[728px]' />
                                <div className="text-[18px] font-satoshiMed">
                                    Simple process of uploading content for translation.
                                </div>
                            </div>
                        </div>
                        <div className="w-full  bg-white h-[299px] rounded-[32px] mt-6">
                            <div className="flex flex-col items-center justify-between p-6 h-full">
                                <div className="text-[24px] font-bold font-satoshi">
                                    Voice Preservation
                                </div>
                                <img src="assets/wave.png" alt="" srcset="" className='w-full max-w-[728px]' />
                                <div className="text-[18px] font-satoshiMed">
                                    Maintains the original speaker's voice in the translation.
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex lg:w-4/5 w-11/12 lg:flex-nowrap flex-wrap mt-[24px] space-y-6 lg:space-y-0">
                    <div className="grow  bg-white h-[622px] rounded-[32px]">
                        <div className="flex justify-between flex-col items-center p-0 h-full">

                            <div className="text-[24px] font-bold font-satoshi p-6">
                                On-Screen Text Translation
                            </div>
                            <img src="assets/OnScrrenText.png" alt="" srcset="" className='max-h-[435px]' />
                            <div className="text-[18px] font-satoshiMed p-6">
                                Translates any text on screen into the target language, ensuring consistency and accuracy.
                            </div>
                        </div>
                    </div>

                    <div className=" lg:w-[352px] w-full bg-white h-[622px] lg:ml-6 rounded-[32px]">
                        <div className="flex justify-between flex-col items-center p-6 h-full">

                            <div className="text-[24px] font-bold font-satoshi">
                                Lip-Sync Technology
                            </div>
                            <img src="assets/sync.png" alt="" srcset="" className='w-[182px] max-w-[728px]' />
                            <div className="text-[18px] font-satoshiMed">
                                AI-driven lip-syncing to keep the translated speech in sync with the original video.
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </>)
}

export default Features