import Image from "next/image";
import Link from "next/link";
import "../../public/Kira/KIRA_LOGO-removebg-preview.png";

const Navbar = () =>{
    return(
        <nav className="box-border flex  h-122 w-76.625 bg-green font-outfit">
        <div className="flex">
          {/* Logo */}
          \
          <Image
            src="/Kira/KIRA_LOGO-removebg-preview.png"
            width={138}
            height={122}
            alt=""
          />
          <h3 className="uppercase">kira</h3>
        </div>

        {/* FUNCTIONAL BAR */}
        <div>
          {" "}
          <ul className="w-[472.36px] flex justify-center align-items-center">
            <li className="w-[81.36px] h-[38px]">
              <Link href="">Home</Link>
            </li>
            <li className="w-[100px] h-[38px]">
              <Link href="">Donate</Link>
            </li>
            <li className="w-[131px] h-[38px]">
              <Link href="">About me</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="w-[132.54px] h-[38px] flex">
            <li className="w-[50px]">BM</li>
            <li className="w-[50px]">EN</li>
          </ul>
        </div>
      </nav>
    )
};
export default Navbar;