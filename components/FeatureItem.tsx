import React from "react";

type FeatureItemProps = {
  icon?: React.ReactNode;
  title: string;
  description: string;
};

const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="flex gap-4">
    {icon ? (
      <div className="w-12 h-12 flex items-center justify-center text-2xl bg-primary/10 rounded-full flex-shrink-0">
        {icon}
      </div>
    ) : null}
    <div>
      <h3 className="text-lg font-semibold mb-2 text-black max-w-[260px]">
        {title}
      </h3>
      <p className="text-default max-w-[320px]">{description}</p>
    </div>
  </div>
);

export default FeatureItem;
