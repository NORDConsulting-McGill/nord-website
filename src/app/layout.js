import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "NORD Consulting | McGill University's Pro-Bono Consulting Club",
    template: "%s | NORD Consulting",
  },
  description:
    "NORD Consulting is McGill University's premier pro-bono consulting club in Montreal. We deliver data-driven solutions for non-profits and social enterprises.",
  keywords: [
    "NORD Consulting",
    "McGill",
    "McGill University",
    "consulting club",
    "pro-bono consulting",
    "Montreal",
    "non-profit consulting",
    "data-driven consulting",
    "student consulting",
    "social enterprise",
  ],
  openGraph: {
    title: "NORD Consulting | McGill University's Pro-Bono Consulting Club",
    description:
      "McGill University's premier pro-bono consulting club. Data-driven solutions for non-profits and social enterprises in Montreal.",
    siteName: "NORD Consulting",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NORD Consulting | McGill University",
    description:
      "McGill University's premier pro-bono consulting club. Data-driven solutions for non-profits and social enterprises in Montreal.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Analytics />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
