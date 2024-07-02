import React, { useState, useEffect } from 'react';
import Wbcamti01form from './Wbcamti01form';
import axios from 'axios';
import { TrainRounded } from "@mui/icons-material";
import { useAuth } from '../context/AuthContext';

export default function Profile() {

    const [showForm, setShowForm] = useState(false)
    const [counts,setCounts] = useState(0)
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([])
    const {userData, logout} = useAuth()
    
    useEffect(()=>{
        const fetchData = async () => {
        setLoading(TrainRounded)
            try {
            const res = await axios.get(
                `https://minf-bac.vercel.app/users/${userData.userID}/creators-count`
            )

            const data = await res.data;
            const counts = data.creators.reduce((acc, creator) => {
            acc[creator.class] = (acc[creator.class] || 0) + 1;
            return acc;
            }, {});
            setLoading(false)
            setCounts(counts);
            setData(data.creators);
        } catch (error) {
            console.log(error)
        }
    };
    fetchData()},[])


    return (

        <div className="">
            {loading && ( // Render loading popup if loading is true
                        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-90 z-50">
                            <div class="loader">
                                <li class="ball"></li>
                                <li class="ball"></li>
                                <li class="ball"></li>
                            </div>
                        </div>
                    )}
            <div className="w-full mb-5 h-full">
                <div className="h-60 mt-[-60px] mx-5 rounded-2xl bg-white " style={{ backgroundImage: "url('https://smoothcomp.com/pictures/t/122475-cap3/wbc-amateur-muay-tournament-2018.jpg')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <div className=" flex justify-center items-center rounded-2xl h-full w-full bg-[rgba(0,0,0,0.5)] ">
                        <p className="text-center text-3xl mt-[52px] p-5 md:px-0 md:text-6xl text-white interf">WBC MUAYTHAI INDIA <br /> C'SHIP 2024</p>
                    </div>
                </div>
                <div className="w-full mt-[-80px] mt-5 px-5 container mx-auto w-[90%]">
                    <div className="flex justify-center items-center ">
                        <div className="">
                            <img
                                className="objct-cover mx-auto h-[150px] w-[130px] rounded-xl"
                                src='https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg'
                                alt="" />
                            <p className="txt-base interf text-center mt-2 w-full">{userData.name}</p>
                        </div>

                    </div>
                    <div className="h-49 w-full flex justify-center mt-5 items-center md:gap-5 gap-3 ">
                        <div className="h-24 w-24 border-2 border-gray-700 flex flex-col justify-center items-center rounded-xl">
                            <p className="interf text-center text-5xl">{counts.F > 0 ? counts.F : 0 }</p>
                            <p className="text-sm text-center interf text-gray-500">Fighters</p>
                        </div>
                        <div className="h-24 w-24 border-2 border-gray-700 flex flex-col justify-center items-center rounded-xl">
                            <p className="interf text-center text-5xl">{counts.T > 0 ? counts.T : 0 }</p>
                            <p className="text-sm text-center interf text-gray-500">T. H.</p>
                        </div>
                        <div className="h-24 w-24 border-2 border-gray-700 flex flex-col justify-center items-center rounded-xl">
                            <p className="interf text-center text-5xl">{counts.G > 0 ? counts.G : 0 }</p>
                            <p className="text-sm text-center interf text-gray-500">Guests</p>
                        </div>
                    </div>
                </div>
            </div>
                
            {
                !showForm ?
                    (<>
                        <div className='container w-[80%] mx-auto flex justify-center mt-[50px] items-center py-1 px-3  mb-[50px] text-3xl md:text-6xl interf text-gray-600'>
                            <span className='border-b-2 border-gray-600 '>Registeration </span>
                        </div>

                        <div className="flex flex-col justify-center items-center container md:w-[80%] w-[90%] mx-auto ">
                            <div className="relative flex max-w-full h-[430px] w-full flex-col rounded-lg border-2 border-gray-500 px-2">
                                <div className="flex h-fit w-full items-center justify-around rounded-t-lg border-b-2 border-gray-400 p-4 shadow-sm dark:bg-gray-700">
                                    <h4 className="text-xl font-bold interf text-gray-900 dark:text-white">
                                        Registered
                                    </h4>
                                    <button className='bg-green-600 px-3 py-1 interf text-white rounded-md' onClick={() => setShowForm(true)}>Add New  </button>
                                </div>
                                <div className="w-full overflow-x-auto p-4 mt-4">
                                    <table className="table-auto w-full border-collapse">
                                        <thead>
                                            <tr className="bg-gray-100 dark:bg-gray-700">
                                                <th className="p-2 text-center text-xs interf font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300">
                                                    Name
                                                </th>
                                                <th className="p-2 text-center text-xs interf font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300">
                                                    Class
                                                </th>
                                                <th className="p-2 text-center text-xs interf font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300">
                                                    Category
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                            {data.map((item, index) => (
                                                <tr key={index} className="border-b-2 border-gray-300 ">
                                                    <td className="p-3 text-sm tracking-widest text-center interf text-gray-500">
                                                            <span>{item.name}</span>
                                                    </td>
                                                    <td className="p-3 text-sm tracking-widest text-center interf text-gray-500 ">
                                                        {item.class}
                                                    </td>
                                                    <td className="p-3 text-sm tracking-widest text-center interf text-gray-500">
                                                        {item.category}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div> </>
                    ) : (
                        <>
                            <div className="mt-[50px]">
                                <Wbcamti01form userfc={userData}/>
                                <div className="flex justify-center">
                                    <button
                                        className="border-4 hover:border-transparent border-green-600 w-[56%] mt-[30px] hover:bg-green-800 text-gray-600 hover:text-white interf py-2 tracking-widest text-xl px-4 rounded focus:outline-none focus:shadow-outline"
                                        onClick={() => setShowForm(false)}           >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </>
                    )
            }

                    { !showForm && (<div className="flex justify-end mt-8 container mx-auto md:w-[80%] w-[90%]">
                            <button
                                className="bg-red-600 w-[200ox] hover:bg-red-800 text-white interf py-2 tracking-widest text-xl px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={logout}>
                                Logout
                            </button>
                        </div>)}
        </div>
    )

}





