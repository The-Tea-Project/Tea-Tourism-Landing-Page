import React from 'react'

function ForEnterprise() {
    return (
        <div id="edtech" className="w-full bg-[var(--light-bg)] py-[80px] relative">
            <div className="absolute inset-0 bg-[url('/assets/tea-pattern.svg')] opacity-5"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-[48px]">
                    <h2 className="font-satoshi text-[40px] lg:text-[48px] font-bold mb-4 text-[var(--text-dark)]">EdTech Stuff</h2>
                    <p className="font-satoshiMed text-[18px] max-w-3xl mx-auto text-[var(--text-dark)]">
                        We provide a range of engaging courses and training sessions that cover every aspect of tea farming, processing, and sustainable agriculture.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {/* Course 1 */}
                    <div className="tea-card bg-white">
                        <div className="p-6">
                            <h3 className="font-satoshi text-[24px] font-bold mb-3 text-[var(--primary)]">Tea Cultivation 101</h3>
                            <p className="font-satoshiMed text-[16px] mb-4 text-[var(--text-dark)]">
                                Get introduced to the fundamentals of tea farming—from preparing the soil and planting to adopting sustainable practices that align with modern smart farming.
                            </p>
                            <a href="#" className="text-[var(--primary)] font-satoshi font-bold hover:underline">Learn more →</a>
                        </div>
                    </div>

                    {/* Course 2 */}
                    <div className="tea-card bg-white">
                        <div className="p-6">
                            <h3 className="font-satoshi text-[24px] font-bold mb-3 text-[var(--primary)]">Processing & Production</h3>
                            <p className="font-satoshiMed text-[16px] mb-4 text-[var(--text-dark)]">
                                Dive into the craft of tea production, learning everything from leaf plucking to perfecting fermentation and drying techniques.
                            </p>
                            <a href="#" className="text-[var(--primary)] font-satoshi font-bold hover:underline">Learn more →</a>
                        </div>
                    </div>

                    {/* Course 3 */}
                    <div className="tea-card bg-white">
                        <div className="p-6">
                            <h3 className="font-satoshi text-[24px] font-bold mb-3 text-[var(--primary)]">Digital Innovations in Agriculture</h3>
                            <p className="font-satoshiMed text-[16px] mb-4 text-[var(--text-dark)]">
                                See how cutting-edge technology like real-time imagery and precision sensors is transforming tea production through virtual support.
                            </p>
                            <a href="#" className="text-[var(--primary)] font-satoshi font-bold hover:underline">Learn more →</a>
                        </div>
                    </div>

                    {/* Course 4 */}
                    <div className="tea-card bg-white">
                        <div className="p-6">
                            <h3 className="font-satoshi text-[24px] font-bold mb-3 text-[var(--primary)]">Cultural and Culinary Connections</h3>
                            <p className="font-satoshiMed text-[16px] mb-4 text-[var(--text-dark)]">
                                Experience local culinary delights and understand the broader impact of tea on local communities.
                            </p>
                            <a href="#" className="text-[var(--primary)] font-satoshi font-bold hover:underline">Learn more →</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForEnterprise