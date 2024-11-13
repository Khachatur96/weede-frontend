import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";
import { Montserrat } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMontserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
