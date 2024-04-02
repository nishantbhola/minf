import React from "react";

function About() {
  const image = "url('https://minf-minf.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2024-02-16+at+6.54.04+PM.jpeg')"
  return (
    <section className="bg-transparent mb-12">
      
        <div
          className="mt-[-60px] mx-5 mb-12 rounded-lg "
          style={{backgroundImage: image, backgroundSize: "cover",}}
        >
              <div className="flex md:h-[65vh] h-[50vh] justify-center rounded-lg items-center bg-[rgba(0,0,0,0.7)]" >
                <p className="px-8 md:text-8xl text-5xl text-center text-white tracking-widest mt-[80px] interf pb-2">
                ABOUT
                </p>
              </div>
        </div>

        <div className="container mx-auto w-[90%] md:w-[70%]">

          <div className="mb-5">
            <h1 className="text-3xl protest text-red-600 mb-3">WBC Muaythai !</h1>
            <p className="text-base text-justify font-semibold text-gray-700  ">
            The WBC MuayThai was established in 2004 under the World Boxing Council (WBC) as a non-profit organization, with a mission to develop professional Muay Thai worldwide, as an affiliated division of the WBC, adhering to the rules set by the Board of Boxing Sport (Office of Professional Sports) of the Sports Authority of Thailand.
            <br/>
            WBC MuayThai was created to facilitate and sanction professional Muay Thai competitions to develop and expand Muay Thai worldwide and to foster Muay Thai at all levels and weight divisions with international safety standards for the development of Muay Thai as a world premier fighting art.
            <br/>            
            On November 26th, 2001, His Majesty, the King of Thailand, held a historic audience in Hua Hin, Thailand, with World Boxing Council President Dr. Jose Sulaiman and Pol. General Kovid Bhakdibhumi, WBC Vice–President and WBC Asian Boxing Council President.
            <br/>
            Moreover, a short time later, the World Boxing Council established the WBC Muay Thai to rate fighters worldwide and sanction WBC MuayThai Title events. Pol. Gen. Kovid Bhakdibhumi was appointed the WBC MUAYTHAI Global Chairman.
            <br/>
            Since its inception, the WBC MuayThai has promoted the sport of MuayThai worldwide. To this day, the WBC MuayThai is active in over ninety-five countries and territories, hosting professional, amateur and youth MuayThai championships across eighteen weight categories.
            <br/>
            The World Boxing Council MuayThai’s core aim is to continue to showcase the culture and spirit of MuayThai, from Thailand to the world.
            <br/>
            The WBC MuayThai adheres to the rules and regulations of the Sports Authority of Thailand and is actively involved in the WBC Clean Boxing Program to maintain fairness and an even playing field for all athletes.
            <br/>
            </p>
          </div>

          <div className="mb-3">
            <h1 className="text-3xl protest text-red-600 mb-3">WBC Amateur Muaythai</h1>
            <p className="text-base text-justify font-semibold text-gray-700  ">
            <span className="text-xl protest font-thin">A NEW BEGINNING :  </span> In light of talks with many key stakeholders throughout the world of MuayThai, across all continents where the sport is thriving, the WBC MuayThai has made a careful decision to enter the market of Amateur MuayThai.
            <br/>
            This was done to offer a pathway of success and opportunity to aspiring amateur Muaythai athletes across the globe to win coveted WBC MuayThai accolades as not everyone involved in our beautiful sport wants to compete as a professional fighter.
            <br/>            
            The newly formed WBC Amateur MuayThai program will offer tournament-like events and super-bouts for adults in the sport of MuayThai throughout the more than eighty-four countries and territories the WBC MuayThai is active in — and beyond.
            <br/>
            Moreover, we are proud to announce Mr. Max Baggio as chairman of the WBC Amateur MuayThai committee with Hadj Bettahar, Nash Keshwala, Bryan Dobler, and Patrick Riviera as vice-chairmen.
            <br/>
            The WBC MuayThai, headquartered in the motherland of MuayThai, established in 2004, under the continued graceful leadership of Police General Kovid Bhakdibhumi, operates with the sole purpose to promote the sport and culture of MuayThai, from Thailand to the world. A new era has arrived — let us all embrace it.
            <br/>
            </p>
          </div>

        </div>

        </section>
  )

}

export default About;
