import { StaticImageData } from "next/image";

export type Feature = {
    icon?: StaticImageData;
    title: string;
    description: string;
};

export type FeaturesSection = {
    leftFeatures: Feature[];
    rightFeatures: Feature[];
    centerImage: StaticImageData;
};
