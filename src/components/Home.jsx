import MidSec from "./MidSec";
import { Parallax } from "react-parallax";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import Feeds from "./Feeds";
import wbc from "../wbc.png";
import xtremex from "../xtreme-in.png";
import logo from "../logo.png";
import beco from "../becomemem.jpeg";
import { ButtonLeft } from "./Button";

function Home() {
  return (
    <div className="">
      <div className={`h-[85vh] md:h-[92vh] px-5 mt-[-60px] `}>
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
              <p className="text-gray-500 hidden md:block text-lg cursor-pointer thermite">
                <a href="/featureupdate">view all</a>{" "}
                <KeyboardArrowRightRoundedIcon />
              </p>
            </div>
            <MidSec />
            <div className="md:hidden w-[70%] thermite text-md  h-[50px] mt-[-40px] mb-12 mx-auto block">
              <a href="/featureupdate">
                <ButtonLeft prop={"load more"} />
              </a>
            </div>
          </div>
          <div className="">
            <div className="flex mb-5 justify-between border-b-2 border-gray-400"></div>
            <Feeds />
          </div>
          <div>
            <div className="flex mb-12 justify-between border-b-2 border-gray-400">
              <p className="text-3xl text-gray-700 thermite pb-2">Events</p>
              <p className="text-gray-500 hidden md:block text-lg cursor-pointer thermite">
                <a href="/events">view all</a> <KeyboardArrowRightRoundedIcon />
              </p>
            </div>
            <MidSec />
            <div className="md:hidden w-[70%] thermite text-md  h-[50px] mt-[-40px] mb-12 mx-auto block">
              <a href="/events">
                <ButtonLeft prop={"load more"} />
              </a>
            </div>
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
                className=" h-[60px] md:h-[150px] object-cover"
              />
              <img
                src={logo}
                alt=""
                className=" h-[60px] md:h-[150px] object-cover"
              />
              <img
                src={wbc}
                alt=""
                className=" h-[60px] md:h-[150px] object-cover"
              />
            </div>
          </div>
        </Parallax>
      </div>

      <div className="my-12">
        <Parallax blur={3} bgImage={beco} bgImageAlt="the mem" strength={300}>
          <div className="h-[60vh] flex justify-center items-center w-full">
            <div className="glass flex flex-col justify-center items-center gap-12 h-[70%] w-[70%]">
              <p className=" text-center text-3xl md:text-6xl thermite text-white">
                BECOME A MEMBER
              </p>
              <button className="thermite px-8 py-3 border-4 hover:bg-red-600 bg-transparent transition-bg duration-200 text-white border-white text-2xl md:text-4xl">
                Apply <KeyboardArrowRightRoundedIcon />
              </button>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default Home;
