import React from "react";
import { SiHiveBlockchain, SiStrapi, SiFsecure } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div className="flex text-center text-white max-w-[1240px] mx-auto px-4 py-16 bg-black ">
      <div>
        <h1>A Growing Protocol Ecosystem</h1>
        <p className="flex px-6">
          The DeFi protocol system empowers developers, liquidity providers, and
          traders to participate in a financial marketplace that is open and
          accessible to all
        </p>
        {/* Card Container */}
        <div className="mt-8 text-white grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Cards */}
          <AboutCard
            icon={<SiHiveBlockchain size={40} />}
            
            header="Reliable tamper-proof network"
            text="Use decentralization, trusted nodes, premium data and cryptographic
            proofs to connect highly accurate and available data/APIs to any smart
            contract."
          />
          <AboutCard
            icon={<SiStrapi size={40} />}
            header="Proven ready-made solutions"
            text="Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications."
          />
          <AboutCard
            icon={<SiFsecure size={40} />}
            header="Secure off-chain computation"
            text="Use a decentralized network of DeFi keeper nodes to automate contracts, mitigating risk of maual interventions and centralized servers"
          />
          <AboutCard
            icon={<VscServerProcess size={40} />}
            header="Seemless connection to any API"
            text="Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
