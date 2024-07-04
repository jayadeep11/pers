import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local"
import Image from "next/image";
import A from "../../public/A.png"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const acorn = localFont({
  src: "./fonts/Acorn-Bold.ttf",
  variable: "--font-acorn",
}
);


export const metadata = {
  title: "personal-site",
  description: "personal-site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${acorn.variable}`}>
      <body>
        <div className="relative lg:px-20 md:px-10 mx-auto px-5 ">
          <Navbar />
          <div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
