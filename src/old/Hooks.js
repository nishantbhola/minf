import { useState, useEffect } from "react";

function Hooks(){

    var [name, setName] = useState("nishant");

    useEffect(()=>{

        

    },)


    

    return (
        <>
            <h1 className="text-5xl">{name}</h1>
            <button className="border-2 mx-auto text-center p-5 bg-blue-500 text-white" onClick={fullname}>full Name</button>
        </>
    );
}

export default Hooks;