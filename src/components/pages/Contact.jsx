import { ButtonLeft } from "../Button";
// import { Parallax } from "react-parallax";

const Contact = () => {
  const image = "url('https://minf-minf.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2024-02-16+at+7.28.32+PM+(1).jpeg')"
  return (
    <section className="bg-transparent mb-12">
      
        {/* <div
          className="mt-[-60px] mx-5 mb-12 rounded-lg"
        >
          <Parallax
          blur={0}
          bgImage="https://minf-minf.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2024-02-16+at+7.28.32+PM+(1).jpeg"
          bgImageAlt="the collab"
          strength={0}
        >
              <div className="flex h-[60vh] justify-center rounded-lg items-center bg-[rgba(0,0,0,0.7)]">
                <p className="px-8 text-5xl md:text-6xl text-center text-white tracking-widest mt-[80px] interf pb-2">
                How can we help you?
                </p>
              </div>
            </Parallax>
        </div> */}
        <div
          className="mt-[-60px] mx-5 mb-12 rounded-lg "
          style={{backgroundImage: image, backgroundSize: "cover", backgroundPosition: "center"}}
        >
              <div className="flex md:h-[65vh] h-[50vh] justify-center rounded-lg items-center bg-[rgba(0,0,0,0.7)]" >
                <p className="px-8 md:text-8xl text-5xl md:text-6xl text-center text-white tracking-widest mt-[80px] interf pb-2">
                How can we help you?
                </p>
              </div>
        </div>
      <div className="container w-[90%] mx-auto flex justify-center px-5 md:px-12">

        <div>
          <p className="text-5xl text-center interf text-gray-800 mb-[30px] border-b-2 border-gray-800 pb-[10px]">Contact Us</p>
          <p className=" text-xl text-center text-gray-800 protest">Do you have a question, comment, concern, suggestion or news tip to pass along to <span className="text-red-600 text-xl">WBC AMATEUR MUAYTHAI INDIA</span> ?</p>
          <p className=" mt-5 text-2xl text-center text-gray-800 protest">Send us a Message</p>
          <div className=" w-full my-3  rounded-lg">

            <div>
              <label className="protest w-full flex flex-col text-gray-500">
                <input className="bg-transparent border-b-2 border-t-2 outline-none h-[50px] border-gray-500 text-center placeholder-gray-500" type="text" placeholder="Full Name"/>
              </label>

              <label className="protest w-full flex flex-col text-gray-500">
                <input className="bg-transparent border-b-2 h-[50px] outline-none border-gray-500 text-center placeholder-gray-500" type="text" placeholder="Email"/>
              </label>
              
              <label className="protest w-full flex flex-col text-gray-500">
                <textarea className="bg-transparent h-[100px] outline-none border-gray-500 text-center placeholder-gray-500 pt-3" type="text" placeholder="Message"/>
              </label>
              <div
                className="protest text-md h-[50px] mx-auto"
              >
                <ButtonLeft prop={"Send"} />
              </div>
              </div> 

              <div className="text-center anton flex md:gap-5 gap-2 flex-col text-md mt-8">
                <div className=" flex md:flex-row md:gap-8 gap-2 justify-center flex-col" >
                  <p className="text-gray-600">Email : <span className="text-md text-center text-red-600 protest">admin@wbcmuaythaiindia.com</span> </p>
                  <p className="text-gray-600">Phone : <span className="text-md text-center text-red-600 protest">(+91) 9205206059</span></p>
                </div>
                <p className="text-gray-600">Address : <span className="text-md text-center text-red-600 protest">admin@wbcmuaythaiindia.com</span> </p>
              </div>


            </div>
        </div>

        </div>
    </section>
  );
};

export default Contact;
