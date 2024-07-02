"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  {
    path: "/",
    name: "/",
  },
  {
    path: "/projects",
    name: "Projects",
  },
  {
    path: "/notes",
    name: "Notes",
  },
  {
    path: "/about",
    name: "About",
  },
];

export default function NavBar() {
  let pathname = usePathname() || "/";

  if (pathname.includes("/notes/")) {
    pathname = "/notes";
  }

  const [hoveredPath, setHoveredPath] = useState(pathname);

  return (
    <div className="flex justify-center items-center mt-5 mx-auto">
      <div className="border border-neutral-800/90 p-[0.4rem]  rounded-full sticky z-[100]  backdrop-blur-md">
        <nav className="flex md:gap-2 gap-1 lg:gap-2 relative items-center justify-center w-full z-[100]  rounded-full">
          {navItems.map((item) => {
            const isActive = item.path === pathname;

            return (
              <Link
                key={item.path}
                className={`px-4 py-2 rounded-full text-sm font-medium lg:text-base relative no-underline duration-300 ease-in ${isActive ? "text-zinc-100" : "text-zinc-400"
                  }`}
                data-active={isActive}
                href={item.path}
                onMouseOver={() => setHoveredPath(item.path)}
                onMouseLeave={() => setHoveredPath(pathname)}
              >
                <span>{item.name}</span>
                {item.path === hoveredPath && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-full bg-stone-800/80 rounded-full -z-10"
                    layoutId="navbar"
                    aria-hidden="true"
                    style={{
                      width: "100%",
                    }}
                    transition={{
                      type: "spring",
                      bounce: 0.25,
                      stiffness: 130,
                      damping: 9,
                      duration: 0.3,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
