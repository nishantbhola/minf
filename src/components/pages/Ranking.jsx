import React from "react";

export default function Ranking() {

  const image = "url('https://minf-minf.s3.ap-south-1.amazonaws.com/996a5747-8ecc-47cd-897a-7c12fbffc77c.jpg')"
  return (
    <section className="bg-transparent mb-12">
      
        <div
          className="mt-[-60px] mx-5 mb-12 rounded-lg "
          style={{backgroundImage: image, backgroundSize: "cover", backgroundPosition: "center"}}
        >
              <div className="flex md:h-[65vh] h-[50vh] justify-center rounded-lg items-center bg-[rgba(0,0,0,0.7)]" >
                <p className="px-8 md:text-8xl text-5xl md:text-6xl text-center text-white tracking-widest mt-[80px] interf pb-2">
                Rankinks
                </p>
              </div>
        </div>

        <div className="h-[10vh] container w-[90%] mx-auto flex justify-center px-5 text-6xl text-center interf md:px-12">

              COMING SOON 

        </div>
        
      </section>
  );
}
