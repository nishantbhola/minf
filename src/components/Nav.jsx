import React, { useState, useEffect } from "react";
// import logo from "../logo.png";
// import logoin from "../logo-invert.png";

function Nav({ isOpen }) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`mx-auto w-[60%] md:w-[100%] container flex justify-center rounded-xl ${
          isSticky ? "mt-0" : "md:mt-8 mt-4"
        }`}
      >
        <nav
          className={`z-40 text-md cus h-[60px] relative mx-auto container flex justify-center items-center w-[80%] rounded-b-2xl bg-[#E9EAEC] ${
            isSticky ? "sticky h-[80px] bg-neutral-900 cus2" : ""
          }`}
        >
          <div
            className={`relative md:flex hidden  ${
              isOpen ? "w-[80%]" : "w-[90%]"
            } items-center justify-evenly ${isSticky ? "text-md" : "text-lg"}`}
            style={{
              top: isSticky ? 0 : "-30%",
              transition: "all 0.3s ease-out",
              color: isSticky ? "white" : "black",
            }}
          >
            <a href="/events" className="cusa">
              EVENT
            </a>
            <a href="/rankings" className="cusa">
              RANKINGS
            </a>
            <a href="/news" className="cusa">
              NEWS
            </a>
            <a href="/" className="cusa">
{/*               <img
                src={isSticky ? logo : logoin}
                className={
                  isSticky ? "h-[55px] object-cover" : "h-[75px] object-cover"
                }
                alt="logo"
              /> */}
              <img
                src="https://minf-minf.s3.ap-south-1.amazonaws.com/BANNER+(1).png"
                className={
                  isSticky ? "h-[55px] object-cover" : "h-[75px] object-cover"
                }
                alt="logo"
              /> 
            </a>
            <a href="/connect" className="cusa">
              CONNECT
            </a>
            <a href="/about" className="cusa">
              ABOUT
            </a>
            <a href="/contact" className="cusa">
              CONTACT
            </a>
          </div>
          <a
            href="/"
            className="selected md:hidden block"
            style={{ top: isSticky ? 0 : "-12%" }}
          >
{/*             <img
              src={logo}
              className={
                isSticky
                  ? "screen md:h-[55px] object-cover h-[45px]"
                  : "colorburn md:h-[75px] object-cover h-[55px]"
              }
              alt="logo"
            /> */}

            <img
              src="https://minf-minf.s3.ap-south-1.amazonaws.com/BANNER+(1).png"
              className={
                isSticky
                  ? " md:h-[55px] object-cover h-[45px]"
                  : " md:h-[75px] object-cover h-[55px]"
              }
              alt="logo" />
            
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
