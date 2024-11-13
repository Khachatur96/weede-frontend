import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { ContactItem } from "@/components/ContactItem";
import { SocialLink } from "@/components/SocialLink";
import locationIcon from "@/public/images/location.png";
import phoneIcon from "@/public/images/phonecall.png";
import emailIcon from "@/public/images/message.png";
import whatsappIcon from "@/public/images/whatsapp.png";
import telegramIcon from "@/public/images/telegram.png";
import viberIcon from "@/public/images/viber.png";
import fbIcon from "@/public/images/fb.png";
import instagramIcon from "@/public/images/instagram.png";
import Image from "next/image";

export default function ContactsPage() {
  return (
    <DefaultLayout>
      <div className="relative">
        {/* Contact Content */}
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row justify-around">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className={`${title({ size: "mid" })} text-black font-normal`}>
              Contacts
            </h2>
            <div className="space-y-6 mt-8">
              <ContactItem
                icon={<Image src={locationIcon} alt="Location Icon" />}
                text="Washington, DC 20005, USA"
              />
              <ContactItem
                icon={<Image src={phoneIcon} alt="Phone Icon" />}
                text="+1 125 1234 125"
              />
              <ContactItem
                icon={<Image src={emailIcon} alt="Email Icon" />}
                text="info@weede.io"
              />
              <div className="space-y-4">
                <ContactItem
                  icon={<Image src={viberIcon} alt="Viber Icon" />}
                  text="+1 125 1234 125"
                  link="viber://chat?number=+11251234125"
                />
                <ContactItem
                  icon={<Image src={whatsappIcon} alt="WhatsApp Icon" />}
                  text="+1 125 1234 125"
                  link="https://wa.me/11251234125"
                />
                <ContactItem
                  icon={<Image src={telegramIcon} alt="Telegram Icon" />}
                  text="+1 125 1234 125"
                  link="https://t.me/+11251234125"
                />
              </div>
            </div>

            <div className="mt-12 mb-8 md:mb-0">
              <h3 className="text-lg font-normal mb-4 text-black">Follow Us</h3>
              <div className="flex gap-4">
                {/* <SocialLink href="#" platform="facebook" />
                <SocialLink href="#" platform="instagram" /> */}
                <Image src={fbIcon} alt="Facebook Icon" />
                <Image src={instagramIcon} alt="Instagram Icon" />
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-primary rounded-lg p-8">
            <h2 className="text-white text-2xl font-semibold mb-6">
              Questions and suggestions
            </h2>
            <ContactForm variant="dark" />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
