import Image from "next/image";
import "../../public/Kira/lighting.png";

const Description = () => {
  return (
    <div className="flex jusitfy-center align-items-center flex-col">
      <h4 className="uppercase">calculate easy</h4>
      <h1>
        Hassle-free calculate{" "}
        <span>
          <Image src="/Kira/lighting.png" width={50} height={50} />
        </span>{" "}
        <span className="uppercase">socso</span>,{" "}
        <span className="uppercase">epf</span> and{" "}
        <span className="uppercase">eis</span> with Kira
        <span>
          <Image src="/Kira/kira__white.png" width={50} height={50} />
        </span>
      </h1>
      <p>Flow to calculate EPF, SOCSO, EIS and total</p>
      <p>employees salary</p>
      <ul>
        <li><Image src="/Kira/kwsp logo.png" width={50} height={50}/></li>
        <li><Image src="/Kira/logo perkeso.png" width={50} height={50}/></li>
      </ul>
      <button>Use Now</button>
    </div>
  );
};

export default Description;
