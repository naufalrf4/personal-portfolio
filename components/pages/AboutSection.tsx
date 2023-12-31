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

const AboutSection = () => {
  return <section>AboutSection</section>;
};

export default AboutSection;
