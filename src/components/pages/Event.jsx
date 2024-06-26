import React, { useState, useEffect } from "react";
import MidSec from "../MidSec";
import { ButtonLeft } from "../Button";
import LoadingPost from "../LoadingPost";
import axios from "axios";

export default function Event() {
  const [newsData, setNewsData] = useState(null)
  const [allDataLoaded, setAllDataLoaded] = useState(null);
  const [displayCount, setDisplayCount] = useState(4); // Initial count to display

  useEffect(()=>{
    const fetchData = async () => {
      try {
          const response = await axios.get("https://minf-backend.vercel.app/events");
          if (response) {
            const reverse = response.data.reverse();
            setNewsData(reverse);
          }
        } catch (error) {
          console.log(`Error fetching data: ${error.message}`);
        }
      };
      
      fetchData();
  }, []);

  const handleLoadMore = () => {
    const remainingDataCount = newsData.length - displayCount;
    const newData = newsData.slice(displayCount, displayCount + Math.min(4, remainingDataCount));

  // Check if there's no more data to load
  if (remainingDataCount <= newData.length) {
    setAllDataLoaded(true);
  }
  // Append new data to existing data
  setNewsData([...newsData, ...newData]);
  setDisplayCount(prevCount => prevCount + newData.length); // Update display count
};
 
  return (
    <div>
      {/* <div
        className="mt-[-60px] mx-5 mb-12 rounded-lg"
        style={{
          backgroundImage:
            "url('https://wbcboxing.com/wp-content/uploads/leppage_Vidal_WBC_Heavy.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      > */}
        {/* <Parallax
          blur={1}
          bgImage="https://wbcboxing.com/wp-content/uploads/leppage_Vidal_WBC_Heavy.jpg"
          bgImageAlt="the mem"
          strength={2}
        >
          <div className="flex h-[60vh] justify-center rounded-lg items-center">
            <p className="text-6xl text-center text-white tracking-widest mt-[60px] thermite pb-2">
              UPCOMING EVENTS
            </p>
          </div>
        </Parallax> */}
        <div
          className="mt-[-60px] mx-5 mb-12 rounded-lg "
          style={{backgroundImage: "url('https://wbcboxing.com/wp-content/uploads/leppage_Vidal_WBC_Heavy.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}
        >
              <div className="flex md:h-[65vh] h-[50vh] justify-center rounded-lg items-center bg-[rgba(0,0,0,0.5)]" >
                <p className="px-8 md:text-8xl text-5xl md:text-6xl text-center text-white tracking-widest mt-[80px] interf pb-2">
                ...EVENTS...
                </p>
              </div>
        </div>
      {/* </div> */}
      <div className=" w-full container mx-auto px-5 rounded-xl">
        <div className=" w-full mt-4 container mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {newsData !== null && newsData.length > 0 ? (
                  newsData.slice(0, displayCount).map((d, i) => (
                    <MidSec data={d} getTo="events" key={i} />))
              ) : (
                  <LoadingPost />
              )}
        </div>
      </div>
      {newsData !== null && newsData.length > 0 && (
        <>
          {!allDataLoaded ? (
            <div className="w-[70%] thermite text-md h-[50px] mt-[-40px] mb-12 mx-auto" onClick={handleLoadMore}>
              <ButtonLeft prop={"Load More"} />
            </div>
          ) : (
            <p className="text-center text-sm text-gray-500">You caught all up</p>
          )}
        </>
      )}
    </div>
  );
}
