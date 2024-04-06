import React from "react";
// import logo from "../logo.png";
// import { Parallax } from "react-parallax";

function Footer() {
  const image = "url('https://wallpapercave.com/wp/wp11325370.jpg')"
  return (
    <div className="mt-10 ">
      {/* <Parallax
        blur={3}
        bgImage="https://wallpapers.com/images/hd/plain-black-desktop-2560-x-1440-ugpl0479gu0vuwnl.jpg"
        bgImageAlt="the mem"
        strength={500}
      > */}
      <div
          className="bg-black"
          style={{backgroundImage: image, backgroundSize: "cover",}}
        >
        <footer class="">
          <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div class="md:flex md:justify-around">
              <div class="mb-8 flex flex-col justify-center items-center gap-2 md:mb-0">
                <a href="/" class="">
                  <img
                    src="https://minf-minf.s3.ap-south-1.amazonaws.com/BANNER+(1).png"
                    class="h-[200px]"
                    alt="WBCAMTI"
                  />
                </a>
              </div>
              <hr className="w-[90%] md:hidden block mb-12 mx-auto" />
              <div class="grid grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-3">
                <div className="text-center">
                  <h2 class="mb-6 text-xl protest font-semibold uppercase text-white">
                    Quick Links
                  </h2>
                  <ul class="text-gray-500  font-medium">
                    <li class="mb-4 hover:text-white">
                      <a href="/">Home</a>
                    </li>
                    <li class="mb-4 hover:text-white">
                      <a href="/events">Events</a>
                    </li>
                    <li class="mb-4 hover:text-white">
                      <a href="/about">About</a>
                    </li>
                    <li class="mb-4 hover:text-white">
                      <a href="/contact">Contact</a>
                    </li>
                    <li class="mb-4 hover:text-white">
                      <a href="/connect">Connect</a>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <h2 class="mb-6 text-xl protest font-semibold  uppercase text-white">
                    Follow us
                  </h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                    <li class="mb-4 hover:text-white">
                      <a href="https://instagram.com/dayachand_bhola?igshid=YmMyMTA2M2Y=" rel="noopener noreferrer" target="_blank" >Instagram</a>
                    </li>
                    <li class="mb-4 hover:text-white">
                      <a href="https://www.facebook.com/up.muaythai/?locale=hi_IN" rel="noopener noreferrer" target="_blank">Facebook</a>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <h2 class="mb-6 text-xl font-semibold protest uppercase text-white">
                    Legal
                  </h2>
                  <ul class="text-gray-400 font-medium">
                    <li class="mb-4 hover:text-white">
                      <a href="/">Privacy Policy</a>
                    </li>
                    <li class="mb-4 hover:text-white">
                      <a href="/">Terms &amp; Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
              <hr className="w-[90%] md:hidden block mt-8 mx-auto" />
            </div>
          </div>
        </footer>
      {/* </Parallax> */}
      </div>
      <div className="h-[6vh] md:h-[8vh] flex justify-center items-center">
        <p className="text-center text-[10px] thermite md:text-lg">
          {" "}
          Copyright © 2024 minf.com | Developed by : NISHANT BHOLA{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
