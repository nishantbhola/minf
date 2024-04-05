import React from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for shimmer animation
const shimmerAnimation = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;


const ShimmerContent = styled.div`
  width: 100%;
  height: 180px;
  margin-bottom:10px;
  background: linear-gradient(to right, rgba(50, 50, 50, 0.1) 0%, rgba(50, 50, 50, 0.3) 50%, rgba(50, 50, 50, 0.1) 100%);
  background-size: 1000px 100%;
  animation: ${shimmerAnimation} 1s infinite linear;
`;

const ShimmerContent2 = styled.div`
  width: 80%;
  height: 10px;
  border-radius: 100px;
  margin-bottom:10px;
  background: linear-gradient(to right, rgba(50, 50, 50, 0.1) 0%, rgba(50, 50, 50, 0.3) 50%, rgba(50, 50, 50, 0.1) 100%);
  background-size: 1000px 100%;
  animation: ${shimmerAnimation} 1s infinite linear;
`;

const ShimmerContent3 = styled.div`
  width: 60%;
  height: 10px;
  border-radius: 100px;
  background: linear-gradient(to right, rgba(50, 50, 50, 0.1) 0%, rgba(50, 50, 50, 0.3) 50%, rgba(50, 50, 50, 0.1) 100%);
  background-size: 1000px 100%;
  animation: ${shimmerAnimation} 1s infinite linear;
`;

function LoadingPost() {
  return (<>
            {[1,2,3,4].map((_,i)=>
                    (<div key={i}>
                    <ShimmerContent />
                    <div className="w-full flex flex-col justify-center items-center">
                        <ShimmerContent2 />
                        <ShimmerContent3 />
                    </div>
                </div>))}
                </>
  );
}

export default LoadingPost;
