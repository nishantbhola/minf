import { useEffect, useState } from "react";


function  ProgressBar(){

    const [progressWidth, setProgessWidth] = useState(0)

    useEffect(()=>{

        const handleScroll = ()=>{
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollY = window.scrollY;
            const scrollPer = (scrollY / (documentHeight - windowHeight) ) *100
            setProgessWidth(scrollPer)
        }

        window.addEventListener("scroll", handleScroll)
        return()=>{
            window.removeEventListener("scroll", handleScroll)
        }
    })


    return(
        <div className="fixed top-0 right-0 w-full h-[4px] z-50 bg-transparent">
            <div className="h-full bg-red-600" style={{width: progressWidth +"%" }}>

            </div>
        </div>
    );
}

export default ProgressBar