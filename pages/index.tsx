import DefaultLayout from "@/layouts/default";
import WhatWeDo from "@/components/home/WhatWeDo";
import ContactSection from "@/components/home/ContactSection";
import FeaturesList from "@/components/common/FeaturesList";
import SectionHeading from "@/components/common/SectionHeading";
import AvailableDevices from "@/components/home/AvailableDevices";
import { homeFeatures } from "@/data/features";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <WhatWeDo />
      <section className="py-20">
        <SectionHeading
          title="Quick & Easy process with best features"
          description="Enjoy a streamlined, hassle-free shopping experience with Weede. Our platform is designed for simplicity and speed, offering top features to make your cannabis shopping smooth and enjoyable. Get everything you need in just a few clicks!"
        />

        <FeaturesList features={homeFeatures} />

        <AvailableDevices />
      </section>
      <ContactSection />
    </DefaultLayout>
  );
}
