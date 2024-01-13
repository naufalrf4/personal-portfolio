import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  Mail,
  MapPin,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
  Users,
} from "lucide-react";
import DevImage from "../partials/Image";

const infoData = [
  {
    icon: <User2 size={24} />,
    text: "Naufal Rizqullah Firdaus",
  },
  {
    icon: <PhoneCall size={24} />,
    text: "+62 822 9882 4102",
  },
  {
    icon: <Mail size={24} />,
    text: "naufalrf4@gmail.com",
  },
  {
    icon: <Calendar size={24} />,
    text: "Born in Cianjur 23 October 2004",
  },
  {
    icon: <GraduationCap size={24} />,
    text: "Computer Engineering Student at IPB University",
  },
  {
    icon: <MapPin size={24} />,
    text: "Depok, West Java, Indonesia",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        title: "Computer Engineering",
        subtitle: "IPB University",
        date: "2022 - present",
      },
      {
        title: "Computer and Network Engineering",
        subtitle: "SMK Nasional Depok",
        date: "2019 - 2022",
      },
    ],
  },
  {
    title: "work",
    data: [
      {
        company: "PT Bank BTPN Tbk",
        qualification:
          "PBI: Fullstack Developer BTPN Syariah x Rakamin Academy",
        date: "2022",
      },
      {
        company: "PT. Miftah Putra Mandiri",
        qualification: "Student Internship",
        date: "2021",
      },
    ],
  },
  {
    title: "organizational",
    data: [
      {
        company: "Obscura Photography Club",
        qualification: "Staff",
        date: "2023 - present",
      },
      {
        company: "Himavo Micro IT",
        qualification: "Webmaster Mentor",
        date: "2022 - present",
      },

      {
        company: "Agrimovie Filmaker Club",
        qualification: "Staff",
        date: "2022 - present",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        title: "Frontend",
        data: [
          {
            name: "HTML",
            href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            icon: "/images/icons/html.svg",
          },
          {
            name: "CSS",
            href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
            icon: "/images/icons/css.svg",
          },
          {
            name: "Javascript",
            href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            icon: "/images/icons/javascript.svg",
          },
          {
            name: "Typescript",
            href: "https://www.typescriptlang.org/",
            icon: "/images/icons/typescript.svg",
          },
          {
            name: "React",
            href: "https://reactjs.org/",
            icon: "/images/icons/react.svg",
          },
          {
            name: "Next.js",
            href: "https://nextjs.org/",
            icon: "/images/icons/nextjs.svg",
          },
          {
            name: "Tailwind CSS",
            href: "https://tailwindcss.com/",
            icon: "/images/icons/tailwindcss.svg",
          },
          {
            name: "Bootstrap",
            href: "https://getbootstrap.com/",
            icon: "/images/icons/bootstrap.svg",
          },
          {
            name: "Framer Motion",
            href: "https://www.framer.com/motion/",
            icon: "/images/icons/framermotion.svg",
          },
        ],
      },
      {
        title: "Backend",
        data: [
          {
            name: "Node.js",
            href: "https://nodejs.org/en/",
            icon: "/images/icons/nodejs.svg",
          },
          {
            name: "Express.js",
            href: "https://expressjs.com/",
            icon: "/images/icons/expressjs.svg",
          },
          {
            name: "MongoDB",
            href: "https://www.mongodb.com/",
            icon: "/images/icons/mongodb.svg",
          },
          {
            name: "MySQL",
            href: "https://www.mysql.com/",
            icon: "/images/icons/mysql.svg",
          },
          {
            name: "Firebase",
            href: "https://firebase.google.com/",
            icon: "/images/icons/firebase.svg",
          },
        ],
      },
      {
        title: "Others",
        data: [
          {
            name: "Git",
            href: "https://git-scm.com/",
            icon: "/images/icons/git.svg",
          },
          {
            name: "Github",
            href: "https://github.com",
            icon: "/images/icons/github.svg",
          },
          {
            name: "Arduino",
            href: "https://www.arduino.cc/",
            icon: "/images/icons/arduino.svg",
          },
          {
            name: "Linux",
            href: "https://www.linux.org/",
            icon: "/images/icons/linux.svg",
          },
          {
            name: "Docker",
            href: "https://www.docker.com/",
            icon: "/images/icons/docker.svg",
          },
          {
            name: "Figma",
            href: "https://www.figma.com/",
            icon: "/images/icons/figma.svg",
          },
          {
            name: "Adobe Photoshop",
            href: "https://www.adobe.com/en/products/photoshop",
            icon: "/images/icons/photoshop.svg",
          },
          {
            name: "Adobe Illustrator",
            href: "https://www.adobe.com/en/products/illustrator",
            icon: "/images/icons/illustrator.svg",
          },
          {
            name: "Adobe Premiere Pro",
            href: "https://www.adobe.com/en/products/premiere.html",
            icon: "/images/icons/premierepro.svg",
          },
        ],
      },
    ],
  },
];

