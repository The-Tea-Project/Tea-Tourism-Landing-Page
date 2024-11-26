import React, { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "tailwindcss/tailwind.css"; // Ensure you have Tailwind CSS set up

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
function PreTest() {
    const color = {
        clr1: "text-[#0A47F2]",
        clr2: "text-[#5B84F6]",
        clr3: "text-[#8EAAF9]",
        clr4: "text-[#B3C6FB]",

    }
    const containerRef = useRef(null);
    const sectionsRef = useRef([]);

    const [Itm1Clr, setItm1Clr] = useState(color.clr1);
    const [Itm2Clr, setItm2Clr] = useState(color.clr2);
    const [Itm3Clr, setItm3Clr] = useState(color.clr3);
    const [Itm4Clr, setItm4Clr] = useState(color.clr4);
    useEffect(() => {
        const trigger = ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",

            end: "+=180",
            pin: sectionsRef.current[0],
            pinSpacing: false,
            scrub: 0.001,
            onUpdate: (self) => {
                if(self.progress > 0 && self.progress < 0.222){
                    setItm1Clr(color.clr1)
                    setItm2Clr(color.clr2)
                    setItm3Clr(color.clr3)
                    setItm4Clr(color.clr4)
                } 
                else if (self.progress > 0.222 && self.progress < 0.52) {
                    setItm1Clr(color.clr2)
                    setItm2Clr(color.clr1)
                    setItm3Clr(color.clr2)
                    setItm4Clr(color.clr3)
                    
                }
                else if (self.progress > 0.52 && self.progress < 0.85) {
                    setItm1Clr(color.clr3)
                    setItm2Clr(color.clr2)
                    setItm3Clr(color.clr1)
                    setItm4Clr(color.clr2)
                    
                }
               
                else if (self.progress > 0.85) {
                    setItm1Clr(color.clr4)
                    setItm2Clr(color.clr3)
                    setItm3Clr(color.clr2)
                    setItm4Clr(color.clr1)
                    
                }
            },

        });

        // Clean up
        return () => {
            trigger.kill();
        };
    }, []);
    
    return (
        <>

            <div ref={containerRef} className="font-satoshi bg-[#F0F3F6]  flex w-full h-screen justify-center items-center text-[40px]">
                <div className="flex scroll-snap-y-mandatory scroll-snap-stop-always ">
                    <div className="whitespace-nowrap" ref={(el) => (sectionsRef.current[0] = el)}>
                        Perfect solution for
                    </div>

                    <div className="text flex flex-col font-bold" >
                        <div className={ Itm1Clr + " px-2 "}>Educators</div>
                        <div className={ Itm2Clr + " px-2 "}>Institutions</div>
                        <div className={ Itm3Clr + " px-2 "}>Platforms</div>
                        <div className={ Itm4Clr + " px-2 "}>Businesses</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PreTest