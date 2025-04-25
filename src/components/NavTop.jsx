import React,{useState,useEffect,useRef} from 'react'
import call from '../assets/call.svg'
import call_back from '../assets/call_back.svg'
import { ChevronDown } from 'lucide-react';

const Nav_top = () => {
    const [isOpen, setIsOpen] = useState(null);
    const dropdownRef = useRef(null);
  
    const toggleDropDown = (key) => {
      setIsOpen(isOpen === key ? null : key);
    };
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(null);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    
    const menuItems = [
      {
        key: 'renewals',
        label: 'Renewals',
        submenu: ['Renewals 1', 'Renewals 2', 'Renewals 3']
      },
      {
        key: 'support',
        label: 'Support',
        submenu: ['Support 1', 'Support 2', 'Support 3']
      },
      {
        key: 'info',
        label: 'Info Centre',
        submenu: ['Info Centre 1', 'Info Centre 2', 'Info Centre 3']
      },
      {
        key: 'investor',
        label: 'Investor Relations',
        submenu: ['Investor Relations 1', 'Investor Relations 2', 'Investor Relations 3']
      }
    ];
  return (
    <div className="max-w-[100rem] mx-auto flex justify-between md:justify-center lg:justify-between  items-center bg-white h-[44px]  text-sm md:px-12 ">

      <div className="flex items-center justify-center md:space-x-4 px-8 lg:px-0 xl:px-0">
        <div className="flex items-center px-2 md:px-0 space-x-1">
          <img src={call} />
          <span className="font-semibold md:text-xs">1800 2666</span>
        </div>

        <div className="border-l md:pl-4 px-2 md:px-0 text-gray-600 cursor-pointer flex items-center space-x-1 " >
          <img src={call_back} />
          <span className='font-medium text-gray-700 md:text-xs'>Call Back</span>
        </div>

        <div className="border-l md:pl-4 px-2 md:px-0 flex items-center space-x-1">
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          <span className="font-medium text-gray-700 md:text-xs">Live Chat</span>
        </div>
      </div>

       <div className='lg:flex items-center space-x-4 text-sm md:hidden hidden' ref={dropdownRef}>
                  {menuItems.map((item) => (
                    <div className='relative' key={item.key}>
                      <button
                        className='flex items-center pl-4 cursor-pointer md:text-xs'
                        onClick={() => toggleDropDown(item.key)}
                      >
                        {item.label}
                        <ChevronDown size={14} className="ml-1 mt-1" />
                      </button>
                      {isOpen === item.key && (
                        <div className='absolute left-0 mt-2 w-56 bg-white text-black rounded-lg shadow-lg z-10 transition-all duration-200 ease-out transform origin-top scale-100 opacity-100'>
                          {item.submenu.map((subItem, index) => (
                            <a key={index} href="#" className='block px-3 py-2 xl:py-0 hover:bg-gray-100'>
                              {subItem}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

    </div>
  )
}

export default Nav_top
