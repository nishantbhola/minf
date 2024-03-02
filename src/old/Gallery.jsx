import { useState } from "react";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from "react-icons/io";
import "./cus.js";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Gallery() {
    AOS.init();

    const imgarr = [
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
    ];

    let randomimg = Math.floor(Math.random() * (imgarr.length))

    const [currentIndex, setCurrentIndex] = useState(randomimg);

    function prevImg() {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? imgarr.length - 1 : prevIndex - 1));
    }

    function nextImg() {
        setCurrentIndex((prevIndex) => (prevIndex === imgarr.length - 1 ? 0 : prevIndex + 1));
    }

    return (
        <div className="grid gap-4 pt-[50px] " data-aos="fade-in" data-aos-duration="500" data-aos-delay="100">
            <div className="text-5xl text-center bebas pb-8">Gallery</div>
            <div id="main-image-container" className="flex items-center gap-3">
                <div className="cursor-pointer" id="prev" onClick={prevImg}><IoIosArrowDropleftCircle size="40"/></div>
                <img
                    id="main-image"
                    className="h-auto mx-auto rounded-lg"
                    width="65%"
                    src={imgarr[currentIndex]}
                    alt=""
                />
                <div className="cursor-pointer" id="next" onClick={nextImg}><IoIosArrowDroprightCircle size="40"/></div>
            </div>
            <div className="grid grid-cols-8 md:gap-4 gap-1" id="thumbnail-images">
                {imgarr.map((e, index) => (
                    <img
                        key={index}
                        className="thumbnail h-auto max-w-full md:rounded-lg rounded-sm"
                        onClick={() => setCurrentIndex(index)}
                        src={e}
                        alt=""
                    />
                ))}
            </div>
        </div>
    );
}
