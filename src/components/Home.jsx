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
      <div className={`mt-[-60px] h-[85vh] px-5 md:h-[92vh] `}>
        <video
          className="h-full w-full rounded-2xl object-cover"
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
          <span className="mb-[30px] mt-[-40px] rounded-2xl bg-[#EAEBED] px-6 py-4 text-4xl tracking-widest md:px-12 md:py-6 md:text-6xl">
            WELCOME
          </span>
        </div>

        <Parallax
          blur={7}
          bgImage="https://cdn.onefc.com/wp-content/uploads/2022/08/live-in-hd-one-on-prime-video-1-moraes-vs-johnson-ii-press-conference-1.jpg"
          bgImageAlt="the cat"
          strength={200}
        >
          <div className="flex h-[300px] w-full items-center justify-center bg-black opacity-50 md:h-[600px]">
            <span className="thermite text-center text-4xl text-white md:text-8xl">
              MUAYTHAI NATIONAL EVENT
            </span>
          </div>
        </Parallax>

        <div className="thermite mt-8 flex h-[80px] w-full items-center justify-center text-4xl md:text-5xl">
          WHAT'S TRENDING NOW
        </div>
        <div className="container mx-auto px-5">
          <div>
            <div className="mb-12 flex justify-between border-b-2 border-gray-400">
              <p className="thermite pb-2 text-3xl text-gray-700">Featured</p>
              <p className="thermite hidden cursor-pointer text-lg text-gray-500 md:block">
                <a href="/featureupdate">view all</a>{" "}
                <KeyboardArrowRightRoundedIcon />
              </p>
            </div>
            <MidSec />
            <div className="thermite text-md mx-auto mb-12  mt-[-40px] block h-[50px] w-[70%] md:hidden">
              <a href="/featureupdate">
                <ButtonLeft prop={"load more"} />
              </a>
            </div>
          </div>
          <div className="">
            <div className="mb-5 flex justify-between border-b-2 border-gray-400"></div>
            <Feeds />
          </div>
          <div>
            <div className="mb-12 flex justify-between border-b-2 border-gray-400">
              <p className="thermite pb-2 text-3xl text-gray-700">Events</p>
              <p className="thermite hidden cursor-pointer text-lg text-gray-500 md:block">
                <a href="/events">view all</a> <KeyboardArrowRightRoundedIcon />
              </p>
            </div>
            <MidSec />
            <div className="thermite text-md mx-auto mb-12  mt-[-40px] block h-[50px] w-[70%] md:hidden">
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
          <div className=" flex h-[300px] w-full flex-col items-center justify-center md:h-[500px]">
            <p className="thermite text-center text-2xl text-white opacity-80 md:text-4xl">
              Collaboration
            </p>
            <div className="flex h-[150px] w-full items-center justify-center gap-5 md:h-[250px] md:gap-28">
              <img
                src={xtremex}
                alt=""
                className=" h-[60px] object-cover md:h-[150px]"
              />
              <img
                src={logo}
                alt=""
                className=" h-[60px] object-cover md:h-[150px]"
              />
              <img
                src={wbc}
                alt=""
                className=" h-[60px] object-cover md:h-[150px]"
              />
            </div>
          </div>
        </Parallax>
      </div>

      <div className="my-12">
        <Parallax blur={3} bgImage={beco} bgImageAlt="the mem" strength={300}>
          <div className="flex h-[60vh] w-full items-center justify-center">
            <div className="glass flex h-[70%] w-[70%] flex-col items-center justify-center gap-12">
              <p className=" thermite text-center text-3xl text-white md:text-6xl">
                BECOME A MEMBER
              </p>
              <button className="thermite transition-bg border-4 border-white bg-transparent px-8 py-3 text-2xl text-white duration-200 hover:bg-red-600 md:text-4xl">
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
