import Image from "next/image";
import { title } from "@/components/primitives";
import aboutBg from "@/public/images/aboutbg.png";
import ourVisionBg from "@/public/images/ourvision.png";
import ourMissionBg from "@/public/images/ourmission.png";

const AboutVision = () => {
  return (
    <div className="py-20">
      <h2
        className={`${title({ size: "md" })} text-center text-black flex justify-center mb-20`}
      >
        Peace In Every Leaf
      </h2>

      <div className=" mx-auto ">
        <div className="relative">
          <div className="flex justify-center mb-20">
            <Image
              src={aboutBg}
              alt="Weede Circle"
              width={280}
              height={280}
              className="object-contain absolute -top-20 left-1/2 -translate-x-1/2 z-10"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-primary/90 w-full relative overflow-hidden">
            <Image
              src={ourMissionBg}
              alt="Our Vision"
              width={280}
              height={280}
              className="object-contain absolute top-18 left-0 z-10"
            />
            <div className="w-[70%] mx-auto flex flex-col items-center justify-center relative py-24">
              <h3 className={`${title({ size: "sm" })} text-white mb-6`}>
                Our Vision
              </h3>
              <p className="text-white/90 text-center">
                Our vision is to become the leading platform that empowers
                cannabis businesses by fostering innovation, enhancing customer
                connections, and driving long-term growth, while promoting
                sustainable practices and elevating the cannabis industry.
              </p>
            </div>

            <div className="p-12 bg-primary flex flex-col items-center justify-center relative">
              <Image
                src={ourVisionBg}
                alt="Our Mission"
                width={280}
                height={280}
                className="object-contain absolute bottom-0 right-0  z-10"
              />
              <h3 className={`${title({ size: "sm" })} text-white mb-6`}>
                Our Mission
              </h3>
              <p className="text-white/90 text-center">
                Our mission is to help you grow your business in a way that is
                both profitable and sustainable. Your success is our mission!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutVision;
