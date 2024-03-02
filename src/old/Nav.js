import React, { useState } from 'react';
//https://codepen.io/waldo/pen/JbezRG
function Nav(){
    const [isRotate, setIsRotate] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isPopVisible, setIsPopVisible] = useState(false);
  
    const handleToggleClick = () => {
      setIsRotate(!isRotate);
      setIsOpen(!isOpen);
      setIsPopVisible(!isPopVisible);
    };
      
    // bg-[rgba(0,0,0,0.8)]

    return (
            <>
            <header className="sticky top-0 z-50 w-full">
                <div className='absolute h-[100px] w-full  '>
                <nav className="w-full h-[75px] mx-auto bg-[rgba(245,245,247,.7)] badr flex justify-between items-center px-3 ">
                    <div className="flex md:pl-[20px] items-center gap-2">
                        <a href="/"><img src="https://raw.githubusercontent.com/nishantbhola/minf/main/minflogo.jpg" alt="" className="w-[60px] rounded-[5px] "/></a>
                        <span className=" w-[2px] h-[50px] rounded-full bg-gray-300"></span>
                        <div className=" font-bold text-[14px]">
                            <p>MUAYTHAI INDIA</p>
                            <p>NATIONAL FEDERATION</p>
                        </div>
                    </div>
                    <div className="md:hidden flex">

                    <div>
                        <div className={`menuc ${isOpen ? '' : ''}`} onClick={handleToggleClick}>
                            <ul>
                            <li className="plus">
                                <span className={`add ${isRotate ? 'rotate' : ''}`}>
                                <span className="icon-plus text-white">+</span>
                                </span>
                            </li>
                            </ul>
                        </div>

                        
                        </div>
                    </div>

                    <div className="flex gap-5 pr-[25px] hidden md:flex">
                        <a href="/" className="text-md font-bold text-black-400 hover:text-red-600 transition ease-in-out delay-5s0">Home</a>
                        <a href="/" className="text-md font-bold text-black-400 hover:text-red-600 transition ease-in-out delay-5s0">About</a>
                        <a href="/" className="text-md font-bold text-black-400 hover:text-red-600 transition ease-in-out delay-5s0">Portfolio</a>
                        <a href="/" className="text-md font-bold text-black-400 hover:text-red-600 transition ease-in-out delay-5s0">SNKRS</a>
                        <a href="/" className="text-md font-bold text-black-400 hover:text-red-600 transition ease-in-out delay-5s0">Login</a>
                    </div>

                </nav>
                
                </div>
                
            </header>
            {isPopVisible && (
                            <div className={`pop ${isPopVisible ? 'open' : ''}`}>
                            <ul>
                                <li>text</li>
                                <li>photo</li>
                                <li>link</li>
                            </ul>
                            </div>
                        )}
            </>
    )
};

export default Nav;