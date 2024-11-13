import Link from "next/link";
import { title } from "@/components/primitives";

const PrivacyHeader = () => {
  return (
    <div className="bg-[url('/images/about-bg.png')] bg-cover bg-center h-[300px] relative">
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
        <h1 className={`${title({ size: "lg" })} text-white mb-4`}>
          Privacy Policy
        </h1>
        <div className="flex items-center gap-2 mt-4 text-white/70">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span>›</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default PrivacyHeader;
