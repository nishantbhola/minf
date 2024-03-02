

function Card(){
    return(
        <>
        <div className="text-4xl md:text-5xl bebas w-full flex justify-center items-center h-[120px]">WHAT'S TRENDING NOW</div>
        <div className=" w-full mt-4  md:w-[90%] lg:w-[80%] mx-auto grid  grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            <div className="w-full border-b-2 border-gray-400">
                <img className="object-cover w-full" src="https://www.nexo-sa.com/wp-content/uploads/Rajadamnern-1-Web.jpg" alt=""/>
                <div className="text-justify">
                    <div className="grid px-5">
                        <p className="text-sm text-center pt-3 py-1 anton text-red-700"> ANNOUNCEMENT</p>
                        <p className="text-3xl text-center py-1 anton text-[#183557]"> Road To International</p>
                        <p className="text-center pb-5 text-gray-500">
                            Excitement and anticipation fill the air as [Your Name], a promising local talent, takes the first steps....
                        </p>
                    </div>
                </div>

            </div>
            <div className="w-full border-b-2 border-gray-400">
                <img className="object-cover w-full" src="https://www.nexo-sa.com/wp-content/uploads/Rajadamnern-1-Web.jpg" alt=""/>
                <div className="text-justify">
                    <div className="grid px-5">
                        <p className="text-sm text-center pt-3 py-1 anton text-red-700"> ANNOUNCEMENT</p>
                        <p className="text-3xl text-center py-1 anton text-[#183557]"> Road To International</p>
                        <p className="text-center pb-5 text-gray-500">
                            Excitement and anticipation fill the air as [Your Name], a promising local talent, takes the first steps....
                        </p>
                    </div>
                </div>

            </div>
            <div className="w-full border-b-2 border-gray-400">
                <img className="object-cover w-full" src="https://www.nexo-sa.com/wp-content/uploads/Rajadamnern-1-Web.jpg" alt=""/>
                <div className="text-justify">
                    <div className="grid px-5">
                        <p className="text-sm text-center pt-3 py-1 anton text-red-700"> ANNOUNCEMENT</p>
                        <p className="text-3xl text-center py-1 anton text-[#183557]"> Road To International</p>
                        <p className="text-center pb-5 text-gray-500">
                            Excitement and anticipation fill the air as [Your Name], a promising local talent, takes the first steps....
                        </p>
                    </div>
                </div>

            </div>
        </div>
        </>
    );
}

export default Card;