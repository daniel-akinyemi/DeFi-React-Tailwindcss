import React from "react";

const Subscribe = () => {
  return (
    <div className="w-full bg-black flex item-center justify-center">
      <div className="px-4 py-16 max-w-[1240px] bg-black text-white text-center ">
        <h1>Join Our DeFi Community</h1>
        <div className="py-4">
          <input className="p-3 rounded-3xl mr-4" type="email" placeholder="Enter your email" />
          <button>Sign Up</button>
        </div>
        <div className="px-4 flex item-center justify-center py-2">
          <input className=" mr-2" type="checkbox" name="checkbox" id="" />
          <p className="text-sm">Yes, I agree to recieve email communications from DeFi</p>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
