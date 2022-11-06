import React from "react";
import { SiHiveBlockchain, SiStrapi, SiFsecure } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";

const AboutCard = (props) => {
  return (
    <div className="flex flex-col border text-left rounded-2xl py-12 px-8">
      <div>
        <div className="bg-[#0058ff] inline-flex rounded-full p-2">
          {props.icon} 
        </div>
        <h3 className="text-xl py-4  font-bold">
          {props.header} 
        </h3>
        <p>
          {props.text}
          
        </p>
      </div>
    </div>
  );
};

export default AboutCard;