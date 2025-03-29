import React from 'react'
import CTABtn from '../components/CTABtn'

function CTA() {
    return (
        <div id="cta" className="w-full bg-[var(--cream)] py-[80px]">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto tea-cta-gradient rounded-xl p-10 text-center shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/assets/tea-leaves.svg')] opacity-10"></div>
                    <div className="relative z-10">
                        <h2 className="font-satoshi text-[32px] lg:text-[40px] font-bold mb-6 text-white">
                            Get Started
                        </h2>
                        <p className="font-satoshiMed text-[18px] mb-8 text-white">
                            Plan your next adventure in the heart of tea country!
                        </p>
                        <CTABtn text="EXPLORE NOW" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTA