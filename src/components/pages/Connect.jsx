import React from "react";

export default function connect() {
  const image = "url('https://minf-minf.s3.ap-south-1.amazonaws.com/814f97f5-951e-4178-aefb-69bea61ad93e.jpg')"
  return (
    <section className="bg-transparent mb-12">
      
        <div
          className="mt-[-60px] mx-5 mb-12 rounded-lg "
          style={{backgroundImage: image, backgroundSize: "cover",}}
        >
              <div className="flex md:h-[65vh] h-[50vh] justify-center rounded-lg items-center bg-[rgba(0,0,0,0.7)]" >
                <p className="px-8 md:text-8xl text-5xl text-center text-white tracking-widest mt-[80px] interf pb-2">
                CONNECT
                </p>
              </div>
        </div>
        </section>
  )

}
