import Image from "next/image";
import "../../public/Kira/lighting.png";

const Description = () => {
  return (
    <div className="w-[80rem] h-[30rem] flex jusitfy-center align-items-center flex-col relative ">
      <h4 className="uppercase text-[1.4rem] absolute left-[33rem] font-[600] text-[#0ADFB2]">
        calculate easy
      </h4>
      {/* HERO TEXT */}
      <div className="absolute top-[1.5rem] left-[13rem] font-[600]">
        <div className="flex">
          <h1 className="text-[3.5rem]">Hassle-free calculate</h1>
          <img
            className="w-[8rem] h-[9rem] absolute left-[31rem] top-[-1rem]"
            src="/Kira/lighting.png"
          />
          <h1 className="text-[3.5rem] ml-[4rem]">SOCSO, KWSP</h1>
        </div>
        <div className="flex absolute left-[13rem]">
          <h1 className="text-[3.5rem]">and EIS with Kira</h1>
          <img className="w-[6rem] h-[5rem]" src="/Kira/kira__white.png" />
        </div>{" "}
        {/* DESCRIPTION HERO TEXT */}
        <div className="absolute font-[400] text-[1.5rem] top-[12rem] left-[14rem]">
          <p>Flow to calculate EPF, SOCSO, EIS and total</p>
          <p className="absolute left-[7rem]">employees salary</p>
        </div>
        <ul className="absolute flex top-[17rem] left-[20rem]">
          <li>
            <Image src="/Kira/kwsp logo.png" width={120} height={50} />
          </li>
          <li>
            <Image src="/Kira/logo perkeso.png" width={80} height={50} />
          </li>
        </ul>
        <button className="absolute top-[25rem] left-[25rem] text-[1.5rem]">Use Now</button>
      </div>
    </div>
  );
};

export default Description;
