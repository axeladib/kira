import Image from "next/image";
import Link from "next/link";
import "../../public/Kira/KIRA_LOGO-removebg-preview.png";

const Navbar = () => {
  return (
    <nav className="box-border flex  h-122 w-[80rem]  font-outfit relative">
      <div className="flex justify-center align-items-center relative left-[3rem]">
        {/* Logo */}

        <Image
          src="/Kira/KIRA_LOGO-removebg-preview.png"
          width={90}
          height={65}
          alt=""
        />
        <h3 className="uppercase mt-[2rem] mr-[0.5rem] text-[2rem] font-[400] tracking-wide ">
          kira
        </h3>
      </div>

      {/* FUNCTIONAL BAR */}
      <div>
        {" "}
        <ul className="w-[472.36px] flex justify-center align-items-center absolute left-[27rem] mt-[2.7rem] text-[1.3rem] font-[500] ">
          <li className="w-[81.36px] h-[38px] mr-[3.5rem] text-[#B9B9B9] hover:text-[#03001C] tracking-widest">
            <Link href="">Home</Link>
          </li>
          <li className="w-[100px] h-[38px] mr-[3.5rem] text-[#B9B9B9] hover:text-[#03001C] tracking-widest">
            <Link href="">Donate</Link>
          </li>
          <li className="w-[131px] h-[38px] mr-[3.5rem] text-[#B9B9B9] hover:text-[#03001C] tracking-widest">
            <Link href="">About me</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="w-[132.54px] h-[38px] flex absolute right-[6rem] mt-[2.5rem] text-[1.5rem] font-[500]">
          <li className="w-[50px] mr-[0.8rem] cursor-pointer hover:text-[#B9B9B9]">
            BM
          </li>
          <li className="w-[50px] mr-[0.8rem] cursor-pointer hover:text-[#B9B9B9]">EN</li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
