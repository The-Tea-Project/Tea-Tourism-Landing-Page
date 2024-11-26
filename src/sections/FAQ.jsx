import React from 'react'
import Question from '../components/Question'

function FAQ() {
    return (
        <>

            <div className="bg-[#F0F3F6] my-40 text-black flex flex-col items-center justify-center">
                <img src="assets/FAQ.png" alt="" srcset="" className='w-[48px]' />
                <div className="lg:text-[56px] text-[32px] font-bold my-6 font-satoshi text-center">Questions & Answers</div>
                <div className="lg:text-[20px] text-[14px] text-center font-satoshiMed px-12">Find answers to common questions about MetaFrazo. We’ve got you covered on everything <br /> from how the platform works to tips for getting the best results.</div>
                <div className="flex flex-col w-full items-center justify-center mt-16 space-y-6">
                    <Question title="What sets MetaFrazo apart from other translation services?" content="Our platform supports a wide array of languages and dialects, catering to diverse global audiences. We prioritize user experience with an intuitive interface and customizable features, allowing clients to tailor translations to their specific needs. Additionally, MetaFrazo offers competitive pricing and rapid turnaround times, making high-quality translation services accessible and efficient for all users." />
                    <Question title="What languages does MetaFrazo support?" content="Over 35 languages including Spanish, French, German, Chinese, Japanese, Korean, Arabic, Hindi, Duths, Portuguese, Russian, Italian"/>
                    <Question title="How secure is my content on MetaFrazo?" content="MetaFrazo prioritizes the security and confidentiality of your content. We implement robust measures to protect your data throughout the translation and dubbing process. Our platform employs advanced encryption protocols to safeguard your information during transmission and storage."/>
                    <Question title="Can MetaFrazo handle large-scale translation projects for enterprises?" content="Yes, please contact shrikarlekkala@metafrazocc.com for large scale projects"/>
                    <Question title="How can I get started with using MetaFrazo?" content='Start off with signing up for the new beta https://dh4ftmjzfzn.typeform.com/to/XuzeNABu '/>
                    
                </div>
            </div>

        </>)
}

export default FAQ