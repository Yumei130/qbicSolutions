import { getImagePrefix } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src={`${getImagePrefix()}images/logo/logoFondo.png`}
        alt="logo"
        width={170}
        height={30}
        // style={{ width: "auto", height: "auto" }}
        quality={100}
        className="rounded-lg"
      />
    </Link>
  );
};

export default Logo;
