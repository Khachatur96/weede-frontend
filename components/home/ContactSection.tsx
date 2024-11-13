import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import weedeBg from "@/public/images/weede-bg.png";
import { ContactForm } from "../ContactForm";
import { useRouter } from "next/navigation";

const ContactSection = () => {
  const router = useRouter();

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-20 container mx-auto px-4">
      <div className="bg-primary p-12 relative overflow-hidden py-20">
        <div className="relative z-10">
          <h2 className={`${title({ size: "mid" })} text-white`}>
            Have a question?
          </h2>

          <p className="text-white/90 mb-6 mt-8">
            We&apos;re here to help! If you have any questions or need
            assistance, feel free to reach out. Just fill out the form below
            with your details, and our team will get back to you as soon as
            possible.
          </p>

          <p className="text-white/90 mb-6 mt-8">
            We&apos;re happy to assist you!
          </p>

          <div className="space-y-2 mb-8">
            <p className="text-white/90">Washington, DC 20005, USA</p>
            <p className="text-white/90">+1 125 1234 125</p>
            <p className="text-white/90">info@weede.io</p>
          </div>

          <Button
            className="bg-white text-black px-8 py-2 rounded-md"
            variant="flat"
            onClick={() => router.push("/contacts")}
          >
            See more →
          </Button>
        </div>

        <Image
          src={weedeBg}
          alt="Weede Background"
          className="absolute bottom-0 right-0 opacity-20"
          width={300}
          height={300}
        />
      </div>

      {/* Contact Form will go here */}
      <div className="flex justify-center items-center">
        <ContactForm variant="light" />
      </div>
    </section>
  );
};

export default ContactSection;
