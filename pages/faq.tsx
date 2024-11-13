import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQ/FAQAccordion";

export default function FAQPage() {
  return (
    <DefaultLayout>
      <div className="relative">
        {/* Hero Section */}

        {/* FAQ Content */}
        <div className="container mx-auto px-4 py-16">
          <FAQAccordion items={faqItems} />
        </div>
      </div>
    </DefaultLayout>
  );
}

const faqItems = [
  {
    question: "What is Weede?",
    answer:
      "Weede is an innovative app designed to connect consumers with businesses through an exclusive marketplace. It provides a seamless platform for discovering and purchasing high-quality products, offering a convenient and secure way to shop from trusted vendors.",
  },
  {
    question: "How do I get started with Weede?",
    answer:
      "Simply download the Weede app from the Google Play Store or Apple App Store, sign up with your details, and start exploring the marketplace. It’s easy to navigate and designed for a seamless user experience.",
  },
  {
    question: "Is Weede available on all devices?",
    answer:
      "Yes, Weede is available for download on both Android and iOS devices, making it accessible on smartphones and tablets for a flexible shopping experience.",
  },
  {
    question: "How secure is my personal information on Weede?",
    answer:
      "Weede prioritizes your privacy and security. All personal information is protected with encryption and handled in accordance with industry standards. You can shop safely within the app.",
  },
  {
    question: "Is there a subscription fee for using Weede?",
    answer: "No, Weede is free to download and use for consumers.",
  },
];
