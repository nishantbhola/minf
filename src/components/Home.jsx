import Nav from "./Nav";
import Footer from "./Footer";
import MidSec from "./MidSec";
import { Parallax } from "react-parallax";
import { useState } from "react";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import Feeds from "./Feeds";
import wbc from "../wbc.png";
import xtremex from "../xtreme-in.png";
import logo from "../logo.png";
import beco from "../becomemem.jpeg";

function Home() {
  const [open, setOpen] = useState(false);

  function isOpen() {
    open ? setOpen(false) : setOpen(true);
  }

  return (
    <div className="">
      <div
        className={`bg-neutral-900 md:hidden flex justify-center items-center h-[100vh] realative fixed z-50 ${
          open
            ? "w-[60%] transition-width duration-500"
            : "w-0 transition-width duration-500"
        } opacity-90 top-0 `}
      >
        <div className="h-[100px] mobafter flex justify-center items-center w-[40px] bg-neutral-900 top-1/2 rounded-r-full  absolute right-[-39px]">
          <div class="ham">
            <input type="checkbox" onClick={isOpen} />
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
          <a href="/">EVENT</a>
          <a href="/">RANKINGS</a>
          <a href="/">NEWS</a>
          <a href="/">CONNECT</a>
          <a href="/">ABOUT</a>
          <a href="/">CONTACT</a>
        </div>
      </div>
      <Nav open={isOpen} />
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

        <div className="text-4xl mt-8 md:text-5xl w-full flex justify-center items-center h-[80px] thermite">
          WHAT'S TRENDING NOW
        </div>
        <div className="container mx-auto px-5">
          <div>
            <div className="flex mb-12 justify-between border-b-2 border-gray-400">
              <p className="text-3xl text-gray-700 thermite pb-2">Featured</p>
              <p className="text-gray-500 text-lg cursor-pointer thermite">
                view all <KeyboardArrowRightRoundedIcon />
              </p>
            </div>
            <MidSec />
          </div>
          <div className="">
            <div className="flex mb-5 justify-between border-b-2"></div>
            <Feeds />
          </div>
          <div>
            <div className="flex mb-12 justify-between border-b-2 border-gray-400">
              <p className="text-3xl text-gray-700 thermite pb-2">Events</p>
              <p className="text-gray-500 text-lg cursor-pointer thermite">
                view all <KeyboardArrowRightRoundedIcon />
              </p>
            </div>
            <MidSec />
          </div>
        </div>

        <Parallax
          blur={7}
          bgImage="https://i.pinimg.com/originals/ca/7d/2f/ca7d2fd4c3ed6ebac88e5ff2a90810ce.jpg"
          bgImageAlt="the collab"
          strength={200}
        >
          <div className=" h-[300px] md:h-[500px] w-full flex flex-col justify-center items-center">
            <p className="text-center thermite text-2xl md:text-4xl text-white opacity-80">
              Collaboration
            </p>
            <div className="w-full h-[150px] md:h-[250px] gap-5 md:gap-28 flex justify-center items-center">
              <img
                src={xtremex}
                alt=""
                className=" h-[80px] md:h-[150px] object-cover"
              />
              <img
                src={logo}
                alt=""
                className=" h-[80px] md:h-[150px] object-cover"
              />
              <img
                src={wbc}
                alt=""
                className=" h-[80px] md:h-[150px] object-cover"
              />
            </div>
          </div>
        </Parallax>
      </div>

      <div className="my-12">
        <Parallax blur={3} bgImage={beco} bgImageAlt="the mem" strength={300}>
          <div className="h-[60vh] flex justify-center items-center w-full">
            <div className="glass flex flex-col justify-center items-center gap-12 h-[70%] w-[70%]">
              <p className=" text-center text-5xl md:text-6xl thermite text-white">
                BECOME A MEMBER
              </p>
              <button className="thermite px-8 py-3 border-4 hover:bg-red-600 bg-transparent transition-bg duration-200 text-white border-white text-2xl md:text-4xl">
                Apply <KeyboardArrowRightRoundedIcon />
              </button>
            </div>
          </div>
        </Parallax>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
