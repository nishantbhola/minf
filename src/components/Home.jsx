import MidSec from "./MidSec";
import { Parallax } from "react-parallax";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import Feeds from "./Feeds";
import wbc from "../wbc.png";
import xtremex from "../xtreme-in.png";
import logo from "../logo.png";
import beco from "../becomemem.jpeg";
import { ButtonLeft } from "./Button";
import axios from "axios";
import React, { useState, useEffect } from "react";
import LoadingPost from "./LoadingPost";
import Count from "./Count"


function Home() {
    const [newsData, setNewsData] = useState(null)
    const [eventData, setEventData] = useState(null)
    useEffect(()=>{
      const fetchData = async () => {
        try {
            const response = await axios.get("https://minf-backend.vercel.app/featured");
            const response2 = await axios.get("https://minf-backend.vercel.app/events");
            if (response) {
              const reverse = response.data.reverse();
              const reverse2 = response2.data.reverse();
              setNewsData(reverse);
              setEventData(reverse2);
            }
          } catch (error) {
            console.log(`Error fetching data: ${error.message}`);
          }
        };
        
        fetchData();
    }, []);

  return (
    <div className="">
      <div className={`mt-[-60px] h-[85vh] px-5 md:h-[92vh] `}>
        {/* <video
          className="h-full w-full rounded-2xl object-cover"
          muted
          autoPlay
          loop
        >
          <source
            src="https://www.googleapis.com/drive/v3/files/118E8NiSAKKeX44feBnA24aNVD1_r_WSS?alt=media&key=AIzaSyCCZ0K6U72_kolEOd2lXVH3Cj1rIZkdHv4"
            type="video/mp4"
          />
        </video> */}
        <div className="imgbg w-full h-full rounded-2xl">
        <div className="bg-[rgba(0,0,0,0.5)] w-full h-full rounded-2xl flex justify-center items-center interf text-white" style={{lineHeight: "1"}}>
            <div className="md:text-[500%] md:text-left text-center tracking-wide mt-[-40px] text-[300%] px-8 md:x-0 text-white">
              <p>WBC <span>amateur</span></p>
              <p>MUAYTHAI INDIA </p>
              <p>C'SHIP 2024 </p>
              <span className="bg-[rgba(152,124,75)] formf text-[20px] rounded-xl py-3 px-5">
                  30 AUG - 01 SEP
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={` mx-auto pb-5`}>
        <div className="thermite mx-auto flex justify-center">
          <span className="md:mb-[30px] text-white mt-[-150px] rounded-2xl bg-transparent px-6 py-4 text-4xl tracking-widest md:px-12 md:py-6 md:text-6xl">
            <Count/>
          </span>
        </div>

        <div className="thermite flex mt-5 h-[80px] w-full items-center justify-center text-4xl md:text-5xl">
          TRENDING NOW
        </div>
        <div className="container mx-auto px-5">
          <div>
            <div className="mb-5 flex justify-between border-b-2 border-gray-400">
              <p className="protest pb-2 text-3xl text-gray-700">Featured</p>
              <p className="thermite hidden cursor-pointer text-lg text-gray-500 md:block">
                <a href="/featureupdate">view all</a>{" "}
                <KeyboardArrowRightRoundedIcon />
              </p>
            </div>
            <div className=" w-full my-12 container w-[90%] mx-auto rounded-xl">
              <div className=" w-full container mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
                {newsData ? (newsData.slice(0, 4).map((d, i) => (
                  <MidSec data={d} getTo="featureupdate" key={i} />
                ))):<LoadingPost/>}
              </div>
            </div>
            <div className="thermite text-md mx-auto mb-12 mt-5 block h-[50px] w-[70%] md:hidden">
              <a href="/featureupdate">
                <ButtonLeft prop={"load more"} />
              </a>
            </div>
          </div>
          <div className="mb-12">
            <Parallax
          blur={7}
          bgImage="https://cdn.onefc.com/wp-content/uploads/2022/08/live-in-hd-one-on-prime-video-1-moraes-vs-johnson-ii-press-conference-1.jpg"
          bgImageAlt="the cat"
          strength={0}
        >
          <div className="flex flex-col h-[100vh] w-full items-center  justify-center bg-black opacity-90 md:h-[100vh]">
            <p className="thermite text-center text-6xl px-5 md:px-12 text-[#adff2f] md:text-8xl ">
              WBC AMATEUR MUAYTHAI INDIA C'SHIP 2024
            </p>
            <div className="thermite border-4 text-md mx-auto mb-12 mt-5 block h-[50px] w-[70%]">
              <a href="/profile">
                <ButtonLeft prop={"REGISTER"} />
              </a>
            </div>
          </div>
        </Parallax>
        </div>
          <div className="">
            <div className="mb-5 flex justify-between border-b-2 border-gray-400"></div>
            <Feeds />
          </div>
          <div>
            <div className="mt-5 flex justify-between border-b-2 border-gray-400">
              <p className="protest pb-2 text-3xl text-gray-700">Events</p>
              <p className="thermite hidden cursor-pointer text-lg text-gray-500 md:block">
                <a href="/events">view all</a> <KeyboardArrowRightRoundedIcon />
              </p>
            </div>
            <div className=" w-full my-12 container w-[90%] mx-auto rounded-xl">
              <div className=" w-full container mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
                {eventData? (eventData.slice(0, 4).map((d, i) => (
                  <MidSec data={d} getTo="events" key={i} />
                ))):<LoadingPost/>}
              </div>
            </div>
            <div className="thermite text-md mx-auto mb-12 mt-5 block h-[50px] w-[70%] md:hidden">
              <a href="/events">
                <ButtonLeft prop={"load more"} />
              </a>
            </div>
          </div>
        </div>

        <Parallax
          blur={3}
          bgImage="https://i.pinimg.com/originals/ca/7d/2f/ca7d2fd4c3ed6ebac88e5ff2a90810ce.jpg"
          bgImageAlt="the collab"
          strength={50}
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
        <Parallax blur={3} bgImage={beco} bgImageAlt="the mem" strength={50}>
          <div className="flex h-[60vh] w-full items-center justify-center">
            <div className="glass flex h-[70%] w-[70%] flex-col items-center justify-center gap-12">
              <p className=" protest text-center text-3xl text-white md:text-6xl">
                BECOME A MEMBER
              </p>
              <a href="/jnwbcamti"><button className="protest transition-bg border-4 border-white bg-transparent px-8 py-3 text-2xl text-white duration-200 hover:bg-red-600 md:text-4xl">
                Apply <KeyboardArrowRightRoundedIcon />
              </button></a>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default Home;
