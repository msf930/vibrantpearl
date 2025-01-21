import { Rufina, Oxygen } from "next/font/google";
import "./globals.css";

import {ReactLenis} from '@/app/utils/lenis';

const rufinaSans = Rufina({
  variable: "--font-rufina-sans",
  subsets: ["latin"],
    weight: ['400', '700'],
});

const oxygen = Oxygen({
  variable: "--font-oxygen-mono",
  subsets: ["latin"],
    weight: ['400', '700'],
});

export const metadata = {
  title: "Vibrant Pearl",
  description: "We apply ancient Chinese wisdom to help people address the modern health ailments of today’s fast paced world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <ReactLenis root>
      <body
        className={`${rufinaSans.variable} ${oxygen.variable} antialiased`}
      >
        {children}
      </body>
    </ReactLenis>
    </html>
  );
}
