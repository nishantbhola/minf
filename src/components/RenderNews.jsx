import React, {useState, useEffect} from "react"; 
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import LazyLoad from "react-lazyload";
import axios from "axios";
import { useParams } from 'react-router-dom';

const RenderNews = ({prop}) => {

  const [newsData, setNewsData] = useState(null)
  const {title} = useParams()
  useEffect(()=>{
    const fetchData = async () => {
      try {
          const response = await axios.get(`https://successful-yoke-lion.cyclic.app/${prop}/${title}`);
          if (response) {
            setNewsData(response.data);
            console.log(response.data)
          }
        } catch (error) {
          console.log(`Error fetching data: ${error.message}`);
        }
      };
      
      fetchData();
  }, [title, prop]);


  return (
    <div>
        { newsData ? (
          <>
            <div
            className="mt-[-60px] mx-5 mb-12 rounded-lg "
            style={{backgroundImage: `url(${newsData.coverimage})`, backgroundSize: "cover",}}
            >
                <div className="flex md:h-[75vh] h-[70vh] justify-center rounded-lg items-center bg-[rgba(0,0,0,0.7)]" >
                    <p className="px-8 md:text-8xl text-5xl text-center text-white tracking-widest mt-[80px] interf pb-2">
                    {newsData.title} 
                    </p>
                </div>
            </div>
            <div className="container w-[70%] mx-auto">
                <p className="text-3xl interf text-[#183557] my-8 py-5 border-b-2 border-[#183557]">{newsData.title}</p>
                <p className="text-justify  text-md my-5 text-gray-600 font-bold">
                  {newsData.description.split('\n').slice(0, 2).map((paragraph, index) => (
                      <React.Fragment key={index}>
                        {paragraph}<br/>
                        <br />
                      </React.Fragment>
                    ))}
                </p>
                <ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 500: 2, 700:4 , 900:4 }}>
                    <Masonry gutter="10px">
                        {newsData.images.map((image, index)=>(
                        <LazyLoad key={index} height={200}>
                          <img
                            alt=""
                            src={image}
                            style={{ width: "100%", height: "auto", borderRadius: "10px" }}
                          />
                        </LazyLoad>
                      ))};
                    </Masonry>
              </ResponsiveMasonry>
              <p className="text-justify  text-md my-5 text-gray-600 font-bold">
                  {newsData.description.split('\n').slice(0, 2).map((paragraph, index) => (
                      <React.Fragment key={index}>
                        {paragraph}<br/>
                        <br />
                      </React.Fragment>
                    ))}
                </p>
            </div>
          </>
        ) : (
          <>
            <div
            className="mt-[-60px] mx-5 mb-12 rounded-lg "
            style={{backgroundImage: `url('https://minf-minf.s3.ap-south-1.amazonaws.com/996a5747-8ecc-47cd-897a-7c12fbffc77c.jpg')`, backgroundSize: "cover",}}
            >
                <div className="flex md:h-[75vh] h-[70vh] justify-center rounded-lg items-center bg-[rgba(0,0,0,0.7)]" >
                    <p className="px-8 md:text-8xl text-5xl text-center text-white tracking-widest mt-[80px] interf pb-2">
                        Rendered News 
                    </p>
                </div>
            </div>
            <div className="h-[80vh]">

            </div>
          </>  
        )
        }
    </div>
  );
};

export default RenderNews;
