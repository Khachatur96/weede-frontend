import Image from "next/image";

import FeatureItem from "../FeatureItem";

import { FeaturesSection } from "@/types/features";

type FeaturesListProps = {
  features: FeaturesSection;
  withIcon?: boolean;
};

const FeaturesList: React.FC<FeaturesListProps> = ({
  features,
  withIcon = true,
}) => {
  return (
    <section className="py-20 pt-4 container mx-auto px-4 relative">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
        {/* Left Features */}
        <div className="space-y-12">
          {features.leftFeatures.map((feature, index) => (
            <FeatureItem
              key={`left-${index}`}
              description={feature.description}
              icon={
                withIcon ? (
                  <Image
                    alt={`${feature.title} Icon`}
                    src={feature.icon || ""}
                  />
                ) : null
              }
              title={feature.title}
            />
          ))}
        </div>

        {/* Center Image */}
        <div className="relative h-[600px] hidden lg:block">
          <Image
            fill
            alt="Weede App Features"
            className="object-contain max-w-[330px] max-h-[432px]"
            src={features.centerImage}
          />
        </div>

        {/* Right Features */}
        <div className="space-y-12">
          {features.rightFeatures.map((feature, index) => (
            <FeatureItem
              key={`right-${index}`}
              description={feature.description}
              icon={
                withIcon ? (
                  <Image
                    alt={`${feature.title} Icon`}
                    src={feature.icon || ""}
                  />
                ) : null
              }
              title={feature.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesList;
