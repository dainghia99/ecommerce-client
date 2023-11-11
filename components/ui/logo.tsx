import Image from "next/image";
import logo from "@/public/logo.jpg";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="mr-24">
      <Link href="/">
        <Image className="w-10 h-10 overflow-hidden" alt="Logo" src={logo} />
      </Link>
    </div>
  );
};

export default Logo;
<div>Logo!</div>;
