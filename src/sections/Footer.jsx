import React from 'react'

function Footer() {
    return (
        <><div className="bg-[#0E0E0C] rounded-t-3xl">
            <div className=" flex-wrap  w-full flex p-12 lg:p-48 pt-16 pb-0 font-satoshiMed text-white justify-between items-">
                <div className="flex  lg:basis-1/3 flex-col  space-y-6">
                    <img src="assets/logo.png" alt="" className='w-[302px] items-center justify-center inline-flex ' />
                    <div className="text-[14px] font-satoshiMed text-center lg:text-left">
                        Globalize your content with lip-sync, preserved original voices, and accurate on-screen text translation—faster and more cost-effectively than ever.
                    </div>
                    <div className="flex space-x-4 items-center justify-center lg:justify-start">
                        <a href="https://www.linkedin.com/in/shrikar-lekkala/">
                            <div className="1"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.2933 0.666202H2.70664C2.45275 0.662676 2.20064 0.709199 1.96473 0.803114C1.72882 0.897029 1.51371 1.0365 1.33171 1.21355C1.1497 1.39061 1.00435 1.60178 0.903966 1.83501C0.80358 2.06825 0.750121 2.31897 0.746643 2.57287V25.4262C0.750121 25.6801 0.80358 25.9308 0.903966 26.1641C1.00435 26.3973 1.1497 26.6085 1.33171 26.7855C1.51371 26.9626 1.72882 27.102 1.96473 27.196C2.20064 27.2899 2.45275 27.3364 2.70664 27.3329H25.2933C25.5472 27.3364 25.7993 27.2899 26.0352 27.196C26.2711 27.102 26.4862 26.9626 26.6682 26.7855C26.8503 26.6085 26.9956 26.3973 27.096 26.1641C27.1964 25.9308 27.2498 25.6801 27.2533 25.4262V2.57287C27.2498 2.31897 27.1964 2.06825 27.096 1.83501C26.9956 1.60178 26.8503 1.39061 26.6682 1.21355C26.4862 1.0365 26.2711 0.897029 26.0352 0.803114C25.7993 0.709199 25.5472 0.662676 25.2933 0.666202ZM8.78664 22.9862H4.78664V10.9862H8.78664V22.9862ZM6.78664 9.3062C6.23499 9.3062 5.70594 9.08706 5.31586 8.69698C4.92579 8.30691 4.70664 7.77785 4.70664 7.2262C4.70664 6.67455 4.92579 6.1455 5.31586 5.75542C5.70594 5.36534 6.23499 5.1462 6.78664 5.1462C7.07957 5.11298 7.37621 5.14201 7.65714 5.23138C7.93808 5.32075 8.19696 5.46846 8.41685 5.66482C8.63674 5.86118 8.81268 6.10177 8.93314 6.37084C9.0536 6.63992 9.11587 6.9314 9.11587 7.2262C9.11587 7.52101 9.0536 7.81249 8.93314 8.08156C8.81268 8.35063 8.63674 8.59122 8.41685 8.78759C8.19696 8.98395 7.93808 9.13165 7.65714 9.22102C7.37621 9.3104 7.07957 9.33942 6.78664 9.3062ZM23.2133 22.9862H19.2133V16.5462C19.2133 14.9329 18.64 13.8795 17.1866 13.8795C16.7369 13.8828 16.2989 14.0239 15.9318 14.2838C15.5646 14.5436 15.286 14.9098 15.1333 15.3329C15.029 15.6463 14.9838 15.9763 15 16.3062V22.9729H11C11 22.9729 11 12.0662 11 10.9729H15V12.6662C15.3634 12.0357 15.8919 11.5162 16.5286 11.1638C17.1653 10.8114 17.8861 10.6393 18.6133 10.6662C21.28 10.6662 23.2133 12.3862 23.2133 16.0795V22.9862Z" fill="white" />
                            </svg>
                            </div>
                        </a>
                        <a href='https://www.instagram.com/metafrazo_/'>
                            <div className="2">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 10.6937C13.346 10.6937 12.7067 10.8876 12.1629 11.2509C11.6192 11.6143 11.1953 12.1307 10.9451 12.7349C10.6948 13.3391 10.6293 14.004 10.7569 14.6454C10.8845 15.2869 11.1994 15.876 11.6619 16.3385C12.1243 16.8009 12.7135 17.1159 13.3549 17.2435C13.9964 17.371 14.6612 17.3056 15.2654 17.0553C15.8696 16.805 16.3861 16.3812 16.7494 15.8374C17.1128 15.2936 17.3067 14.6543 17.3067 14.0003C17.3067 13.5661 17.2212 13.1361 17.055 12.7349C16.8888 12.3337 16.6452 11.9692 16.3382 11.6622C16.0311 11.3551 15.6666 11.1115 15.2654 10.9454C14.8642 10.7792 14.4343 10.6937 14 10.6937ZM27.24 7.42699C27.233 6.39734 27.0434 5.37709 26.68 4.41366C26.4124 3.70867 25.9983 3.06845 25.4651 2.53524C24.9319 2.00203 24.2917 1.58795 23.5867 1.32033C22.6233 0.956944 21.603 0.76734 20.5734 0.760325C18.8534 0.666992 18.3467 0.666992 14 0.666992C9.65335 0.666992 9.14669 0.666992 7.42669 0.760325C6.39703 0.76734 5.37678 0.956944 4.41335 1.32033C3.70837 1.58795 3.06815 2.00203 2.53493 2.53524C2.00172 3.06845 1.58764 3.70867 1.32002 4.41366C0.956639 5.37709 0.767035 6.39734 0.76002 7.42699C0.666687 9.14699 0.666687 9.65366 0.666687 14.0003C0.666687 18.347 0.666687 18.8537 0.76002 20.5737C0.774372 21.6069 0.963719 22.6303 1.32002 23.6003C1.58646 24.3021 2.00019 24.9386 2.53335 25.467C3.06428 26.0034 3.70587 26.4175 4.41335 26.6803C5.37678 27.0437 6.39703 27.2333 7.42669 27.2403C9.14669 27.3337 9.65335 27.3337 14 27.3337C18.3467 27.3337 18.8534 27.3337 20.5734 27.2403C21.603 27.2333 22.6233 27.0437 23.5867 26.6803C24.2942 26.4175 24.9358 26.0034 25.4667 25.467C25.9998 24.9386 26.4136 24.3021 26.68 23.6003C27.043 22.6322 27.2326 21.6076 27.24 20.5737C27.3334 18.8537 27.3334 18.347 27.3334 14.0003C27.3334 9.65366 27.3334 9.14699 27.24 7.42699ZM23.8534 18.0937C23.8106 18.9165 23.635 19.7269 23.3334 20.4937C23.0745 21.1332 22.6897 21.7142 22.2018 22.2021C21.7139 22.69 21.1329 23.0748 20.4934 23.3337C19.7194 23.6185 18.9044 23.776 18.08 23.8003C17.0267 23.8003 16.7467 23.8003 14 23.8003C11.2534 23.8003 10.9734 23.8003 9.92002 23.8003C9.09566 23.776 8.28067 23.6185 7.50669 23.3337C6.84549 23.0879 6.24839 22.696 5.76002 22.187C5.27691 21.7087 4.90381 21.1308 4.66669 20.4937C4.38076 19.7205 4.2275 18.9046 4.21335 18.0803C4.21335 17.027 4.21335 16.747 4.21335 14.0003C4.21335 11.2537 4.21335 10.9737 4.21335 9.92032C4.2275 9.09609 4.38076 8.28017 4.66669 7.50699C4.9124 6.8458 5.30439 6.24869 5.81335 5.76033C6.2938 5.27982 6.87104 4.90712 7.50669 4.66699C8.28067 4.3822 9.09566 4.22461 9.92002 4.20033C10.9734 4.20033 11.2534 4.20033 14 4.20033C16.7467 4.20033 17.0267 4.20033 18.08 4.20033C18.9044 4.22461 19.7194 4.3822 20.4934 4.66699C21.1545 4.9127 21.7516 5.30469 22.24 5.81366C22.7231 6.29199 23.0962 6.86983 23.3334 7.50699C23.6181 8.28098 23.7757 9.09597 23.8 9.92032C23.8 10.9737 23.8 11.2537 23.8 14.0003C23.8 16.747 23.8934 17.027 23.8534 18.0803V18.0937ZM21.72 8.17366C21.5613 7.74297 21.311 7.35185 20.9864 7.02728C20.6618 6.7027 20.2707 6.45241 19.84 6.29366C19.2486 6.08867 18.6258 5.98938 18 6.00033C16.96 6.00033 16.6667 6.00033 14 6.00033C11.3334 6.00033 11.04 6.00033 10 6.00033C9.37104 6.00647 8.74811 6.12384 8.16002 6.34699C7.73593 6.49853 7.34894 6.73861 7.0248 7.05126C6.70065 7.36391 6.44677 7.74198 6.28002 8.16033C6.08639 8.75415 5.99179 9.37578 6.00002 10.0003C6.00002 11.0403 6.00002 11.3337 6.00002 14.0003C6.00002 16.667 6.00002 16.9603 6.00002 18.0003C6.01324 18.6286 6.13038 19.2503 6.34669 19.8403C6.50544 20.271 6.75573 20.6621 7.0803 20.9867C7.40488 21.3113 7.796 21.5616 8.22669 21.7203C8.79558 21.9295 9.39422 22.0466 10 22.067C11.04 22.067 11.3334 22.067 14 22.067C16.6667 22.067 16.96 22.067 18 22.067C18.629 22.0608 19.2519 21.9435 19.84 21.7203C20.2707 21.5616 20.6618 21.3113 20.9864 20.9867C21.311 20.6621 21.5613 20.271 21.72 19.8403C21.9432 19.2522 22.0605 18.6293 22.0667 18.0003C22.0667 16.9603 22.0667 16.667 22.0667 14.0003C22.0667 11.3337 22.0667 11.0403 22.0667 10.0003C22.0671 9.37072 21.9495 8.74662 21.72 8.16033V8.17366ZM14 19.0937C13.3318 19.0937 12.6701 18.9618 12.0529 18.7057C11.4357 18.4496 10.8751 18.0742 10.4032 17.601C9.9313 17.1279 9.55739 16.5663 9.30288 15.9485C9.04837 15.3306 8.91827 14.6686 8.92002 14.0003C8.92002 12.9924 9.21908 12.0071 9.77934 11.1692C10.3396 10.3314 11.1358 9.67854 12.0673 9.29344C12.9988 8.90833 14.0236 8.80825 15.0119 9.00586C16.0003 9.20347 16.9078 9.68989 17.6196 10.4035C18.3314 11.1172 18.8154 12.026 19.0104 13.0149C19.2055 14.0037 19.1027 15.0283 18.7151 15.9587C18.3276 16.8892 17.6727 17.6837 16.8333 18.2418C15.994 18.7998 15.0079 19.0963 14 19.0937ZM19.3334 9.90699C19.0386 9.87579 18.7658 9.73662 18.5676 9.51629C18.3694 9.29595 18.2597 9.01005 18.2597 8.71366C18.2597 8.41727 18.3694 8.13136 18.5676 7.91103C18.7658 7.6907 19.0386 7.55152 19.3334 7.52032C19.6281 7.55152 19.9009 7.6907 20.0991 7.91103C20.2973 8.13136 20.407 8.41727 20.407 8.71366C20.407 9.01005 20.2973 9.29595 20.0991 9.51629C19.9009 9.73662 19.6281 9.87579 19.3334 9.90699Z" fill="white" />
                                </svg>


                            </div>
                        </a>
                        <a href="https://x.com/ShrikarLekkala">
                        <div className="3">
                            <img src="assets/x.png" alt="" srcset="" className='w-[28px] rounded-md' />
                        </div>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col mt-12 lg:mt-0 basis-11/12 lg:basis-1/3 space-y-6 lg:text-right ">
                    <a href='#' className="text-[14px] lg:text-[18px]">Home</a>
                    <a href='#email' className="text-[14px] lg:text-[18px]">About Us</a>
                    <div className="text-[14px] lg:text-[18px]">Pricing</div>
                    <a href='#email' className="text-[14px] lg:text-[18px]">Contact Us</a>
                </div>
                <div className="flex flex-col  mt-6 lg:mt-0 lg:basis-1/3 space-y-6 lg:text-right">
                    <div className="text-[14px] lg:text-[18px]">Privacy Policy</div>
                    <div className="text-[14px] lg:text-[18px]">Terms of Use</div>
                    <div className="text-[14px] lg:text-[18px]">Security</div>

                </div>
            </div>
            <div className=' p-6 lg:px-64 lg:pt-12 '>
                <img src="assets/Logos/BigLogo.png" alt="" srcset="" />
            </div>
            <div className="w-full py-6 text-[14px] text-center font-satoshiMed  text-white ">
                Copyright © 2024 MetaFrazo
            </div>
        </div>
        </>
    )
}

export default Footer