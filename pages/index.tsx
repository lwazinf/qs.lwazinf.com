import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home: NextPage = () => {
  const [imageUrl_, setImageUrl_] = useState("");
  const setQR = async () => {
    const imageUrl = await QRCode.toDataURL("https://quickpay.com/lwazinf");
    setImageUrl_(imageUrl);
  };
  useEffect(() => {
    setQR();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center lg:w-[1200px] md:w-[600px] min-h-screen relative">
      <div className={`flex flex-row justify-center items-center`}>
        <p className={`font-thin text-black/80 text-[18px] m-[2px]`}>
          Transacting with
        </p>
        <p className={`font-black text-black/80 text-[18px] m-[2px]`}>
          LwaziNF
        </p>
      </div>

      <div
        className={`w-[250px] h-[1px] border-b-[2px] border-black/10 border-dashed m-4`}
      />

      <img src={imageUrl_} className={`w-[300px] h-[300px] rounded-[6px]`} />

      <div
        className={`w-[250px] h-[1px] border-b-[2px] border-black/10 border-dashed m-4`}
      />

      <div className={`flex flex-row w-[300px] mt-[0px]`}>
        <div
          className={`font-thin text-black/50 text-[20px] w-[145px] h-[50px] bg-white/60 rounded-5 mx-[5px] flex flex-col justify-center items-center cursor-pointer transition-all duration-400 hover:bg-white`}
        >
          Transactions
        </div>
        <div
          className={`font-thin text-black/50 text-[20px] w-[145px] h-[50px] bg-white/60 rounded-5 mx-[5px] flex flex-col justify-center items-center cursor-pointer transition-all duration-400 hover:bg-white`}
        >
          Scan
        </div>
      </div>

      <div
        className={`w-[250px] h-[1px] border-b-[2px] border-black/10 border-dashed m-4`}
      />

      <div
        className={`bg-white/40 flex flex-row items-center justify-center w-[300px] h-[100px] relative p-[4px] rounded-[6px] cursor-pointer transition-all duration-[800ms] hover:bg-white`}
      >
        <img src={imageUrl_} className={`w-[92px] h-[92px] rounded-[6px]`} />
        <div
          className={`flex flex-col items-start justify-center w-[208px] h-[80px] relative p-[4px] rounded-[6px]`}
        >
          
          <div
            className={`flex flex-row items-start justify-center relative`}
          >
            <p className={`font-black text-black/80 text-[18px] m-[2px]`}>
              LwaziNF
            </p>

            <p className={`font-medium text-black/80 text-[12px] relative top-[9px] ml-[22px]`}>
              0.003
            </p>
            <FontAwesomeIcon
            icon={faEthereum}
            className={`h-[19px] w-[19px] relative top-1 text-black/80`}
            onClick={() => {}}
          />            

          </div>

          <p className={`text-black text-[13px] m-[2px]`}>
            From: 0xbDA57...0197E
          </p>

          <p className={`font-thin text-black/70 text-[13px] m-[2px]`}>
            14 September 2022, 14:20
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
