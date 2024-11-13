import Image from "next/image";
import { Button } from "@nextui-org/button";
import { title } from "@/components/primitives";
import whatWeDoImage from "@/public/images/whatwedo.png";
import weedeCircle from "@/public/images/weedecircle.png";
import { useRouter } from "next/navigation";

const WhatWeDo = () => {
  const router = useRouter();

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-20 mx-auto relative">
      <Image
        src={weedeCircle}
        alt="Weede Circle"
        className="object-contain object-center absolute -bottom-12 -left-20 w-[300px] h-[300px]"
      />
      <div className="relative w-full h-[400px] lg:h-[600px]">
        <Image
          src={whatWeDoImage}
          alt="Weede App Interface"
          fill
          className="object-contain object-center"
          priority
        />
      </div>

      <div className="flex flex-col justify-center gap-6 lg:pl-16 bg-primary ">
        <h2 className={title({ size: "lg" })}>What We do?</h2>

        <div className="space-y-4">
          <p className="text-[#FFFFFD]">
            We are an innovative technology company committed to transforming
            the cannabis industry by providing cutting-edge solutions that
            foster growth and efficiency. Our platform, Weede, connects cannabis
            consumers to businesses through an exclusive in-app marketplace
            designed to streamline transactions and enhance user experiences.
          </p>

          <p className="text-[#FFFFFD]">
            Our goal is to drive sustainable growth and maximize value for both
            cannabis businesses and their customers in an ever-evolving market.
          </p>
        </div>

        <Button
          className="max-w-fit px-8 py-2 bg-white text-black rounded-md"
          variant="flat"
          onClick={() => router.push("/about")}
        >
          See more →
        </Button>
      </div>
    </section>
  );
};

export default WhatWeDo;
