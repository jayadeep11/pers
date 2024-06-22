'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


const navItems = [
  { label: "Workflow", href: "/" },
  { label: "About", href: "/about" },
  { label: "Notes", href: "/notes" },
  { label: "Contact", href: "/contact" },
];

const style = "bg-white rounded-full   text-black"



const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`sticky top-5 z-50 `}>
      <div className="flex justify-center items-center">
        <ul className={` hidden font-medium backdrop-blur-xl transition-all md:flex duration-500 rounded-full ${scrolled ? "border " : "border"} border-neutral-700/80 p-4 lg:flex justify-center space-x-14  lg:w-[500px]`}>
          {navItems.map((item, index) => (
            <li key={index} className={`hover:text-orange-500 p-2 transition-all duration-700 ${pathname == item.href ? style : ""}  style : "" `}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