const AboutSection = () => {
  const getData = (arr: any[], title: string) => {
    return arr.find((item) => item.title === title).data;
  };

  return (
    <section className="bg-background flex flex-col-reverse justify-between gap-14 p-8 py-14 sm:p-14 md:p-16 xl:p-44 xl:py-28 lg:p-28 lg:py-24 md:flex-row">
      <div className="container flex flex-col gap-2 mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="hidden items-center justify-center lg:flex flex-1 relative lg:items-center lg:justify-start">
            <DevImage
              containerStyles="p-1 flex rounded-2xl outline outline-4 outline-primary w-[16rem] h-[16rem] lg:w-[18rem] lg:h-[18rem] xl:w-[20rem] xl:h-[20rem]"
              imgLink="/"
              imgSrc="/images/naufalrf.png"
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:max-w-full xl:border dark:border-none">
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>
              <TabsContent value="personal">
                <h3 className="items-center text-xl font-semibold mb-8 text-center lg:text-left">
                  Personal Information
                </h3>
                <div className="flex flex-col gap-2">
                  {infoData.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-row gap-2 items-center"
                    >
                      <div className="w-8 h-8 flex flex-row items-center text-primary">
                        {item.icon}
                      </div>
                      <p className="text-muted-foreground">{item.text}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="education">
                <h3 className="text-xl font-semibold mb-8 text-center lg:text-left">
                  My Education
                </h3>

                <div className="flex flex-col gap-y-8">
                  <div className="flex gap-2 items-center text-primary">
                    <GraduationCap size={24} />
                    <h4 className="capitalize font-medium">Education Major</h4>
                  </div>
                  {getData(qualificationData, "education").map(
                    (item: any, index: number) => {
                      return (
                        <div className="flex gap-x-8 group" key={index}>
                          <div className="h-[128px] w-[2px] bg-border relative ml-2">
                            <div className="w-[12px] h-[12px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[128px] transition-all duration-500"></div>
                          </div>
                          <div className="sm:min-w-[360px] w-[320px] lg:min-h-[128px] border rounded-lg border-primary p-4 flex flex-col gap-2">
                            <div className="flex items-center gap-2 font-semibold text-md leading-6 mb-2">
                              {item.title}
                            </div>
                            <div className="text-base leading-none text-muted-foreground mb-3">
                              {item.subtitle}
                            </div>
                            <div className="capitalize text-sm font-medium">
                              {item.date}
                            </div>
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </TabsContent>
              <TabsContent value="experience">
                <h3 className="items-center text-xl font-semibold mb-8 text-center lg:text-left">
                  My Experience
                </h3>
                <div className="grid md:grid-cols-2 gap-y-8">
                  <div className="flex flex-col gap-y-8">
                    <div className="flex gap-2 items-center text-primary">
                      <Briefcase size={24} />
                      <h4 className="capitalize font-medium">Work</h4>
                    </div>

                    {getData(qualificationData, "work").map(
                      (item: any, index: number) => {
                        return (
                          <div className="flex gap-x-2 group" key={index}>
                            <div className="h-[128px] w-[2px] bg-border relative ml-2">
                              <div className="w-[12px] h-[12px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[128px] transition-all duration-500"></div>
                            </div>
                            <div className="rounded-lg p-4 flex flex-col gap-2">
                              <div className="flex items-center gap-2 font-semibold text-md leading-6 mb-2">
                                {item.company}
                              </div>
                              <div className="text-base leading-5 text-muted-foreground mb-3">
                                {item.qualification}
                              </div>
                              <div className="capitalize text-sm font-medium">
                                {item.date}
                              </div>
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                  <div className="flex flex-col gap-y-8">
                    <div className="flex gap-2 items-center text-primary">
                      <Users size={24} />
                      <h4 className="capitalize font-medium">Organizational</h4>
                    </div>

                    {getData(qualificationData, "organizational").map(
                      (item: any, index: number) => {
                        return (
                          <div className="flex gap-x-2 group" key={index}>
                            <div className="h-[128px] w-[2px] bg-border relative ml-2">
                              <div className="w-[12px] h-[12px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[128px] transition-all duration-500"></div>
                            </div>
                            <div className=" rounded-lg  p-4 flex flex-col gap-2">
                              <div className="flex items-center gap-2 font-semibold text-md leading-6 mb-2">
                                {item.company}
                              </div>
                              <div className="text-base leading-none text-muted-foreground mb-3">
                                {item.qualification}
                              </div>
                              <div className="capitalize text-sm font-medium">
                                {item.date}
                              </div>
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="skills">
                <div className="text-center lg:text-left">
                  <h3 className="items-center text-xl font-semibold mb-8 text-center lg:text-left">
                    Daily Tools
                  </h3>
                 
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
