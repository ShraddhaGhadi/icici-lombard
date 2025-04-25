import React from 'react'

const ProductTable = () => {
    return (
        <div className='lg:p-10 p-4 xl:h-[337px] max-w-[100rem] mx-auto'>
            <div className='lg:mx-10 md:mx-4 '>
                <div className='rounded-2xl lg:flex lg:justify-center overflow-x-auto'>
                    <table className='border border-white w-full text-sm min-w-[600px]'>
                        <thead className='text-left bg-[#E1E0D1] '>
                            <tr>
                                <th className='px-4 py-4 border-r border-[#EAEAEA] text-[#282828]'>Product</th>
                                <th className='px-4 py-4 text-[#282828]'>Product Code</th>
                                <th className='px-4 py-4 text-[#282828]'>UIN Code</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr className=''>
                                <td className='px-4 py-4 border-r border-[#EAEAEA]'>Private car package policy</td>
                                <td className='px-4 py-4 border-r border-[#EAEAEA]'>3001</td>
                                <td className='px-4 py-4'>IRDAN115RP0017V01200102</td>
                            </tr>
                            <tr className='bg-[#F5F6F6]'>
                                <td className='px-4 py-4 border-r border-[#EAEAEA]'>Stand-alone own damage private car package policy</td>
                                <td className='px-4 py-4 border-r border-[#EAEAEA]'>O3001/O</td>
                                <td className='px-4 py-4'>IRDAN115RP0001V01201920</td>
                            </tr>
                            <tr>
                                <td className='px-4 py-4 border-r border-[#EAEAEA]'>Private car liability policy</td>
                                <td className='px-4 py-4 border-r border-[#EAEAEA]'>3001/A</td>
                                <td className='px-4 py-4'>IRDAN115RP0012V01200102</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>

        </div>
    )
}

export default ProductTable
