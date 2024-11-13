import DefaultLayout from "@/layouts/default";
import AboutVision from "@/components/About/AboutVision";
import FeaturesList from "@/components/common/FeaturesList";
import SectionHeading from "@/components/common/SectionHeading";
import AvailableDevices from "@/components/home/AvailableDevices";
import { homeFeatures, aboutFeatures } from "@/data/features";

export default function AboutPage() {
  return (
    <DefaultLayout>
      <div className="relative">
        <AboutVision />
        <section className="py-20">
          <SectionHeading
            title="Quick & Easy process with best features"
            description="Enjoy a streamlined, hassle-free shopping experience with Weede. Our platform is designed for simplicity and speed, offering top features to make your cannabis shopping smooth and enjoyable. Get everything you need in just a few clicks!"
          />

          <FeaturesList features={homeFeatures} />

          <AvailableDevices />
        </section>
        <section className="py-20">
          <SectionHeading
            title="Transform your business with Weede"
            description="Enjoy a streamlined, hassle-free shopping experience with Weede. Our platform is designed for simplicity and speed, offering top features to make your cannabis shopping smooth and enjoyable. Get everything you need in just a few clicks!"
          />

          <FeaturesList features={aboutFeatures} withIcon={false} />
        </section>
      </div>
    </DefaultLayout>
  );
}
