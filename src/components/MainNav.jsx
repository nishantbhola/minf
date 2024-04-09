import React from "react";
import { useState } from "react";
import Nav from "./Nav";

export default function MainNav() {
  const [open, setOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  
  const handleExternalClick = () => {
    // Toggle checkbox state
    setIsChecked(!isChecked);
    open ? setOpen(false) : setOpen(true);
  };

  function isOpen() {
    open ? setOpen(false) : setOpen(true);
  }

  return (
    <>
      <div className={`md:hidden fixed block top-0 z-50 h-full ${open
              ? "w-full transition-width duration-500"
              : "w-0 transition-width duration-500"} bg-transparent`} onClick={handleExternalClick}></div>
        <div
          className={`bg-neutral-900 md:hidden flex justify-center items-center h-[100vh] realative fixed z-50  ${
            open
              ? "w-[60%] transition-width duration-500"
              : "w-0 transition-width duration-500"
          } opacity-90 top-0 `}
        >
          <div className="h-[100px] mobafter flex justify-center items-center w-[40px] bg-neutral-900 top-1/2 rounded-r-full  absolute right-[-39px]">
            <div className="ham">
              <input type="checkbox" checked={isChecked} onClick={isOpen} onChange={handleCheckboxChange} />
              <svg>
                <use href="#menu" />
                <use href="#menu" />
              </svg>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
              <symbol
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 56"
                id="menu"
              >
                <path d="M48.33,45.6H18a14.17,14.17,0,0,1,0-28.34H78.86a17.37,17.37,0,0,1,0,34.74H42.33l-21-21.26L47.75,4" />
              </symbol>
            </svg>
          </div>
          <div
            className={`${
              open ? "grid" : "hidden"
            } text-white thermite text-center mt-[-70px] text-2xl gap-8`}
          >
            <a href="/events" onClick={isOpen} className="cusa">
              EVENT
            </a>
            <a href="/rankings" onClick={isOpen} className="cusa">
              RANKINGS
            </a>
            <a href="/news" onClick={isOpen} className="cusa">
              NEWS
            </a>
            <a href="/connect" onClick={isOpen} className="cusa">
              CONNECT
            </a>
            <a href="/about" onClick={isOpen} className="cusa">
              ABOUT
            </a>
            <a href="/contact" onClick={isOpen} className="cusa">
              CONTACT
            </a>
          </div>
        </div>

      
      <Nav open={isOpen} />
    </>
  );
}
