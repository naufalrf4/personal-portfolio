import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <div className="bg-background grid grid-cols-2 p-8 py-14 sm:p-10 md:p-16 xl:p-32 xl:py-28 lg:p-28 lg:py-24 md:flex-row">
      <div className="flex justify-center items-center">
        <div className="p-1 flex rounded-2xl outline outline-4 outline-primary w-[16rem] h-[16rem] md:w-[16rem] md:h-[16rem] lg:w-[18rem] lg:h-[18rem] xl:w-[20rem] xl:h-[20rem]">
          <Image
            className="object-cover rounded-2xl"
            src="/images/naufalrf.png"
            alt="NaufalRF"
            width={1024}
            height={1024}
          />
        </div>
      </div>
      <div className="flex flex-col  space-y-8 outline outline-3 outline-primary rounded-2xl p-8 ">
        <div className="space-y-1 md:space-y-2">
          <h1 className="font-semibold text-md md:text-lg xl:text-xl">
            Naufal Rizqullah Firdaus
          </h1>
          <p className="text-sm md:text-md xl:text-base text-gray-600 dark:text-gray-400">
            A second year student majoring Computer Engineering Technology at
            IPB University. Proficient in both computer hardware and software,
            he excels in team environments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
