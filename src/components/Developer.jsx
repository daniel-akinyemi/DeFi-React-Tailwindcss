import React from "react";
import terminal from "../Assets/terminal.png";

const Developer = () => {
  return (
    <div className="w-full text-white bg-black flex justify-center items-center">
      <div className="block md:flex max-w-[1240px] items-center justify-center px-4 py-16">
        <div>
          <h1>Superpowers for DeFi developers</h1>
          <p className="pr-8 md:pr-20">
            Checkout the <span className="blue">documentation</span>, the{" "}
            <span className="blue">quick start</span> or a guide below to
            integrate your project with thousands of tokens and billions of
            liquidity
          </p>
        </div>
        <div>
          <img
            className="max-w-[400px] mt-8 shadow-lg shadow-cyan-500/50 md:max-w-[250px]"
            src={terminal}
          />
        </div>
      </div>
    </div>
  );
};

export default Developer;
