import { Head } from "./head";

import { Navbar } from "@/components/navbar";
// import "@/styles/header.css";
import HomeHeader from "@/components/home/HomeHeader";
import Footer from "@/components/Footer";
import ContactsHeader from "@/components/contacts/ContacsHeader";
import { useRouter } from "next/router";
import FAQHeader from "@/components/FAQ/FAQHeader";
import AboutHeader from "@/components/About/AboutHeader";
import TermsHeader from "@/components/Terms/TermsHeader";
import PrivacyHeader from "@/components/Privacy/PrivacyHeader";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const getHeader = (pathname: string) => {
    switch (pathname) {
      case "/":
        return <HomeHeader />;
      case "/contacts":
        return <ContactsHeader />;
      case "/faq":
        return <FAQHeader />;
      case "/about":
        return <AboutHeader />;
      case "/terms":
        return <TermsHeader />;
      case "/privacy":
        return <PrivacyHeader />;
      default:
        return null;
    }
  };

  const { pathname } = useRouter();
  const header = getHeader(pathname);

  return (
    <div className="relative">
      <header className="header-bg md:pt-16">
        <Head />
        <Navbar />
        {header}
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
