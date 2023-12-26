"use client";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ModeToggle } from "./SwitchTheme";
import { Menu } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Resume", href: "/resume" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-background flex flex-row justify-between p-10 py-4 md:p-16 md:py-6 lg:p-28 lg:py-4 xl:p-32 xl:py-4">
      <div className="text-sm flex justify-center items-center w-12 sm:w-15">
        <Link href="/">
          <Image
            src={"/images/logo-cat.png"}
            alt="Cat"
            width={512}
            height={512}
          />
        </Link>
      </div>
      <div className="hidden md:flex justify-center items-center gap-2">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            className={`${
              pathname === link.href
                ? "text-primary font-bold text-base md:text-md"
                : "text-text hover:text-primary hover:underline text-base md:text-md"
            }`}
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex justify-center items-center gap-4">
        <ModeToggle />
        <Button className="flex md:hidden" size="icon" variant="ghost">
          <Menu />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
