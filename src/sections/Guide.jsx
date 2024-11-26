import React from 'react'
import Select from 'react-select'
function Guide() {
    const countries = [
        { "value": "Avatar (1).jpg", "label": "German", "image": (<svg xmlns="http://www.w3.org/2000/svg" className='w-[24px]' width="32" height="32" viewBox="0 0 32 32"><path fill="#cc2b1d" d="M1 11H31V21H1z"></path><path d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"></path><path d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" transform="rotate(180 16 24)" fill="#f8d147"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>) },
        { "value": "Avatar (2).jpg", "label": "English", "image": (<svg xmlns="http://www.w3.org/2000/svg" className='w-[24px]' width="32" height="32" viewBox="0 0 32 32"><rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#fff"></rect><path fill="#be2a2a" d="M31 14L18 14 18 4 14 4 14 14 1 14 1 18 14 18 14 28 18 28 18 18 31 18 31 14z"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>) },
        { "value": "Avatar (3).jpg", "label": "Polish", "image": (<svg xmlns="http://www.w3.org/2000/svg" className='w-[24px]' width="32" height="32" viewBox="0 0 32 32"><path d="M1,24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V15H1v9Z" fill="#cb2e40"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4v8H31V8c0-2.209-1.791-4-4-4Z" fill="#fff"></path><path d="M5,28H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4ZM2,8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>) },
        { "value": "Avatar (4).jpg", "label": "Czech", "image": (<svg xmlns="http://www.w3.org/2000/svg" className='w-[24px]' width="32" height="32" viewBox="0 0 32 32"><path d="M1,24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V15H1v9Z" fill="#c62d25"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4v8H31V8c0-2.209-1.791-4-4-4Z" fill="#fff"></path><path d="M2.316,26.947l13.684-10.947L2.316,5.053c-.803,.732-1.316,1.776-1.316,2.947V24c0,1.172,.513,2.216,1.316,2.947Z" fill="#1e427b"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>) },
        { "value": "Avatar (5).jpg", "label": "Hindi", "image": (<svg xmlns="http://www.w3.org/2000/svg" className='w-[24px]' width="32" height="32" viewBox="0 0 32 32"><path fill="#fff" d="M1 11H31V21H1z"></path><path d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" fill="#e06535"></path><path d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" transform="rotate(180 16 24)" fill="#2c6837"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M16,12.292c-2.048,0-3.708,1.66-3.708,3.708s1.66,3.708,3.708,3.708,3.708-1.66,3.708-3.708-1.66-3.708-3.708-3.708Zm3.041,4.109c-.01,.076,.042,.145,.117,.157-.033,.186-.08,.367-.143,.54-.071-.028-.152,.006-.181,.077-.029,.071,.004,.151,.073,.182-.04,.085-.083,.167-.13,.248l-1.611-1.069-.592-.249c.013-.026,.024-.053,.034-.081l.595,.242,1.895,.383-1.833-.616-.636-.087c.006-.028,.009-.057,.011-.087l.638,.08,1.93-.12-1.93-.12-.638,.08c-.002-.03-.005-.059-.011-.087l.636-.087,1.833-.616-1.895,.383-.595,.242c-.009-.028-.021-.055-.034-.081l.592-.249,1.611-1.069c.047,.081,.09,.163,.13,.248-.07,.031-.103,.111-.073,.182,.029,.071,.11,.105,.181,.077,.063,.173,.111,.354,.143,.54-.075,.012-.127,.081-.117,.157,.01,.076,.078,.129,.154,.121,.008,.092,.013,.185,.013,.279s-.005,.187-.013,.279c-.075-.008-.144,.045-.154,.121Zm-.584-2.462c-.059,.048-.07,.134-.023,.194,.046,.06,.132,.072,.194,.028,.053,.076,.104,.155,.15,.236l-1.731,.861-.512,.388c-.016-.024-.034-.047-.054-.069l.508-.394,1.28-1.45-1.45,1.28-.394,.508c-.022-.019-.045-.038-.069-.054l.388-.512,.861-1.731c.081,.047,.16,.097,.236,.15-.045,.061-.033,.147,.028,.194,.061,.046,.147,.036,.194-.023,.071,.06,.141,.123,.207,.189,.066,.066,.129,.135,.189,.207Zm-2.177-1.133c-.008,.075,.045,.144,.121,.154,.076,.01,.145-.042,.157-.117,.186,.033,.367,.08,.54,.143-.028,.071,.006,.152,.077,.181,.071,.029,.151-.004,.182-.073,.085,.04,.167,.083,.248,.13l-1.069,1.611-.249,.592c-.026-.013-.053-.024-.081-.034l.242-.595,.383-1.895-.616,1.833-.087,.636c-.028-.006-.057-.009-.087-.011l.08-.638-.12-1.93-.12,1.93,.08,.638c-.03,.002-.059,.005-.087,.011l-.087-.636-.616-1.833,.383,1.895,.242,.595c-.028,.009-.055,.021-.081,.034l-.249-.592-1.069-1.611c.081-.047,.163-.09,.248-.13,.031,.07,.111,.103,.182,.073,.071-.029,.105-.11,.077-.181,.173-.063,.354-.111,.54-.143,.012,.075,.081,.127,.157,.117,.076-.01,.129-.078,.121-.154,.092-.008,.185-.013,.279-.013s.187,.005,.279,.013Zm-3.113,4.368c-.029-.071-.11-.105-.181-.077-.063-.173-.111-.354-.143-.54,.075-.012,.127-.081,.117-.157-.01-.076-.078-.129-.154-.121-.008-.092-.013-.185-.013-.279s.005-.187,.013-.279c.075,.008,.144-.045,.154-.121,.01-.076-.042-.145-.117-.157,.033-.186,.08-.367,.143-.54,.071,.028,.152-.006,.181-.077,.029-.071-.004-.151-.073-.182,.04-.085,.083-.167,.13-.248l1.611,1.069,.592,.249c-.013,.026-.024,.053-.034,.081l-.595-.242-1.895-.383,1.833,.616,.636,.087c-.006,.028-.009,.057-.011,.087l-.638-.08-1.93,.12,1.93,.12,.638-.08c.002,.03,.005,.059,.011,.087l-.636,.087-1.833,.616,1.895-.383,.595-.242c.009,.028,.021,.055,.034,.081l-.592,.249-1.611,1.069c-.047-.081-.09-.163-.13-.248,.07-.031,.103-.111,.073-.182Zm.772-3.63c.048,.059,.134,.07,.194,.023,.06-.046,.072-.132,.028-.194,.076-.053,.155-.104,.236-.15l.861,1.731,.388,.512c-.024,.016-.047,.034-.069,.054l-.394-.508-1.45-1.28,1.28,1.45,.508,.394c-.019,.022-.038,.045-.054,.069l-.512-.388-1.731-.861c.047-.081,.097-.16,.15-.236,.061,.045,.147,.033,.194-.028,.046-.061,.036-.147-.023-.194,.06-.071,.123-.141,.189-.207s.135-.129,.207-.189Zm-.395,4.518c.059-.048,.07-.134,.023-.194-.046-.06-.132-.072-.194-.028-.053-.076-.104-.155-.15-.236l1.731-.861,.512-.388c.016,.024,.034,.047,.054,.069l-.508,.394-1.28,1.45,1.45-1.28,.394-.508c.022,.019,.045,.038,.069,.054l-.388,.512-.861,1.731c-.081-.047-.16-.097-.236-.15,.045-.061,.033-.147-.028-.194-.061-.046-.147-.036-.194,.023-.071-.06-.141-.123-.207-.189-.066-.066-.129-.135-.189-.207Zm2.177,1.133c.008-.075-.045-.144-.121-.154-.076-.01-.145,.042-.157,.117-.186-.033-.367-.08-.54-.143,.028-.071-.006-.152-.077-.181-.071-.029-.151,.004-.182,.073-.085-.04-.167-.083-.248-.13l1.069-1.611,.249-.592c.026,.013,.053,.024,.081,.034l-.242,.595-.383,1.895,.616-1.833,.087-.636c.028,.006,.057,.009,.087,.011l-.08,.638,.12,1.93,.12-1.93-.08-.638c.03-.002,.059-.005,.087-.011l.087,.636,.616,1.833-.383-1.895-.242-.595c.028-.009,.055-.021,.081-.034l.249,.592,1.069,1.611c-.081,.047-.163,.09-.248,.13-.031-.07-.111-.103-.182-.073-.071,.029-.105,.11-.077,.181-.173,.063-.354,.111-.54,.143-.012-.075-.081-.127-.157-.117-.076,.01-.129,.078-.121,.154-.092,.008-.185,.013-.279,.013s-.187-.005-.279-.013Zm2.341-.738c-.048-.059-.134-.07-.194-.023-.06,.046-.072,.132-.028,.194-.076,.053-.155,.104-.236,.15l-.861-1.731-.388-.512c.024-.016,.047-.034,.069-.054l.394,.508,1.45,1.28-1.28-1.45-.508-.394c.019-.022,.038-.045,.054-.069l.512,.388,1.731,.861c-.047,.081-.097,.16-.15,.236-.061-.045-.147-.033-.194,.028-.046,.061-.036,.147,.023,.194-.06,.071-.123,.141-.189,.207s-.135,.129-.207,.189Z" fill="#2c2c6b"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>) },
        { "value": "Avatar (6).jpg", "label": "French", "image": (<svg xmlns="http://www.w3.org/2000/svg" className='w-[24px]' width="32" height="32" viewBox="0 0 32 32"><path fill="#fff" d="M10 4H22V28H10z"></path><path d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" fill="#092050"></path><path d="M25,4h6V28h-6c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" transform="rotate(180 26 16)" fill="#be2a2c"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>) },
    ]
        ;

    const formatOptionLabel = ({ value, label, image }) => (
        <div className='flex items-center justify-start'>
            <div className="w-[24px] ">

                {image}
            </div>
            <div className="mx-2">

                {label}
            </div>
        </div>
    );
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            border: 'none', // Remove the default border
            boxShadow: 'none', // Remove any box shadow
            '&:hover': {
                border: 'none' // Ensure no border appears on hover
            }
        })
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center bg-[#F0F3F6] py-40">
                <img src="assets/Gears.png" alt="" srcset="" className='w-[48px]' />
                <div className="text-[40px] font-bold my-6 font-satoshi">
                    How It Works?
                </div>
                <div className="text-[20px] text-center font-satoshiMed">
                    Transforming your videos into multiple languages has never been easier! Follow these simple <br />steps to upload your content, choose your desired languages, and let our AI work its magic.
                </div>
                <div className="w-4/5 mt-12">
                    <div className="flex">
                        <div className="w-[352px] h-[352px] flex-col flex font-satoshi">
                            <div className="text-[24px] text-[#0A47F2] font-bold">
                                1
                            </div>
                            <div className="text-[40px] pr-5 font-bold pt-6 leading-[48px]">
                                Upload your video to the platform
                            </div>
                        </div>
                        <div className="bg-white grow rounded-[32px] p-8 ">
                            <div className="border-dashed border-2 w-full h-full flex items-center flex-col justify-center border-[#8EAAF9] rounded-[24px]">
                                <div className="flex flex-col items-center justify-center  hover:scale-105 duration-200">

                                    <img src="assets/upload.png" alt="" srcset="" className='w-[60px]' />
                                    <div className="text-[#5E5E5E] text-[20px] font-bold mt-4 font-satoshiMed">Click to upload a file or drag and drop</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between  mt-6">
                        <div className="w-[352px] h-[352px] bg-white rounded-[32px]">
                            <div className=" justify-center items-center h-full w-full">

                                <Select
                                    className=" rounded-full m-4"
                                    options={countries}
                                    formatOptionLabel={formatOptionLabel}
                                    isSearchable={false}
                                    placeholder="Source Language"
                                    styles={customStyles}

                                />
                            </div>
                        </div>
                        <div className="w-[352px] h-[352px] rounded-[32px] px-12 p-8 font-satoshi">
                            <div className="text-[24px] text-[#0A47F2] font-bold ">
                                2
                            </div>
                            <div className="text-[40px] pr-5 font-bold pt-6 leading-[48px]">
                                Select the target languages for translation
                            </div>
                        </div>
                        {/* <div className="w-[352px] h-[352px] bg-white rounded-[32px]"> */}
                            <div className="w-[352px] h-[352px] bg-white rounded-[32px]">
                                <div className=" justify-center items-center h-full w-full">

                                    <Select
                                        className=" rounded-full m-4"
                                        options={countries}
                                        formatOptionLabel={formatOptionLabel}
                                        isSearchable={false}
                                        placeholder="Source Language"
                                        styles={customStyles}

                                    />
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-6">
                        <div className="w-[728px] h-[352px] grow bg-white rounded-[32px]"></div>
                        <div className="w-[352px] h-[352px] rounded-[32px] px-12 p-8 font-satoshiMed">
                            <div className="text-[24px] text-[#0A47F2] font-bold ">
                                3
                            </div>
                            <div className="text-[40px] pr-5 font-bold pt-6 leading-[48px]">
                                Our AI processes the video
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-6">
                        <div className="w-[352px] h-[352px] rounded-[32px] px-6 p-8 font-satoshi">
                            <div className="text-[24px] text-[#0A47F2] font-bold ">
                                4
                            </div>
                            <div className="text-[40px] pr-5 font-bold pt-6 leading-[48px]">
                                Review and download the translated video
                            </div>
                        </div>
                        <div className="w-[728px] grow h-[352px] bg-white rounded-[32px]"></div>

                    </div>
                </div>

            </div>

        </>)
}

export default Guide