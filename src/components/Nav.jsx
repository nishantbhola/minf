import React, { useState, useEffect } from "react";
import logo from "../logo.png";
import logoin from "../logo-invert.png";

function Nav({isOpen}) {
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
        className={`mx-auto w-[60%] md:w-[100%] flex justify-center rounded-xl ${
          isSticky ? "mt-0" : "md:mt-8 mt-4"
        }`}
      >
        <nav
          className={`z-40 text-md cus h-[60px] relative mx-auto flex justify-center items-center w-[80%] rounded-b-2xl bg-[#E9EAEC] ${
            isSticky ? "sticky h-[80px] bg-neutral-900 cus2" : ""
          }`}
        >
          <div
            className={`relative md:flex hidden hover:text-red-600 ${isOpen ? "w-[80%]" : "w-[90%]"} items-center justify-evenly ${
              isSticky ? "text-md" : "text-lg"
            }`}
            style={{
              top: isSticky ? 0 : "-30%",
              transition: "all 0.3s ease-out",
              color: isSticky ? "white" : "black",
            }}
          >
            <a href="/">EVENT</a>
            <a href="/">RANKINGS</a>
            <a href="/">NEWS</a>
            <a href="/" className="selected">
              <img
                src={isSticky ? logo : logoin}
                className={
                  isSticky ? "h-[55px] object-cover" : "h-[75px] object-cover"
                }
                alt="logo"
              />
            </a>
            <a href="/">CONNECT</a>
            <a href="/">ABOUT</a>
            <a href="/">CONTACT</a>
          </div>
          <a
            href="/"
            className="selected md:hidden block"
            style={{ top: isSticky ? 0 : "-12%" }}
          >
            <img
              src={logo}
              className={
                isSticky
                  ? "screen md:h-[55px] object-cover h-[45px]"
                  : "colorburn md:h-[75px] object-cover h-[55px]"
              }
              alt="logo"
            />
          </a>
        </nav>
      </div>
      <div
        className={`h-[85vh] md:h-[92vh] px-5  ${
          isSticky ? "mt-[0px]" : "mt-[-60px]"
        }`}
      >
        <video
          className="w-full h-full object-cover rounded-2xl"
          muted
          autoPlay
          loop
        >
          <source
            src="https://video.wixstatic.com/video/6587d4_bef08a61503346ea852f4402debea9d6/480p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}

export default Nav;
