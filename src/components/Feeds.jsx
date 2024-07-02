import React, { useState, useEffect } from "react";
import axios from "axios";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";

function Feeds() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://graph.facebook.com/me?fields=first_name,posts{source,type}&access_token=EAALVZBuK2IgUBO3uG1ZCFBrNltTZBKNO5P8mpfHbQ5wGaOTgsLVh6saI8h8dImI2rQ2zRwCRZBnOU2VpZAltoRSfIaUjQlwR44IlZCy0FlCYccIejfmvFr7FjD6PfRkqQKQeROWvDw4zsGaAS23HUqDwqJ4L8VSsMW71jBWc1IixjxkQJ00KZAZAyoqaPasWZBpVG"
        );
        if (response.data.posts && response.data.posts.data) {
          let arrvideo = response.data.posts.data.filter((e) => e.type === "video");
          setData(arrvideo.slice(0, 4));
        }
      } catch (error) {
        setData([1,2,3,4]);
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="h-full w-full grid grid-flow-col gap-3 overflow-x-scroll mb-12">
      <div
        className={`h-full md:w-[90px] md:mr-8 w-[100px] text-center flex gap-1 text-gray-700 text-xl md:text-3xl justify-center items-center thermite `}
      >
        <div className="mt-[-8px]">
          <KeyboardArrowLeftRoundedIcon />
        </div>
        VIDEO
      </div>
      {data.map((e, index) => (
            <div
              key={index}
              className={`h-[70vh] bg-green-200 w-[300px] rounded-md`}
            >
              <video
                className="w-full h-full object-cover rounded-md"
                muted
                controls
                loop
                autoPlay={index === 0 ? true : false}
              >
                <source
                  src={
                    e.source ? e.source : "https://video.wixstatic.com/video/6587d4_bef08a61503346ea852f4402debea9d6/480p/mp4/file.mp4"
                  }
                  type="video/mp4"
                  preload="metadata"
                />
              </video>
            </div>
          ))}
    </div>
  );
}

export default Feeds;
