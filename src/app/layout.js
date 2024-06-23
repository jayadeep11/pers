import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local"


const inter = Inter({ subsets: ["latin"] });

const acorn = localFont({
  src: "./fonts/Acorn-Bold.ttf",
});


export const metadata = {
  title: "personal-site",
  description: "personal-site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={acorn.className}>
        <div className="lg:px-60 md:px-20 mx-auto px-10">
          <Navbar />
          <div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
