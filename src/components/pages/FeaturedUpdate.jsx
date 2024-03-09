import React, { useState } from "react";
import MidSec from "../MidSec";
import { ButtonLeft } from "../Button";
import { Parallax } from "react-parallax";

function FeaturedUpdate() {
  const [midSecCount, setMidSecCount] = useState(4); // Initial count of MidSec components

  const handleLoadMore = () => {
    setMidSecCount((prevCount) => prevCount + 1); // Increment count by 1
  };

  return (
    <div>
      <div
        className="mt-[-60px] mx-5 mb-12 rounded-lg"
        style={{
          backgroundImage:
            "url('https://wbc-rri.net/wp-content/uploads/2021/06/evangeline-shaw-CiO3eBBxqJA-unsplash-2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Parallax
          blur={3}
          bgImage="https://wbc-rri.net/wp-content/uploads/2021/06/evangeline-shaw-CiO3eBBxqJA-unsplash-2.jpg"
          bgImageAlt="the mem"
          strength={500}
        >
          <div className="flex h-[60vh] justify-center rounded-lg items-center">
            <p className="text-6xl text-white tracking-widest mt-[60px] thermite pb-2">
              UPCOMING EVENTS
            </p>
          </div>
        </Parallax>
      </div>
      {[...Array(midSecCount)].map((_, index) => (
        <MidSec key={index} />
      ))}
      <div
        className="w-[70%] thermite text-md h-[50px] mt-[-40px] mb-12 mx-auto"
        onClick={handleLoadMore}
      >
        <ButtonLeft prop={"Load More"} />
      </div>
    </div>
  );
}

export default FeaturedUpdate;
