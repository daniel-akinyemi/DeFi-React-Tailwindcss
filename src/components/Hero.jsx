import React from "react";
import heroVid from "../Assets/video.mp4";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] top-[90px]">
      <video
        className="-z-10 absolute object-cover h-full w-full"
        src={heroVid}
        autoPlay
        loop
        muted
      />
      <div className="text-center text-white w-full h-[90vh] flex flex-col justify-center items-center ">
        <h1 className="text-5xl">
          Decentralized <br /> <span className="text-[#0058ff]">Trading</span>{" "}
          Protocol
        </h1>
        <p>
          Guaranteed liquidity trading for millions
          <br /> of users and top Ethereum applications
        </p>
        <div className="mt-2">
          <button>Use DeFi</button>
          <button className="">FAQ</button>
        </div>
      </div>
      <div className="text-2xl mt-1 text-white flex justify-center items-center">
        <h2>Total Volume Secured: $42,104,783,662.47</h2>
      </div>
    </div>
  );
};

export default Hero;
