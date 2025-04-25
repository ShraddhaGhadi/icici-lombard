import React from 'react'
import img1 from '../assets/Popular Model/Maruti_Suzuki_Swift_Dzire 1.svg'
import img2 from '../assets/Popular Model/Maruti_Ertiga 2.svg'
import img3 from '../assets/Popular Model/Maruti_Suzuki_Alto 3.svg'
import img4 from '../assets/Popular Model/4.svg'

const models = [
    {
        image: img1,
        name: 'Maruti Baleno Car Insurance'
    },
    {
        image: img2,
        name: 'Maruti Ertiga Car Insurance'
    },
    {
        image: img3,
        name: 'Maruti Alto Car Insurance'
    },
    {
        image: img2,
        name: 'Hyundai Creta Car Insurance'
    },
    {
        image: img3,
        name: 'Maruti Alto Car Insurance'
    },
    {
        image: img4,
        name: 'Hyundai Eon Car Insurance'
    },
    {
        image: img2,
        name: 'Hyundai Creta Car Insurance'
    },
    {
        image: img1,
        name: 'Maruti Baleno Car Insurance'
    }
]
const PopularModel = () => {
    return (
        <div className='bg-[#00305B]'>
                   <div className='lg:p-10 p-6 md:p-4  xl:h-[381px] max-w-[100rem] mx-auto'>
            <p className='lg:text-4xl md:text-4xl text-3xl text-center font-bold pb-10 text-white'>Car Insurance for Popular Models in India</p>
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2  gap-4 p-5 lg:p-2' >
            {models.map((model, index) => (
                    <div key={index} className='flex  bg-white p-3 lg:p-2 rounded-2xl gap-2'>
                        <img src={model.image} className='select-none pointer-events-none' alt="" />
                       <p className='font-bold pt-1 lg:text-sm'>{model.name}</p> 
                    </div>
            ))}
              </div>
        </div>
        </div>
 
    )
}

export default PopularModel
