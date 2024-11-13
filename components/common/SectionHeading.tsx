import { title as titleClass } from "@/components/primitives";

type SectionHeadingProps = {
  title: string;
  description?: string;
};

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  description,
}) => {
  return (
    <div className="text-center mb-12">
      <h2 className={`${titleClass({ size: "mid" })} text-black font-bold`}>
        {title}
      </h2>
      <p className="text-default mt-4 max-w-3xl mx-auto">{description}</p>
    </div>
  );
};

export default SectionHeading;
