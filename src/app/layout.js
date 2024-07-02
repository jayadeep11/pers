import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local"
import { Footer } from "@/components/Footer";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="en" className={[inter.variable, acorn.variable].join(" ")}>
      <body>
        <div className="lg:px-20 md:px-10 mx-auto px-5  ">
          <Navbar />
          <div>
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
