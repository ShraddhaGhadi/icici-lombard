import React from 'react'

const InsurancePremium = () => {
    return (
        <div className='max-w-[100rem] mx-auto p-2 lg:p-6 md:p-3 xl:h-[737px] pt-8 md:pt-0'>
            <p className='text-4xl text-center font-bold lg:pb-10 pb-4 text-[#282828]'>How is car insurance premium calculated?</p>
            <div className='lg:flex mx-8 pt-5 gap-10 grid-cols-2'>
                <div className='lg:flex-6'>
                    <p className='font-semibold text-lg pb-4'>Your car insurance premium includes three major components:</p>
                    <div className='flex gap-4'>
                        <div className='text-[#F26624] text-4xl font-semibold'> 1</div>
                        <p>Third-party liability premium – this is stipulated by the Insurance Regulatory and Development Authority of India (IRDAI), and it is directly proportional to your car’s cubic capacity.</p>
                    </div>
                    <div className='lg:p-8 p-2 md:p-4 flex justify-center rounded-lg overflow-hidden ' >
                        <div className='overflow-x-auto rounded-2xl shadow-md '>
                            <table className='table-auto border border-white'>
                                <thead className='text-left bg-[#E1E0D1] '>
                                    <tr>
                                        <th className='px-4 py-4 border-r border-[#EAEAEA] text-[#282828] text-base'>Cubic capacity</th>
                                        <th className='px-4 py-4  text-[#282828] text-base'>Premium with effect from 1st June 2022 (Rs.)</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    <tr >
                                        <td className='px-4 py-4 border-r border-[#EAEAEA]'>Not exceeding 1000 cc</td>
                                        <td className='px-4 py-4'>₹2,094</td>
                                    </tr>
                                    <tr className='bg-[#F5F6F6]'>
                                        <td className='px-4 py-4 border-r border-[#EAEAEA]'>Exceeding 1000 cc but not exceeding 1500 cc</td>
                                        <td className='px-4 py-4'>₹3,416</td>
                                    </tr>
                                    <tr >
                                        <td className='px-4 py-4 border-r border-[#EAEAEA]'>Exceeding 1500 cc</td>
                                        <td className='px-4 py-4'>₹7,897</td>
                                    </tr>

                                </tbody>
                            </table>

                        </div>
                    </div>
                    <div className='flex gap-4 pb-4'>
                        <div className='text-[#F26624] text-4xl font-semibold'> 2</div>
                        <p>Own damage premium – this is calculated as IDV X [Tariff Rate] – [Discounts] + Add on Covers</p>
                    </div>
                    <div className='flex gap-4 pb-4'>
                        <div className='text-[#F26624] text-4xl font-semibold'> 3</div>
                        <p className=''>Personal accident cover premium + Additional covers</p>
                    </div>
                </div>

                <div className='lg:flex-6'>
                    <p className='font-semibold text-lg pb-7'>Factors that affect these three components and your final car insurance price, include:</p>
                    <div className='flex gap-4 pb-6'>
                        <div className='pt-2'><svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="Path" fill-rule="evenodd" clip-rule="evenodd" d="M9.99911 4.50319C9.99753 4.6489 9.95388 4.78818 9.87768 4.89211L6.96172 8.82209C6.88473 8.93352 6.77759 8.9978 6.66489 8.99994C6.55218 9.00209 6.44266 8.94316 6.36329 8.83602C6.28392 8.72887 6.23948 8.58209 6.24106 8.42995C6.24265 8.27781 6.28948 8.13316 6.37123 8.02923L8.57764 5.05497H0.422632C-0.140877 5.06568 -0.140877 3.9214 0.422632 3.93212H8.57685L6.37202 0.961065C6.29345 0.856066 6.249 0.712496 6.249 0.563568C6.249 0.413569 6.29265 0.269998 6.37123 0.164999C6.45059 0.0578568 6.55695 0 6.66727 0C6.77838 0 6.88473 0.061071 6.96251 0.167142L9.87848 4.09712C9.95784 4.20426 10.0023 4.35212 9.99991 4.50426" fill="#282828" />
                        </svg>
                        </div>
                        <div>
                            <p> <span className='font-bold'>IDV</span> – IDV is the maximum amount you can claim under your policy. The higher your car’s market value, the higher your IDV and premium will be.</p>

                        </div>
                    </div>
                    <div className='flex gap-4 pb-6'>
                        <div className='pt-2'><svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="Path" fill-rule="evenodd" clip-rule="evenodd" d="M9.99911 4.50319C9.99753 4.6489 9.95388 4.78818 9.87768 4.89211L6.96172 8.82209C6.88473 8.93352 6.77759 8.9978 6.66489 8.99994C6.55218 9.00209 6.44266 8.94316 6.36329 8.83602C6.28392 8.72887 6.23948 8.58209 6.24106 8.42995C6.24265 8.27781 6.28948 8.13316 6.37123 8.02923L8.57764 5.05497H0.422632C-0.140877 5.06568 -0.140877 3.9214 0.422632 3.93212H8.57685L6.37202 0.961065C6.29345 0.856066 6.249 0.712496 6.249 0.563568C6.249 0.413569 6.29265 0.269998 6.37123 0.164999C6.45059 0.0578568 6.55695 0 6.66727 0C6.77838 0 6.88473 0.061071 6.96251 0.167142L9.87848 4.09712C9.95784 4.20426 10.0023 4.35212 9.99991 4.50426" fill="#282828" />
                        </svg>
                        </div>
                        <div>
                            <p> <span className='font-bold'> Make and model </span>- Higher-end models are insured at a higher price, simply because the cost of repairs/replacement for such vehicle is higher.</p>

                        </div>
                    </div>
                    <div className='flex gap-4 pb-6'>
                        <div className='pt-2'><svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="Path" fill-rule="evenodd" clip-rule="evenodd" d="M9.99911 4.50319C9.99753 4.6489 9.95388 4.78818 9.87768 4.89211L6.96172 8.82209C6.88473 8.93352 6.77759 8.9978 6.66489 8.99994C6.55218 9.00209 6.44266 8.94316 6.36329 8.83602C6.28392 8.72887 6.23948 8.58209 6.24106 8.42995C6.24265 8.27781 6.28948 8.13316 6.37123 8.02923L8.57764 5.05497H0.422632C-0.140877 5.06568 -0.140877 3.9214 0.422632 3.93212H8.57685L6.37202 0.961065C6.29345 0.856066 6.249 0.712496 6.249 0.563568C6.249 0.413569 6.29265 0.269998 6.37123 0.164999C6.45059 0.0578568 6.55695 0 6.66727 0C6.77838 0 6.88473 0.061071 6.96251 0.167142L9.87848 4.09712C9.95784 4.20426 10.0023 4.35212 9.99991 4.50426" fill="#282828" />
                        </svg>
                        </div>
                        <div>
                            <p> <span className='font-bold'>  Fuel type</span> - Repairing petrol-fuelled cars is cheaper than those that run on diesel and CNG. As a result, they are also less expensive to insure.</p>

                        </div>
                    </div>
                    <div className='flex gap-4 pb-6'>
                        <div className='pt-2'><svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="Path" fill-rule="evenodd" clip-rule="evenodd" d="M9.99911 4.50319C9.99753 4.6489 9.95388 4.78818 9.87768 4.89211L6.96172 8.82209C6.88473 8.93352 6.77759 8.9978 6.66489 8.99994C6.55218 9.00209 6.44266 8.94316 6.36329 8.83602C6.28392 8.72887 6.23948 8.58209 6.24106 8.42995C6.24265 8.27781 6.28948 8.13316 6.37123 8.02923L8.57764 5.05497H0.422632C-0.140877 5.06568 -0.140877 3.9214 0.422632 3.93212H8.57685L6.37202 0.961065C6.29345 0.856066 6.249 0.712496 6.249 0.563568C6.249 0.413569 6.29265 0.269998 6.37123 0.164999C6.45059 0.0578568 6.55695 0 6.66727 0C6.77838 0 6.88473 0.061071 6.96251 0.167142L9.87848 4.09712C9.95784 4.20426 10.0023 4.35212 9.99991 4.50426" fill="#282828" />
                        </svg>
                        </div>
                        <div>
                            <p> <span className='font-bold'>Year of manufacture</span>  – Certain new cars may be costly to cover since their spare parts may not be available yet.</p>

                        </div>
                    </div>
                    <div className='flex gap-4 pb-6'>
                        <div className='pt-2'><svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="Path" fill-rule="evenodd" clip-rule="evenodd" d="M9.99911 4.50319C9.99753 4.6489 9.95388 4.78818 9.87768 4.89211L6.96172 8.82209C6.88473 8.93352 6.77759 8.9978 6.66489 8.99994C6.55218 9.00209 6.44266 8.94316 6.36329 8.83602C6.28392 8.72887 6.23948 8.58209 6.24106 8.42995C6.24265 8.27781 6.28948 8.13316 6.37123 8.02923L8.57764 5.05497H0.422632C-0.140877 5.06568 -0.140877 3.9214 0.422632 3.93212H8.57685L6.37202 0.961065C6.29345 0.856066 6.249 0.712496 6.249 0.563568C6.249 0.413569 6.29265 0.269998 6.37123 0.164999C6.45059 0.0578568 6.55695 0 6.66727 0C6.77838 0 6.88473 0.061071 6.96251 0.167142L9.87848 4.09712C9.95784 4.20426 10.0023 4.35212 9.99991 4.50426" fill="#282828" />
                        </svg>
                        </div>
                        <div>
                            <p> <span className='font-bold'>Location</span>  - Since urban areas have denser traffic, there’s a greater probability of accidental damages. Thus, your premium may vary depending on your location.</p>

                        </div>
                    </div>
                    <div className='flex gap-4 pb-6'>
                        <div className='pt-2'><svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="Path" fill-rule="evenodd" clip-rule="evenodd" d="M9.99911 4.50319C9.99753 4.6489 9.95388 4.78818 9.87768 4.89211L6.96172 8.82209C6.88473 8.93352 6.77759 8.9978 6.66489 8.99994C6.55218 9.00209 6.44266 8.94316 6.36329 8.83602C6.28392 8.72887 6.23948 8.58209 6.24106 8.42995C6.24265 8.27781 6.28948 8.13316 6.37123 8.02923L8.57764 5.05497H0.422632C-0.140877 5.06568 -0.140877 3.9214 0.422632 3.93212H8.57685L6.37202 0.961065C6.29345 0.856066 6.249 0.712496 6.249 0.563568C6.249 0.413569 6.29265 0.269998 6.37123 0.164999C6.45059 0.0578568 6.55695 0 6.66727 0C6.77838 0 6.88473 0.061071 6.96251 0.167142L9.87848 4.09712C9.95784 4.20426 10.0023 4.35212 9.99991 4.50426" fill="#282828" />
                        </svg>
                        </div>
                        <div>
                            <p> <span className='font-bold'> Claim history</span>  – If you have made no car insurance claims in the past year, you stand to gain a No Claim Bonus on your premium.</p>

                        </div>
                    </div>
                    <div className='flex gap-4 pb-6'>
                        <div className='pt-2'><svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="Path" fill-rule="evenodd" clip-rule="evenodd" d="M9.99911 4.50319C9.99753 4.6489 9.95388 4.78818 9.87768 4.89211L6.96172 8.82209C6.88473 8.93352 6.77759 8.9978 6.66489 8.99994C6.55218 9.00209 6.44266 8.94316 6.36329 8.83602C6.28392 8.72887 6.23948 8.58209 6.24106 8.42995C6.24265 8.27781 6.28948 8.13316 6.37123 8.02923L8.57764 5.05497H0.422632C-0.140877 5.06568 -0.140877 3.9214 0.422632 3.93212H8.57685L6.37202 0.961065C6.29345 0.856066 6.249 0.712496 6.249 0.563568C6.249 0.413569 6.29265 0.269998 6.37123 0.164999C6.45059 0.0578568 6.55695 0 6.66727 0C6.77838 0 6.88473 0.061071 6.96251 0.167142L9.87848 4.09712C9.95784 4.20426 10.0023 4.35212 9.99991 4.50426" fill="#282828" />
                        </svg>
                        </div>
                        <div>
                            <p> <span className='font-bold'> Add-ons</span>  – A small additional cost will be included in your premium for the add-ons you pick.</p>

                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default InsurancePremium
