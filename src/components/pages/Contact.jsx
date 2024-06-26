import { ButtonLeft } from "../Button";
// import { Parallax } from "react-parallax";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();
  const [loading, setLoading] = useState(false); // Loading state
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm('service_l8kupp6', 'template_y43c7fd', form.current, {
        publicKey: 'blr9Ahrv17Y0zI2o0',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset()
          setLoading(false);
          setMessage("Sent")
        },
        (error) => {
          console.log('FAILED...', error.text);
          setLoading(false);
          setMessage("Server Error")
        },
      );
  };

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

          {loading && ( // Render loading popup if loading is true
              <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
              </div>
            )}

          <div className=" w-full my-3  rounded-lg">

              <form ref={form} onSubmit={sendEmail}>
                  <label className="protest w-full flex flex-col text-gray-500">
                    <input className="bg-transparent border-b-2 border-t-2 outline-none h-[50px] border-gray-500 text-center placeholder-gray-500" type="text" placeholder="Full Name" name="user_name" required/>
                  </label>

                  <label className="protest w-full flex flex-col text-gray-500">
                    <input className="bg-transparent border-b-2 h-[50px] outline-none border-gray-500 text-center placeholder-gray-500" type="text" placeholder="Email" name="user_email" required />
                  </label>
                  
                  <label className="protest w-full flex flex-col text-gray-500">
                    <textarea className="bg-transparent h-[100px] outline-none border-gray-500 text-center placeholder-gray-500 pt-3" type="text" placeholder="Message" name="message" required/>
                  </label>
                  <button
                    className="protest w-full mt-5 text-md h-[50px] mx-auto"
                  >
                    <ButtonLeft prop={"Send"} />
                  </button>
              </form> 

              <div className={`h-[100vh] ${message ? "flex" : "hidden"} w-[100%] mx-auto bg-[rgba(0,0,0,0.7)] fixed px-5 md:px-0 top-0 left-0 z-50 justify-center items-center`}>
                <div className="bg-[#E9EAEC] h-[50vh] flex text-[#183557] text-xl flex-col justify-center items-center gap-5 text-center interf w-full opacity-100 md:w-[50%]">
                <p>{message}</p>
                <button onClick={()=>{setMessage("")}} className={`px-5 tracking-widest py-3 ${message === "Sent" ? "bg-green-600" : "bg-red-600"} text-white interf`}>{message === "Sent" ? "OKAY" :"RETRY"}</button>
                </div>
              </div>

              <div className="text-center anton flex md:gap-5 gap-2 flex-col text-md mt-8">
                <div className=" flex md:gap-3 gap-2 justify-center flex-col" >
                  <p className="text-gray-600">Email : <span className="text-md text-center text-black protest">admin@wbcmuaythaiindia.com</span> </p>
                  <div className="flex flex-col">
                    <p className="text-gray-600">Phone :</p>
                    <p className="text-md text-center text-black protest">(+91) 7503850120 (Chairman),</p>
                    <p className="text-md text-center text-black protest">(+91) 9811127337 (Dir. General),</p>
                    <p className="text-md text-center text-black protest">(+91) 9205206059 (Admin. Secretary)</p>

                  </div>
                <p className="text-gray-600">Address : <span className="text-md text-center text-black protest">E-136, 2nd Floor, Opp. Metro Pillar No. 176, Shastri Nagar, New Delhi - 110052, India</span> </p>
                </div>
              </div>


            </div>
        </div>

        </div>
    </section>
  );
};

export default Contact;
