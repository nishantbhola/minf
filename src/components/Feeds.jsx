import React from "react";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";

function Feeds() {
  return (
    <div className="h-[80vh] w-full grid grid-flow-col gap-3 p-5 overflow-x-scroll mb-12">
      <div
        className={`h-full md:w-[150px] md:mr-8 w-[100px] text-center flex gap-1 text-gray-700 text-xl md:text-3xl justify-center items-center thermite `}
      >
        <div className="mt-[-8px]">
          <KeyboardArrowLeftRoundedIcon />
        </div>
        VIDEO
      </div>
      {[1, 2, 3, 4].map((index) => (
        <div
          key={index}
          className={`h-full bg-green-200 w-[350px] rounded-md `}
        >
          <video
            className="w-full h-full object-cover rounded-md"
            muted
            controls={index === 1 ? false : true}
            loop
            autoPlay={index === 1 ? true : false}
          >
            <source
              src="https://video.wixstatic.com/video/6587d4_bef08a61503346ea852f4402debea9d6/480p/mp4/file.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      ))}
    </div>
  );
}

export default Feeds;
