import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import ratingReview from '../assets/ratingReview.svg'
import star from '../assets/star.svg'

const slides = [
    {
        name: 'Kumar Ambuj ',
        description: `The interaction was good. The customer service associate gave me answers to all my queries. Her presence while making the decision to buy was helpful. I will definitely recommend ICICI Lombard to my friends and family for the way they treat customers.`,
    },
    {
        name: 'Sanjay Achliya ',
        description: `Very good experience. The agent gave me all the information clearly and didn't mind repeating certain points until I understood. I don't fully get technology, but she offered to take care of the whole process of buying the car insurance policy without any hassle. 
I am truly thankful.`,
    },
    {
        name: 'Sanjay Achliya 3 ',
        description: `Very good experience. The agent gave me all the information clearly and didn't mind repeating certain points until I understood. I don't fully get technology, but she offered to take care of the whole process of buying the car insurance policy without any hassle. 
I am truly thankful.`,
    }
]

const RatingReview = () => {
    return (
        <div className='p-6 lg:pt-20 lg:p-10 flex flex-col items-center xl:h-[680px]'>
            <p className='md:text-4xl text-3xl text-center font-bold pb-8 text-[#282828]'>Ratings and reviews</p>

            <div className='flex justify-between lg:flex-row md:flex-row items-center lg:items-start gap-4  md:grid-cols-2 '>
                <div className='lg:border-r lg:border-r-slate-400 md:border-r md:border-r-slate-400 grid grid-cols-2 lg:pr-4 md:pr-4'>
                    <span className='text-3xl text-center'>4.6 </span>
                    <div className='flex pt-2 pl-3'>
                        <svg width="27" height="23" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.39667 23.7593C5.47762 24.2775 4.94732 23.9317 5.21193 22.9844L7.40282 15.1522L0.513269 9.97388C-0.319749 9.3479 -0.117211 8.78755 0.964079 8.71995L9.92257 8.1743L13.2677 0.678151C13.6728 -0.22605 14.3272 -0.22605 14.7312 0.678151L18.0774 8.1743L27.0359 8.71995C28.1172 8.78755 28.3197 9.3479 27.4867 9.97388L20.5983 15.1522L22.7881 22.9844C23.0516 23.9317 22.5235 24.2775 21.6033 23.7593L13.9995 19.4646L6.39667 23.7593Z" fill="#FAA61A" />
                        </svg>
                    </div>
                </div>
                <div className='pl-4 text-center lg:text-left'>
                    <p className='font-[15px]'>Our customers have rated us</p>
                    <p className='text-[#707070]'>Based on 456 reviews</p>
                </div>
            </div>

            <div className='relative w-full md:max-w-5xl mx-auto px-4 mt-10'>
                <div className="hidden xl:block absolute top-1/2 -left-16 z-10 -translate-y-1/2 cursor-pointer swiper-button-prev-custom ">
                    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group 126" filter="url(#filter0_d_1_389)">
                            <circle id="Oval Copy 2" cx="41" cy="36" r="25" fill="white" stroke="#CBCDCE" />
                            <path id="Path" fill-rule="evenodd" clip-rule="evenodd" d="M33.0014 36.005C33.004 36.2316 33.0738 36.4483 33.1957 36.61L37.8612 42.7232C37.9844 42.8966 38.1559 42.9966 38.3362 42.9999C38.5165 43.0032 38.6917 42.9116 38.8187 42.7449C38.9457 42.5782 39.0168 42.3499 39.0143 42.1133C39.0118 41.8766 38.9368 41.6516 38.806 41.4899L35.2758 36.8633H48.3238C49.2254 36.88 49.2254 35.1 48.3238 35.1166H35.277L38.8048 30.495C38.9305 30.3317 39.0016 30.1083 39.0016 29.8767C39.0016 29.6433 38.9318 29.42 38.806 29.2567C38.679 29.09 38.5089 29 38.3324 29C38.1546 29 37.9844 29.095 37.86 29.26L33.1944 35.3733C33.0674 35.54 32.9963 35.77 33.0001 36.0066" fill="#CBCDCE" />
                        </g>
                        <defs>
                            <filter id="filter0_d_1_389" x="0.5" y="0.5" width="71" height="71" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="-5" />
                                <feGaussianBlur stdDeviation="5" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0968094 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_389" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_389" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div className="hidden xl:block absolute top-1/2 -right-16 z-10 -translate-y-1/2 cursor-pointer swiper-button-next-custom">
                    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group 119" filter="url(#filter0_d_1_482)">
                            <circle id="Oval Copy 2" cx="31" cy="36" r="25" fill="#EC6625" stroke="#EAEAEA" />
                            <path id="Path" fill-rule="evenodd" clip-rule="evenodd" d="M38.9986 35.005C38.996 35.2316 38.9262 35.4483 38.8043 35.61L34.1388 41.7232C34.0156 41.8966 33.8441 41.9966 33.6638 41.9999C33.4835 42.0032 33.3083 41.9116 33.1813 41.7449C33.0543 41.5782 32.9832 41.3499 32.9857 41.1133C32.9882 40.8766 33.0632 40.6516 33.194 40.4899L36.7242 35.8633H23.6762C22.7746 35.88 22.7746 34.1 23.6762 34.1166H36.723L33.1952 29.495C33.0695 29.3317 32.9984 29.1083 32.9984 28.8767C32.9984 28.6433 33.0682 28.42 33.194 28.2567C33.321 28.09 33.4911 28 33.6676 28C33.8454 28 34.0156 28.095 34.14 28.26L38.8056 34.3733C38.9326 34.54 39.0037 34.77 38.9999 35.0066" fill="white" />
                        </g>
                        <defs>
                            <filter id="filter0_d_1_482" x="0.5" y="0.5" width="71" height="71" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="5" />
                                <feGaussianBlur stdDeviation="5" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0968094 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_482" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_482" result="shape" />
                            </filter>
                        </defs>
                    </svg>

                </div>



                {/* <div className="absolute top-1/2 -left-10 z-10 -translate-y-1/2 cursor-pointer swiper-button-prev-custom" />
                <div className="absolute top-1/2 -right-10 z-10 -translate-y-1/2 cursor-pointer swiper-button-next-custom" /> */}

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    pagination={{ el: '.custom-swiper-pagination', clickable: true }}
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    navigation={{
                        nextEl: '.swiper-button-next-custom',
                        prevEl: '.swiper-button-prev-custom',
                    }}
                    spaceBetween={30}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        1024: {
                            slidesPerView: 2,
                        }
                    }}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='p-4 w-[270px] lg:w-[300px] xl:h-[234px] sm:w-[350px] md:w-[350px] xl:w-[400px]'>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex gap-3 w-full'>
                                            <div className='border-r border-r-slate-400 pr-4'><p>{slide.name}</p></div>
                                            <img className='h-[30px] w-[90px]' src={star} alt="Star" />
                                        </div>
                                        <img src={ratingReview} className='h-8' alt="Review Icon" />
                                    </div>
                                    <p className='mt-4 text-sm text-[#444]'>{slide.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="flex justify-center mt-6">
                    <div className="custom-swiper-pagination flex gap-2"></div>
                </div>
            </div>

            <div className='mt-10'>
                <button className='text-base border border-[#EC6625] px-5 py-3 rounded-xl text-[#EC6625] font-semibold hover:bg-orange-500 hover:text-white transition'>
                    Read all reviews
                </button>
            </div>
        </div>
    );
};

export default RatingReview;
