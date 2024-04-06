import React from "react";
import { ButtonLeft } from "../Button";


const NotFound = () => {
  return (
    <div>
    <div
          className="mt-[-60px] mx-5 mb-5 rounded-lg "
          style={{backgroundImage:"url('https://inktopiadesigns.shop/cdn/shop/products/maze2_croppedDesign.jpg?v=1690433424')", backgroundSize: "cover", backgroundPosition: "center"}}
        >
              <div className="flex flex-col md:h-[70vh] h-[70vh] justify-center rounded-lg items-center bg-[rgba(0,0,0,0.1)]" >
                <p className="px-8 md:text-8xl text-6xl md:text-6xl text-center text-red-600 tracking-widest mt-[80px] interf pb-2">
                    404 - Not Found
                </p>
                <a href="/" className="w-full px-5"><button
                    className="protest w-full text-md mt-5 text-md h-[50px] mx-auto"
                  >
                    <ButtonLeft prop={"Go TO Home"} />
                  </button></a>
              </div>
        </div>
        <div className="h-[20vh] flex flex-col justify-center items-center conatiner mx-auto px-5">
            <p className="text-2xl text-center text-gray-600 interf">The page you are looking for does not exist.</p>
        </div>
    </div>
  );
};

export default NotFound;
