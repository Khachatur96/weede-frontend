import Link from "next/link";
import { title } from "@/components/primitives";

const ContactsHeader = () => {
  return (
    <div className="md:py-16 md:mt-40 mt-24 relative py-16">
      {/* <div className="absolute inset-0 bg-black/50" /> */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
        <h1 className={`${title({ size: "lg" })} text-white mb-4`}>
          Contact Us
        </h1>
        <p className="text-white/90">
          Call or write, our team will be happy to answer all your questions
        </p>
        <div className="flex items-center gap-2 mt-4 text-white/70">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span>›</span>
          <span>Contact Us</span>
        </div>
      </div>
    </div>
  );
};

export default ContactsHeader;
