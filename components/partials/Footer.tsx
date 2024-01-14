import React from "react";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-background/90 py-10">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <Socials iconStyles="text-primary text-2xl dark:text-white/80 hover:text-muted-foreground transition-all dark:hover:text-primary" containerStyles="flex gap-x-6 mx-auto lg:mx-0 mb-4"/>
          <div className="text-muted-foreground">
            Copyright &copy; 2023 NaufalRF
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
