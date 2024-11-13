import Link from "next/link";
import { title } from "@/components/primitives";

const AboutHeader = () => {
  return (
    <div className="bg-[url('/images/about-bg.png')] bg-cover bg-center min-h-[300px] relative pt-24 lg:pt-16">
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
        <h1 className={`${title({ size: "lg" })} text-white mb-4`}>About Us</h1>
        <p className="text-white/90 max-w-2xl">
          We are an innovative technology company dedicated to transforming the
          cannabis industry. Weede connects cannabis consumers to businesses
          through an in-app premier marketplace.
        </p>
        <div className="flex items-center gap-2 mt-4 text-white/70">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span>›</span>
          <span>About Us</span>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
