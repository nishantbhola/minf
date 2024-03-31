import { Parallax } from "react-parallax";

function RenderNews(){
    
    return (
        <div>
            <div
                className="mt-[-60px] mx-5 mb-12 rounded-lg"
                style={{
                backgroundImage:
                    "url('https://wbcboxing.com/wp-content/uploads/leppage_Vidal_WBC_Heavy.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                }}
            >
                <Parallax
                blur={3}
                bgImage="https://wbcboxing.com/wp-content/uploads/leppage_Vidal_WBC_Heavy.jpg"
                bgImageAlt="the mem"
                strength={500}
                >
                <div className="flex h-[70vh] justify-center rounded-lg items-center">
                    <p className="text-6xl text-white tracking-widest mt-[60px] thermite pb-2">
                    UPCOMING EVENTS
                    </p>
                </div>
                </Parallax>
            </div>
            <div>
                <div className="text-center text-4xl thermite text-[#183557] mb-[30px]">title</div>
                <div className="text-center text-4xl thermite text-[#183557] mb-[30px]">Descrption to some of the description </div>
                <div className="container mx-auto px-5 grid grid-cols-3 lg:grid-cols-4 gap-4">
    {[1,2,3,4,5,6,4,5,6,8].map((image, index) => (
        <div key={index} className="rounded-lg border-2 border-black overflow-hidden shadow-lg">
            <img src={`https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Jimny/6182/1686117643111/front-left-side-47.jpg?impolicy=resize&imwidth=420`} alt={"image"} className="w-full h-auto object-cover" />
        </div>
    ))}
</div>

            </div>
        </div>
    )
}

export default RenderNews;