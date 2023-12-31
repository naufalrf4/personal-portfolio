"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AlignJustify } from "lucide-react";

import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "@/components/partials/SwitchTheme";
import { navLinks } from "@/constants";
import { navProps } from "@/constants/types";
import Socials from "./Socials";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo-cat.png"
        alt="logo"
        width={54}
        height={54}
        priority
      />
    </Link>
  );
};

const MobileNav = () => {

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost">
          <AlignJustify className="w-6 h-6 cursor-pointer" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav
              containerStyles="flex flex-col items-center gap-y-4"
              linkStyles="text-xl"
            />
            <Socials containerStyles='flex gap-x-4' iconStyles='text-3xl hover:text-primary transition-all' />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const Nav: React.FC<navProps> = ({
  containerStyles,
  linkStyles,
  underlineStyles,
}) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {navLinks.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles} ${path === link.path
              ? "text-primary font-bold"
              : "hover:text-primary"}`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setHeader(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        header ? "py-4 bg-background shadow-lg" : "py-6 bg-transparent"
      } sticky top-0 z-30 transition-all sm:px-10 md:px-10 xl:px-32 lg:px-20 ${pathname === "/" && 'bg-[#fef5fe] dark:bg-[#141423]'}`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Nav
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
              linkStyles="relative hover:text-primary transition-all"
              containerStyles="hidden lg:flex gap-x-8 items-center"
            />
          </div>

          <div className="flex flex-row gap-2">
            <ModeToggle />
            <div className="lg:hidden"><MobileNav /></div>
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
