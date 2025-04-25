import React from 'react'
import insuranceImg from '../assets/insurance policy img.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const slides = [
    {
        title: 'Comprehensive car insurance policy',
        image: insuranceImg,
        highlight: `Comprehensive car insurance, also known as a private car package policy, is a type of auto insurance that provides complete coverage for your vehicle. It is an optional car insurance policy but is highly recommended for car owners who want the best protection for their four-wheelers.`,
        description: `Comprehensive car insurance covers damage caused by natural disasters, accidents, theft, fire, and other such incidents. It covers damages to both your vehicle and third-party vehicles and property. This car insurance policy also covers third-party liabilities, which will cover any legal costs or compensation you may be liable for in case of an accident caused due to your fault. In addition, some comprehensive policies also offer additional benefits such as roadside assistance, towing service and more. Even though comprehensive insurance policies tend to be more expensive than Third-Party Liability or Standalone Own Damage policies, but they offer broader coverage.`,
    },
    {
        title: '2. Comprehensive car insurance policy',
        image: insuranceImg,
        highlight: `Comprehensive car insurance, also known as a private car package policy, is a type of auto insurance that provides complete coverage for your vehicle. It is an optional car insurance policy but is highly recommended for car owners who want the best protection for their four-wheelers.`,
        description: `Comprehensive car insurance covers damage caused by natural disasters, accidents, theft, fire, and other such incidents. It covers damages to both your vehicle and third-party vehicles and property. This car insurance policy also covers third-party liabilities, which will cover any legal costs or compensation you may be liable for in case of an accident caused due to your fault. In addition, some comprehensive policies also offer additional benefits such as roadside assistance, towing service and more. Even though comprehensive insurance policies tend to be more expensive than Third-Party Liability or Standalone Own Damage policies, but they offer broader coverage.`,
    }
]

const Section3 = () => {
    return (
        <div className='bg-[#FFF2EB]'>
             <div className=" py-10 relative xl:h-[565px] max-w-[100rem] mx-auto  ">
            <h2 className="text-center text-4xl font-bold mb-8 lg:mb-5">
                What are the different types of car insurance policies?
            </h2>
            <div className=" max-w-5xl xl:max-w-5xl lg:max-w-4xl md:max-w-2xl mx-auto px-4 flex justify-between">
                <div className="hidden xl:block absolute top-1/2 -left-18 lg:-left-3 xl:left-32 md:hidden z-10 -translate-y-1/2 cursor-pointer swiper-button-prev-custom">
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
                <div className="hidden xl:block absolute top-1/2 -right-18 lg:-right-3  xl:right-32 md:hidden z-10 -translate-y-1/2 cursor-pointer swiper-button-next-custom">
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

                {/* Swiper Section */}
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    navigation={{
                        nextEl: '.swiper-button-next-custom',
                        prevEl: '.swiper-button-prev-custom',
                    }}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className=''>
                            <div className="bg-white p-6 md:p-4 lg:p-5 rounded-3xl flex flex-col md:justify-start md:flex-row  md:items-start  lg:flex-row gap-8 ">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className=" mt-3"
                                    />
                                <div className="flex flex-col  gap-4 text-left">
                                    <h3 className="text-xl font-bold">{slide.title}</h3>
                                    <p className="text-base text-gray-700">{slide.highlight}</p>
                                    <p className="text-base text-gray-600">{slide.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
        </div>
       
    )
}

export default Section3
