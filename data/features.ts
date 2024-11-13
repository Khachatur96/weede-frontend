import heartIcon from "@/public/images/heart.png";
import checkIcon from "@/public/images/check.png";
import protectIcon from "@/public/images/protect.png";
import lockIcon from "@/public/images/lock.png";
import mapIcon from "@/public/images/map.png";
import featuresImage from "@/public/images/features.png";
import { FeaturesSection } from "@/types/features";

export const homeFeatures = {
    leftFeatures: [
        {
            icon: heartIcon,
            title: "Personalized Recommendations for You",
            description: "Get tailored product suggestions based on your unique preferences and browsing history.",
        },
        {
            icon: checkIcon,
            title: "Effortless Ordering Experience",
            description: "Weede makes cannabis shopping simple and convenient, whether at home or on the go.",
        },
        {
            icon: protectIcon,
            title: "Real-Time Product Availability",
            description: "Weede ensures you always know what's available, so you never miss out on what you want.",
        },
    ],
    rightFeatures: [
        {
            icon: lockIcon,
            title: "Reliable Product Information",
            description: "Make informed decisions with detailed, trusted product descriptions and reviews.",
        },
        {
            icon: lockIcon,
            title: "Secure & Private Shopping",
            description: "Shop with confidence, knowing your data and transactions are protected.",
        },
        {
            icon: mapIcon,
            title: "Convenient Store Finder",
            description: "Find the nearest store for a quick and convenient cannabis shopping trip.",
        },
    ],
    centerImage: featuresImage,
};

export const aboutFeatures = {
    leftFeatures: [
        {
            icon: heartIcon,
            title: "Customer-Centric Approach",
            description: "We put our customers first, ensuring the best possible experience with every interaction.",
        },
        {
            icon: checkIcon,
            title: "Quality Assurance",
            description: "Rigorous standards and testing to ensure only the highest quality products reach our customers.",
        },
        {
            icon: protectIcon,
            title: "Innovation Focus",
            description: "Constantly evolving and improving our platform to meet changing market needs.",
        },
    ],
    rightFeatures: [
        {
            icon: lockIcon,
            title: "Data Security",
            description: "Advanced encryption and security measures to protect your information.",
        },
        {
            icon: lockIcon,
            title: "Compliance First",
            description: "Strictly adhering to all regulatory requirements and industry standards.",
        },
        {
            icon: mapIcon,
            title: "Community Impact",
            description: "Making a positive difference in the communities we serve through various initiatives.",
        },
    ],
    centerImage: featuresImage,
};


export const aboutSecondFeatures: FeaturesSection = {
    leftFeatures: [
        {
            title: "Boost Your Brand &  Expand Your Reach",
            description: "You can boost brand awareness, attract new customers, and significantly expand your reach.",
        },
        {
            title: "Boost Your Brand &  Expand Your Reach",
            description: "You can boost brand awareness, attract new customers, and  expand your reach.",
        },
        {
            title: "Increase Your Visibility",
            description: "Listing your products on Weede means exposing your store to a targeted audience.",
        },
    ],
    rightFeatures: [
        {
            title: "We Invest in Advertising for you",
            description: "We spend our marketing budget to promote your products to a targeted audience.",
        },
        {
            title: "Enhancing customer satisfaction",
            description: "Our platform integrates with your systems, ensuring efficient order fulfillment.",
        },
        {
            title: "Monthly Performance Reports",
            description: "Weede provides monthly reports, giving you insights into how your products are performing.",
        },
    ],
    centerImage: featuresImage,
}