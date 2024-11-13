import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import android from "@/public/images/appStore.svg";
import apple from "@/public/images/appleStore.svg";

interface StoreButtonProps {
  store: "google" | "apple";
  href: string;
  className?: string;
}

export const StoreButton = ({ store, href, className }: StoreButtonProps) => {
  const isGoogle = store === "google";

  return (
    <Link
      href={href}
      className={clsx(
        "flex items-center justify-center  hover:opacity-90 transition-opacity",
        className,
      )}
    >
      <Image
        src={isGoogle ? android : apple}
        alt={isGoogle ? "Get it on Google Play" : "Download on the App Store"}
        width={158}
        height={46}
        className="h-11 w-auto"
      />
    </Link>
  );
};
