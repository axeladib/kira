//This is publicly accessable
import Image from "next/image";
import "../../public/Kira/KIRA_LOGO-removebg-preview.png";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="">
        {/* Navbar */}
        <nav className="box-border flex  h-122 w-76.625 bg-green font-outift">
          <div className="flex">
            {/* Logo */}
            \
            <Image
              src="/Kira/KIRA_LOGO-removebg-preview.png"
              width={50}
              height={50}
              alt=""
            />
            <h3 className="uppercase">kira</h3>
          </div>


     {/* FUNCTIONAL BAR */}
          <div>
            {" "}
            <ul className="">
              <li>
                <Link href="" className="">
                  Home
                </Link>
              </li>
              <li>
                <Link href="">Donate</Link>
              </li>
              <li>
                <Link href="">About me</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="">
              <li>BM</li>
              <li>EN</li>
            </ul>
          </div>
        </nav>
      </section>
      <section>
        {/* Description */}
        {/* TODO:Hero text,link button to the kira calculation,send me a coffee prompt and button */}
      </section>
      <section>{/* Calculation */}</section>
      <section>{/* Footer, chatbot */}</section>
    </>
  );
}
