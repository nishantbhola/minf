import Nav from "./Nav";
import Footer from "./Footer";
import MidSec from "./MidSec";
import { Parallax } from "react-parallax";
import { useState } from "react";

function Home() {


  const [open, setOpen] = useState(false);

  function isOpen() {
    open ? setOpen(false) : setOpen(true)
  }

  

  return (
    <div className="" >
      <div className={`bg-neutral-900 md:hidden flex justify-center items-center h-[100vh] realative fixed z-50 ${open ? "w-[60%] transition-width duration-500" : "w-0 transition-width duration-500"} opacity-90 top-0 `}>
        <div className="h-[100px] mobafter flex justify-center items-center w-[40px] bg-neutral-900 top-1/2 rounded-r-full  absolute right-[-39px]">
          <div class="ham">
            <input type="checkbox" onClick={isOpen} />
            <svg>
              <use href="#menu" />
              <use href="#menu" />
            </svg>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
            <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 56" id="menu">
              <path d="M48.33,45.6H18a14.17,14.17,0,0,1,0-28.34H78.86a17.37,17.37,0,0,1,0,34.74H42.33l-21-21.26L47.75,4" />
            </symbol>
          </svg>
        </div>
            <div className={`${open? "grid" : "hidden"} text-white thermite text-center mt-[-70px] text-2xl gap-8`}>
              <a href="/">EVENT</a>
              <a href="/">RANKINGS</a>
              <a href="/">NEWS</a>
              <a href="/">CONNECT</a>
              <a href="/">ABOUT</a>
              <a href="/">CONTACT</a>
            </div>
      </div>
      <Nav open={isOpen}/>
      <div className={` mx-auto pb-5`}>
        <div className="thermite mx-auto flex justify-center">
          <span className="bg-[#EAEBED] px-6 py-4 md:px-12 md:py-6 text-4xl tracking-widest rounded-2xl md:text-6xl mb-[30px] mt-[-40px]">
            WELCOME
          </span>
        </div>

        <Parallax
          blur={7}
          bgImage="https://cdn.onefc.com/wp-content/uploads/2022/08/live-in-hd-one-on-prime-video-1-moraes-vs-johnson-ii-press-conference-1.jpg"
          bgImageAlt="the cat"
          strength={200}
        >
          <div className="md:h-[600px] h-[300px] w-full flex justify-center bg-black opacity-50 items-center">
            <span className="md:text-8xl text-center text-4xl text-white thermite">
              MUAYTHAI NATIONAL EVENT
            </span>
          </div>
        </Parallax>
        <div className="container mx-auto px-5">
          <MidSec />
        </div>
        <div>
          
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
