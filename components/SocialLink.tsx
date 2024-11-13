import { FaFacebook, FaInstagram } from "react-icons/fa";

interface SocialLinkProps {
  href: string;
  platform: "facebook" | "instagram";
}

export const SocialLink = ({ href, platform }: SocialLinkProps) => {
  const Icon = platform === "facebook" ? FaFacebook : FaInstagram;

  return (
    <a
      href={href}
      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
    >
      <Icon size={20} className="text-gray-600" />
    </a>
  );
};
