import React, { useState, useEffect } from "react";
import MidSec from "../MidSec";
import { ButtonLeft } from "../Button";
import { Parallax } from "react-parallax";
import axios from "axios";
import LoadingPost from "../LoadingPost";

function FeaturedUpdate() {
  const [newsData, setNewsData] = useState(null)
  const [allDataLoaded, setAllDataLoaded] = useState(null);
  const [displayCount, setDisplayCount] = useState(4); // Initial count to display


  useEffect(()=>{
    const fetchData = async () => {
      try {
          const response = await axios.get("https://successful-yoke-lion.cyclic.app/featured");
          if (response) {
            const reverse = response.data.reverse();
            console.log(reverse)
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
      {console.log("data")}
      {console.log(newsData)}
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
          blur={1}
          bgImage="https://wbc-rri.net/wp-content/uploads/2021/06/evangeline-shaw-CiO3eBBxqJA-unsplash-2.jpg"
          bgImageAlt="the mem"
          strength={100}
        >
          <div className="flex h-[60vh] justify-center rounded-lg items-center">
            <p className="text-6xl text-center text-white tracking-widest mt-[60px] thermite pb-2">
              Featured News..
            </p>
          </div>
        </Parallax>
      </div>
      <div className=" w-full container mx-auto px-5 rounded-xl">
        <div className=" w-full mt-4 container mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
        {newsData !== null && newsData.length > 0 ? (
                  newsData.slice(0, displayCount).map((d, i) => (
                    <MidSec data={d} getTo="featureupdate" key={i} />))
              ) : (
                  <LoadingPost />
              )}
        </div>
      </div>
      {/* <div
        className="w-[70%] thermite text-md h-[50px] mt-[-40px] mb-12 mx-auto"
        onClick={handleLoadMore}
      >
        <ButtonLeft prop={"Load More"} />
      </div> */}
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

export default FeaturedUpdate;
