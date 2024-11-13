import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";
import { Logo } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { useEffect, useState } from "react";
import { StoreButton } from "@/components/StoreButton";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export const Navbar = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NextUINavbar
      className={`py-2 md:py-6 mx-auto !px-2 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#001F1A]" : "bg-transparent backdrop-blur-lg"
      }`}
      maxWidth="full"
      position="sticky"
    >
      <div className="container mx-auto flex justify-between items-center">
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/"
            >
              <Logo className="!lg:w-[220px] !lg:h-[152px]  !w-[120px] !h-[123px]" />
            </NextLink>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <ul className="hidden lg:flex gap-8 justify-center ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                {item.label === "Contacts" ? (
                  <Button
                    as={Link}
                    className={clsx(
                      "text-lg px-8 py-2 rounded-full",
                      router.pathname === item.href
                        ? "bg-primary text-white"
                        : "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white",
                    )}
                    href={item.href}
                  >
                    {item.label}
                  </Button>
                ) : (
                  <NextLink
                    className={clsx(
                      linkStyles({ color: "foreground" }),
                      "text-lg",
                      router.pathname === item.href
                        ? "text-primary font-medium"
                        : "text-foreground",
                    )}
                    href={item.href}
                  >
                    {item.label}
                  </NextLink>
                )}
              </NavbarItem>
            ))}
          </ul>
        </NavbarContent>
        <NavbarContent
          className="flex lg:hidden h-[3rem] w-[3rem]"
          justify="end"
        >
          <NavbarMenuToggle />
        </NavbarContent>
        <NavbarMenu className="bg-white p-0 pt-6">
          <div className="flex flex-col h-[calc(100vh-4rem)]">
            {/* Navigation Links */}
            <div className="flex-1">
              {siteConfig.navMenuItems.map((item) => (
                <NavbarMenuItem key={item.href}>
                  <NextLink
                    className={clsx(
                      "text-xl font-medium font-montserrat text-black border-b border-gray-200 py-6 block",
                      router.pathname === item.href
                        ? "text-primary border-primary"
                        : "text-black",
                    )}
                    href={item.href}
                  >
                    <p className="ml-4">{item.label}</p>
                  </NextLink>
                </NavbarMenuItem>
              ))}
            </div>

            {/* App Store Buttons */}
            <div className="space-y-4 mb-8">
              <p className="text-xl text-black text-center font-montserrat">
                Get The App
              </p>
              <div className="flex gap-4 justify-center">
                <StoreButton store="google" href="#" />
                <StoreButton store="apple" href="#" />
              </div>
            </div>

            {/* Logo and Social Links */}
            <div className="space-y-6 flex flex-col items-center justify-center w-full py-4">
              <Logo
                className="w-[120px] h-[82px] flex justify-center"
                screen="mobile"
              />
              <div className="flex gap-6 justify-center">
                <Link href="#" className="text-primary hover:opacity-80">
                  <FaFacebook size={24} />
                </Link>
                <Link href="#" className="text-primary hover:opacity-80">
                  <FaInstagram size={24} />
                </Link>
              </div>
            </div>
          </div>
        </NavbarMenu>
      </div>
    </NextUINavbar>
  );
};
