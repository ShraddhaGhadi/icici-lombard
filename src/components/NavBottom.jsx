import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.svg';
import { ChevronDown } from 'lucide-react';
import login_arrow from '../assets/login_arrow.svg';
import { Menu, X } from 'lucide-react';


const Nav_bottom = () => {
  const [isOpen, setIsOpen] = useState(null);
  const dropdownRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      key: 'car',
      label: 'Car Insurance',
      submenu: ['Comprehensive Car Insurance', 'Third Party Car Insurance', 'Zero Depreciation Car Insurance']
    },
    {
      key: 'bike',
      label: 'Two Wheeler Insurance',
      submenu: ['Scooter Insurance', 'Bike Insurance Renewal', 'Electric Bike Insurance']
    },
    {
      key: 'health',
      label: 'Health Insurance',
      submenu: ['Family Health Insurance', 'Individual Health Plan', 'Top-up Plans']
    },
    {
      key: 'travel',
      label: 'Travel Insurance',
      submenu: ['International Travel', 'Student Travel', 'Senior Citizen Travel']
    },
    {
      key: 'other',
      label: 'Other Insurance',
      submenu: ['Home Insurance', 'Pet Insurance', 'Gadget Insurance']
    },
    {
      key: 'claims',
      label: 'Claims',
      submenu: ['File a Claim', 'Claim Status', 'Claim FAQs']
    }
  ];

  return (
    <div className="relative">

      <div className=" flex items-center bg-gradient-to-b from-orange-500 to-red-800 px-6 lg:px-12 md:px-5 h-[60px] w-full">
        <div className="max-w-[100rem] mx-auto flex justify-between items-center w-full">
          <div className="flex items-center gap-5">
            <img src={logo} alt="logo" className="h-8 select-none pointer-events-none" />

            {/* Desktop Menu */}
            <div ref={dropdownRef} className="hidden lg:flex items-center gap-4 lg:text-xs lg:gap-2 text-white">
              {menuItems.map((item) => (
                <div className="relative" key={item.key}>
                  <button
                    className="flex items-center pl-4 lg:pl-1 xl:text-sm cursor-pointer"
                    onClick={() => toggleDropDown(item.key)}
                  >
                    {item.label}
                    <ChevronDown size={14} className="ml-1 mt-1" />
                  </button>
                  {isOpen === item.key && (
                    <div className="absolute left-0 mt-2 w-56 bg-white text-black rounded-lg shadow-lg z-10">
                      {item.submenu.map((subItem, index) => (
                        <a key={index} href="#" className="block px-3 py-2 hover:bg-gray-100">
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Login */}
          <div className="hidden lg:flex items-center">
            <button className="flex items-center text-white lg:text-xs xl:text-sm">
              Login <img src={login_arrow} className="pl-2" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white lg:hidden">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[60px] right-0 w-full bg-gradient-to-b from-orange-500 to-red-800 text-white z-20 shadow-md md:top-[45px]">
          {menuItems.map((item) => (
            <div key={item.key} className="">
              <details className="p-2 ">
                <summary className="cursor-pointer font-medium text-white">{item.label}</summary>
                <div className="pl-2 mt-2 text-sm space-y-2">
                  {item.submenu.map((subItem, index) => (
                    <a key={index} href="#" className="block ">
                      {subItem}
                    </a>
                  ))}
                </div>
              </details>
            </div>
          ))}
          <div className="p-4 border-t border-gray-200">
            <button className="flex items-center  font-semibold">
              Login <img src={login_arrow} className="pl-2" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav_bottom;
