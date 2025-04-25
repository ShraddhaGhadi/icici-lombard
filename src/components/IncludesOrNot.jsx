import React, { useState } from 'react'

const IncludesOrNot = () => {
    const [activeTab, setActiveTab] = useState('inclusions');
    return (
        <div className='bg-[#F8F6F6]'>
            <div className='lg:p-10 p-3 md lg:pt-16 pt-4 xl:h-[607px] max-w-[100rem] mx-auto  '>
                <p className='md:text-4xl text-3xl text-center font-bold pb-5'>What’s included and what’s not?</p>
                <div className="lg:p-6 p-2">
                    <div className="flex border-b border-gray-300 mb-6">
                        <button
                            className={`px-4 py-2 font-semibold border-b-2 ${activeTab === 'inclusions'
                                ? 'border-orange-500 text-orange-600'
                                : 'border-transparent text-gray-500'
                                }`}
                            onClick={() => setActiveTab('inclusions')}
                        >
                            Inclusions
                        </button>
                        <button
                            className={`px-4 py-2 font-semibold border-b-2 ml-4 ${activeTab === 'exclusions'
                                ? 'border-orange-500 text-orange-600'
                                : 'border-transparent text-gray-500'
                                }`}
                            onClick={() => setActiveTab('exclusions')}
                        >
                            Exclusions
                        </button>
                    </div>

                    {activeTab === 'inclusions' && (
                        <div className='py-5'>
                            <p className='font-bold text-base pb-5'>What’s included:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 pb-5 gap-x-6 text-gray-800 text-base">
                                <div >✅ Coverage for natural disasters like earthquakes, floods, fires and storms</div>
                                <div>✅ ₹15 lakh Personal Accident Cover</div>
                                <div>✅ Cashless repairs in 5100+ network garages</div>
                                <div>✅ 9 add-ons to choose from</div>
                                <div>✅ Coverage for theft, accidents and terrorist activities</div>
                                <div>✅ Third-party legal liabilities cover</div>
                                <div>✅ No claim bonus up to 50%</div>
                                <div>✅ Instant claim settlement via InstaSpect</div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'exclusions' && (
                        <div className='py-5'>
                            <p className='font-bold text-base pb-5'>What’s not included:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 pb-5 gap-x-6 text-gray-800">
                                <div>✅ Coverage for natural disasters like earthquakes, floods, fires and storms</div>
                                <div>✅ ₹15 lakh Personal Accident Cover</div>
                                <div>✅ Cashless repairs in 5100+ network garages</div>
                                <div>✅ 9 add-ons to choose from</div>
                                <div>✅ Coverage for theft, accidents and terrorist activities</div>
                                <div>✅ Third-party legal liabilities cover</div>
                                <div>✅ No claim bonus up to 50%</div>
                                <div>✅ Instant claim settlement via InstaSpect</div>
                            </div>
                        </div>
                    )}
                </div>

                <div className='border-t border-gray-300 pt-5'>
                    <div className='pt-4 flex flex-col lg:flex-row lg:items-center gap-x-8 text-sm xl:text-base md:text-xs lg:text-[11px] font-bold text-orange-600'>
                        <p className='text-black font-bold mb-2 lg:mb-0 lg:mr-2 text-left'>
                            Policy documents:
                        </p>

                        <div className='flex flex-wrap gap-x-3 gap-y-2'>
                            <a href="#" className='underline underline-orange-500 underline-offset-3'>
                                Private car package policy wordings
                            </a>
                            <span className='hidden lg:inline text-gray-300 '>|</span>
                            <a href="#" className='underline underline-orange-500 underline-offset-3 break-words'>
                                Stand-alone own damage private car insurance policy wording
                            </a>
                            <span className='hidden lg:inline text-gray-300'>|</span>
                            <a href="#" className='underline underline-orange-500 underline-offset-3'>
                                Private car liability policy wording
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default IncludesOrNot
