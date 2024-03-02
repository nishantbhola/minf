import Nav from "./Nav";
import Footer from "./Footer";
import MidSec from "./MidSec";
import { Parallax } from "react-parallax";

function Home() {
  return (
    <div className="">
      <div className="hidden bg-neutral-900 h-[100vh] w-[70%] fixed z-50 opacity-95 top-0">
        <div className="h-[60px] w-[30px] bg-neutral-900 top-1/2 rounded-r-full  absolute right-[-30px]"></div>
      </div>
      <Nav />
      <div className={` mx-auto pb-5`}>
        <div className="thermite mx-auto flex justify-center">
          <span className="bg-[#EAEBED] px-6 py-4 md:px-12 md:py-6 text-4xl tracking-widest rounded-2xl md:text-6xl mt-[-30px]">
            WELCOME
          </span>
        </div>

        <Parallax
          blur={7}
          bgImage="https://cdn.onefc.com/wp-content/uploads/2022/08/live-in-hd-one-on-prime-video-1-moraes-vs-johnson-ii-press-conference-1.jpg"
          bgImageAlt="the cat"
          strength={200}
        >
          <div className="md:h-[500px] h-[200px] w-full flex justify-center bg-black opacity-50 items-center">
            <span className="text-8xl text-white thermite">
              MUAYTHAI NATIONAL EVENT
            </span>
          </div>
        </Parallax>
        <div className="container mx-auto px-5">
          <MidSec />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
