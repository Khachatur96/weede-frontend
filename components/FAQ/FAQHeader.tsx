import Link from "next/link";
import { title } from "@/components/primitives";

const FAQHeader = () => {
  return (
    <div className="bg-[url('/images/faq-bg.png')] bg-cover bg-center h-[300px] relative pt-16 lg:pt-0">
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
        <h1 className={`${title({ size: "lg" })} text-white mb-4`}>FAQ</h1>
        <p className="text-white/90">Here you will find answers to</p>
        <p className="text-white/90">
          frequently asked questions from our customers.
        </p>
        <div className="flex items-center gap-2 mt-4 text-white/70">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span>›</span>
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default FAQHeader;
