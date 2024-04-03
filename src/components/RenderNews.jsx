import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import LazyLoad from "react-lazyload";

const RenderNews = () => {
    const image = "url('https://minf-minf.s3.ap-south-1.amazonaws.com/89137e1c-98d8-4217-a408-e5bc4c4e1c0e.jpg')"
  const items = Array.from({ length: 20 }).map((_, index) => (
    <LazyLoad key={index} height={200}>
      <img
        alt=""
        src={`https://picsum.photos/200/${Math.floor(Math.random() * (300 - 200 + 1) + 200)}`}
        style={{ width: "100%", borderRadius: "" }}
      />
    </LazyLoad>
  ));

  return (
    <div>
        <div
            className="mt-[-60px] mx-5 mb-12 rounded-lg "
            style={{backgroundImage: image, backgroundSize: "cover",}}
            >
                <div className="flex md:h-[75vh] h-[70vh] justify-center rounded-lg items-center bg-[rgba(0,0,0,0.7)]" >
                    <p className="px-8 md:text-8xl text-5xl text-center text-white tracking-widest mt-[80px] interf pb-2">
                        Rendered News 
                    </p>
                </div>
            </div>
        <div className="container w-[70%] mx-auto">
        <ResponsiveMasonry columnsCountBreakPoints={{ 300: 2, 500: 3, 700: 4, 900: 5 }}>
            <Masonry gutter="10px">{items}</Masonry>
        </ResponsiveMasonry>
        </div>
    </div>
  );
};

export default RenderNews;
