import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local"
import { Footer } from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

const acorn = localFont({
  src: "./fonts/Acorn-Bold.ttf",
},
  {
    src: "./fonts/Acorn-Light.ttf",
  },
  {
    src: "./fonts/Acorn-Medium.ttf",
  },
  {
    src: "./fonts/Acorn-Regular.ttf",
  },
  {
    src: "./fonts/Acorn-SemiBold.ttf",
  },
);


export const metadata = {
  title: "personal-site",
  description: "personal-site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={acorn.className}>
        <div className="lg:px-72 md:px-36 mx-auto px-10 ">
          <Navbar />
          <div>
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
