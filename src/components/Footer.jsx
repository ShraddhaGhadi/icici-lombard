import React from 'react'
import FooterLogo from '../assets/FooterLogo.svg'
import facebook from '../assets/Footer/facebook.svg'
import insta from '../assets/Footer/insta.svg'
import linkdIn from '../assets/Footer/linkdIn.svg'
import Twitter from '../assets/Footer/Twitter.svg'
import yt from '../assets/Footer/yt.svg'


const Footer = () => {
    return (
        <div className=''>
            <div className='max-w-[100rem] mx-auto bg-white  border-t-1 border-slate-300 w-full lg:py-5 py-3 lg:px-10 px-2 flex justify-between xl:h-[49px]'>
                <p className='flex items-center justify-center '>
                    <a href="" className='cursor-pointer pr-2 lg:text-sm text-xs'>Home </a>
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Fill 1" fill-rule="evenodd" clip-rule="evenodd" d="M0 8.89449L1.08468 10L4.9165 6.10134L6 4.99704L4.91532 3.89371L1.08468 0L1.04332 0.0434523L0.00118157 1.1055L3.82946 4.99704L0 8.89449Z" fill="#282828" />
                    </svg>
                    <a href="" className='cursor-pointer pr-2 pl-2 lg:text-sm text-xs'>Motor Insurance </a>
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Fill 1" fill-rule="evenodd" clip-rule="evenodd" d="M0 8.89449L1.08468 10L4.9165 6.10134L6 4.99704L4.91532 3.89371L1.08468 0L1.04332 0.0434523L0.00118157 1.1055L3.82946 4.99704L0 8.89449Z" fill="#282828" />
                    </svg>
                    <a href="" className='cursor-pointer pr-2 pl-2 text-gray-500 lg:text-sm text-xs'>Car Insurance</a>
                </p>
                <p className='text-orange-400 hover:border-btext-sm text-xs'>Disclaimers</p>
            </div>
            <div className='bg-[#ECE9E9] p-5 px-4 xl:h-[348px]'>
                <div className='max-w-[100rem] mx-auto lg:py-10 py-5 md:px-8 lg:px-4 grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <div className='flex-2'>
                        <img src={FooterLogo} alt="" className='select-none pointer-events-none'/>
                        <div className='py-7 '>
                            <p className='text-base '>ICICI Lombard General Insurance Company Limited, </p>
                            <p className='text-sm py-3'>ICICI Lombard House, 414, Veer Savarkar Marg, Near Siddhi Vinayak Temple, Prabhadevi, Mumbai - 400025.</p>
                            <p className='text-sm'>Email: customersupport@icicilombard.com
                                Fax no - 022 61961323</p>
                        </div>
                        <div className='flex gap-12'>
                            <img src={facebook} alt="" />
                            <img src={linkdIn} alt="" />
                            <img src={Twitter} alt="" />
                            <img src={yt} alt="" />
                            <img src={insta} alt="" />

                        </div>
                    </div>
                    <div className='flex-4 flex flex-col gap-4'>
                        <p className='text-sm'>ICICI Lombard General Insurance Ltd. is one of the largest private sector general insurance company in India offering insurance coverage for motor, health, travel, home, student travel and more. Policies can be purchased and renewed online as well. Immediate issuance of policy copy online.
                        </p>
                        <p className='text-sm'>ICICI trade logo displayed above belongs to ICICI Bank and is used by ICICI Lombard GIC Ltd. under license and Lombard logo belongs to ICICI Lombard GIC Ltd assigned by Northbridge Financial Corporation solely for the territory of India. Insurance is the subject matter of the solicitation. The advertisement contains only an indication of cover offered. For more details on risk factors, terms, conditions and exclusions, please read the sales brochure carefully before concluding a sale. CIN: L67200MH2000PLC129408
                        </p>
                        <select name="" id="" className='w-[256px] h-[40px] shadow border border-y-transparent border-x-transparent text-gray-700 '>
                            <option value="0" className='text-base'>Group companies</option>
                            <option value="1">Audi</option>
                            <option value="2">BMW</option>
                        </select>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer
