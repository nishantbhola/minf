import React from "react";

function MidSec({data, getTo}) {
  return ( 
        <div className="w-full  border-gray-400">
          <a href={`/${getTo}/${data.title}`}><img
            className="object-cover h-[180px] w-full object-top" 
            src={data.coverimage}
            alt=""
          /></a>
          <div className="text-justify pb-2">
            <div className="grid px-2">
            <a href={`/${getTo}/${data.title}`}><p className="text-xl text-center pt-3 interf leading-0 text-[#183557]">
                {" "}
                {data.title}
              </p>
              <p className="text-center text-sm mt-[-3px] text-gray-500 font-bold">
              {data.description.split(' ').slice(0, 5).join(' ')}...

              </p></a>
            </div>
          </div>
        </div>
  );
}

export default MidSec;
