import Image from "next/image";
import { title } from "@/components/primitives";
import { StoreButton } from "@/components/StoreButton";
import availableDevices from "@/public/images/available.png";

const AvailableDevices = () => {
  return (
    <section className="relative py-6 md:py-20">
      <div className="absolute inset-0  bg-image-available" />

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <h2 className={`${title({ size: "lg" })} text-white mb-4`}>
          Weede available for all devices
        </h2>

        <p className="text-white/80 max-w-2xl mx-auto mb-8">
          Seamlessly connect with the best products and businesses anytime,
          anywhere. Download the Weede app on your preferred device today!
        </p>

        <div className="flex justify-center gap-4 mb-6">
          <StoreButton store="google" href="#" className="h-14" />
          <StoreButton store="apple" href="#" className="h-14" />
        </div>

        <p className="text-white/60 text-sm">
          * Available on iPhone, iPad and all Android devices
        </p>
      </div>
    </section>
  );
};

export default AvailableDevices;
