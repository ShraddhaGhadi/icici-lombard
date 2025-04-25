import React from 'react'

const ComprehensiveCar = () => {
  return (
    <div className='comCar p-10 xl:h-[820px]'>
      <h1 className='md:text-4xl text-3xl font-bold text-center pb-4 pt-1'>Comprehensive car insurance vs Third party car insurance</h1>
      <div className='lg:p-10 flex justify-center rounded-lg ' >
        <div className='overflow-x-auto '>
          <div className='min-w-[600px]  md:min-w-[883px] overflow-hidden rounded-2xl '>
            <table className='table-auto border border-white w-full'>
              <thead className='text-left bg-[#E1E0D1]'>
                <tr>
                  <th className='px-4 py-4 border-r border-[#EAEAEA] text-[#282828] text-lg'>
                    Comprehensive Car Insurance
                  </th>
                  <th className='px-4 py-4 text-[#282828] text-lg'>
                    Third-Party Car Insurance
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className='bg-[#F5F6F6]'>
                  <td className='px-4 py-4 border-r border-[#EAEAEA]'>
                    Covers damages to your own car and third-party liabilities
                  </td>
                  <td className='px-4 py-4'>Covers third-party liabilities only</td>
                </tr>
                <tr>
                  <td className='px-4 py-4 border-r border-[#EAEAEA]'>
                    Provides complete protection for your car
                  </td>
                  <td className='px-4 py-4'>Only covers legal liabilities</td>
                </tr>
                <tr className='bg-[#F5F6F6]'>
                  <td className='px-4 py-4 border-r border-[#EAEAEA]'>
                    May include add-ons like zero depreciation, roadside assistance, etc.
                  </td>
                  <td className='px-4 py-4'>
                    Only includes mandatory third-party coverage as per law
                  </td>
                </tr>
                <tr>
                  <td className='px-4 py-4 border-r border-[#EAEAEA]'>
                    Higher premium as compared to third-party insurance
                  </td>
                  <td className='px-4 py-4'>
                    Lower premium as compared to comprehensive insurance
                  </td>
                </tr>
                <tr className='bg-[#F5F6F6]'>
                  <td className='px-4 py-4 border-r border-[#EAEAEA]'>
                    Can be purchased online or offline
                  </td>
                  <td className='px-4 py-4'>
                    Mandatorily needs to be purchased before registering a car
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
      <div className='flex flex-col items-center justify-center'>
        <div className='max-w-4xl space-y-4'>
          <p className='text-base text-normal'>Comprehensive car insurance is a more comprehensive policy that covers not only third-party liabilities but also damage to your own vehicle. On the other hand, third-party car insurance only covers legal liabilities in case of an accident. Comprehensive car insurance also offers add-ons like zero depreciation and roadside assistance, whereas third-party insurance only includes mandatory coverage as per law.x</p>
          <p className='text-base text-normal'>
            Comprehensive car insurance has a higher premium as compared to third-party insurance, but it provides complete protection for your car. The choice between the two depends on your budget and the level of coverage you desire. You can easily buy car insurance online or offline, but third-party insurance is mandatory and needs to be purchased before registering a car.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ComprehensiveCar
