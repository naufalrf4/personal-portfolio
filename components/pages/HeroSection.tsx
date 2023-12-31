"use client";
import Link from "next/link";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Socials from "../partials/Socials";
import { RiArrowDownSLine } from "react-icons/ri";

const jobs = [
  "Undergraduate Student",
  "Web Developer",
  "UI/UX Designer",
  "Freelancer",
];

const HeroSection = () => {
  return (
    <section>
      <div className="bg-[#fef5fe] dark:bg-[#141423] flex flex-col-reverse justify-between gap-14 p-8 py-14 sm:p-14 md:p-16 xl:p-44 xl:py-28 lg:p-28 lg:py-24 md:flex-row">
        <div className="md:w-1/2 flex flex-col justify-center space-y-8">
          <div className="space-y-1 md:space-y-2">
            <h1 className="font-semibold text-md md:text-lg xl:text-xl">
              {"Hi there! I'm"}
            </h1>
            <h2 className="font-bold text-2xl md:text-2xl lg:text-3xl xl:text-4xl">
              Naufal Rizqullah Firdaus
            </h2>
            <h3 className="font-semibold text-lg md:text-xl xl:text-2xl">
              I am{" "}
              <span className="text-primary">
                <Typewriter
                  words={jobs}
                  loop={true}
                  cursor
                  cursorColor="#638DF9"
                  cursorStyle="|"
                  typeSpeed={65}
                  deleteSpeed={100}
                  delaySpeed={1000}
                />
              </span>
            </h3>

            <p className="text-sm md:text-md xl:text-base text-muted-foreground">
              A second year student majoring Computer Engineering Technology at
              IPB University. Proficient in both computer hardware and software,
              he excels in team environments.
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <Link href="/contact">
              <Button variant="outline">Contact Me</Button>
            </Link>
            <Link href="/projects">
              <Button variant="link">My Recent Projects</Button>
            </Link>
          </div>
          <Socials
            containerStyles="flex gap-6"
            iconStyles="text-foreground text-2xl sm:text-3xl hover:text-primary transition-all"
          />
        </div>
        <div className="flex justify-center lg:justify-end items-center">
          <div className="p-1 flex rounded-2xl outline outline-4 outline-primary w-[16rem] h-[16rem] md:w-[16rem] md:h-[16rem] lg:w-[18rem] lg:h-[18rem] xl:w-[20rem] xl:h-[20rem]">
            <Link href="/about">
              <Image
                className="object-cover rounded-2xl"
                src="/images/naufalrf.png"
                alt="NaufalRF"
                width={1024}
                height={1024}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-center animate-bounce">
        <RiArrowDownSLine className="text-4xl text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
