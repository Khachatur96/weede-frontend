import { title } from "@/components/primitives";
import headerMobileBg from "@/public/images/header-mobilebg.png";
import Image from "next/image";
import { StoreButton } from "@/components/StoreButton";
import "@/styles/head.css";

const HomeHeader = () => {
  return (
    <section className="container flex flex-col items-center text-center lg:text-left lg:items-start justify-between gap-8 py-0 md:py-16 md:mt-32 mx-auto px-4 relative">
      <div className="flex flex-col gap-4 w-full lg:max-w-md z-20 pt-24 lg:pt-0">
        <div className="flex flex-col gap-4">
          <h1 className={`${title({ size: "3xl" })} block`}>EXPLORE.</h1>
          <h1 className={`${title({ size: "3xl" })} block`}>BUY.</h1>
          <h1 className={`${title({ size: "3xl" })} block`}>ENJOY.</h1>
        </div>
        <p className="text-default-600 text-lg">
          Your go-to marketplace for seamless shopping and joyful moments. A
          seamless way to explore, shop, and enjoy your favorite products.
        </p>
        <div className="flex flex-col items-center lg:items-start gap-4 mt-8">
          <p className="text-default-600">Get The App</p>
          <div className="flex gap-4">
            <StoreButton store="google" href="#" />
            <StoreButton store="apple" href="#" />
          </div>
        </div>
      </div>
      <div className="relative lg:absolute bottom-0 right-0 left-0 w-full h-full">
        <Image
          src={headerMobileBg}
          alt="App mockup"
          width={800}
          height={600}
          className="w-[500px] h-auto mx-auto lg:w-full lg:h-full object-cover lg:object-contain lg:object-right-bottom"
          priority
        />
      </div>
    </section>
  );
};

export default HomeHeader;
