import { Playfair_Display, DM_Mono, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Background3D from "@/components/Background3D";
import ConsoleSuppressor from "@/components/ConsoleSuppressor";


const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Akhin K. | Mobile & Web Frontend Developer",
  description: "Portfolio of AKHIN K — a Mobile & Web Frontend Developer based in Dubai, UAE.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${dmMono.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="font-ui bg-black text-white min-h-full flex flex-col overflow-x-hidden">
        <ConsoleSuppressor />
        <Background3D />
        <div className="noise-bg"></div>
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
