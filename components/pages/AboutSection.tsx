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
        title: "Bachelor of Science Computer Engineering",
        subtitle: "IPB University",
        date: "2022 - present",
      },
      {
        title: "Vocational High School Computer and Network Engineering",
        subtitle: "SMK Nasional Depok",
        date: "2019 - 2022",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        Company: "PT Bank BTPN Tbk",
        Qualification:
          "Project-Based Internship: Fullstack Developer BTPN Syariah x Rakamin Academy",
        date: "2022",
      },
      {
        Company: "PT. Miftah Putra Mandiri",
        Qualification: "Student Internship",
        date: "2021",
      },
    ],
  },
  {
    title: "organizational",
    data: [
      {
        Company: "Himavo Micro IT",
        Qualification: "Webmaster Mentor",
        date: "2022 - present",
      },
      {
        Company: "Obscura Photography Club",
        Qualification: "Staff",
        date: "2023 - present",
      },
      {
        Company: "Agrimovie Filmaker Club",
        Qualification: "Staff",
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
        subtitle:
          "HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS, Bootstrap, Material UI",
      },
      {
        title: "Backend",
        subtitle: "Node.js, Express.js, MongoDB, MySQL, PostgreSQL, Firebase",
      },
      {
        title: "Others",
        subtitle:
          "Git, GitHub, Figma, Adobe XD, Adobe Photoshop, Adobe Illustrator, Adobe Premiere Pro, Adobe After Effects, Microsoft Office",
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
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>
              <TabsContent value="personal">
                <div className="flex flex-col gap-4">
                  {infoData.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-row gap-4 items-center"
                    >
                      <div className="w-8 h-8 flex flex-row items-center">
                        {item.icon}
                      </div>
                      <p className="text-foreground">{item.text}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="education">
                <div>Education</div>
              </TabsContent>
              <TabsContent value="experience">
                <div>Experience</div>
              </TabsContent>
              <TabsContent value="skills">
                <div>Skills</div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
