//This is publicly accessable
import Navbar from "./navbar";
import "../../public/Kira/KIRA_LOGO-removebg-preview.png";
import Calculation from "./calculation";
import Description from "./description";
import Donate from "./donate"
export default function Page() {
  return (
    <>
      <section className="">
        {/* Navbar */}
        <Navbar />
      </section>
      <section>
        {/* Description */}
       <Description/>
        {/* TODO:Hero text,link button to the kira calculation,send me a coffee prompt and button */}
      </section>
      <section>
        <Donate/>
      </section>
      <section>
        {/* Calculation */}
        <Calculation />
      </section>
      <section>{/* Footer, chatbot */}</section>
    </>
  );
}
