import React from "react";
import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

const servicesData = [
  {
    title: "Web Development",
    description:
      "I can create a beautiful and responsive website for you. I have experience in HTML, CSS, JS, React, and Next.js.",
    icon: <GanttChartSquare size={72} strokeWidth={0.8}/>,
  },

  {
    title: "UI/UX Design",
    description:
      "I can create a beautiful and user-friendly design for your website or mobile application.",
    icon: <Gem size={72} strokeWidth={0.8} />,
  },
  {
    title: "Web Design",
    description:
      "I can create a beautiful and user-friendly design for your website or mobile application.",
    icon: <Blocks size={72} strokeWidth={0.8} />,
  },
];

const ServicesSection = () => {
  return (
    <section className="mb-12 lg:mb-36 pt-10">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 lg:mb-20 text-center mx-auto">
          My Services
        </h2>
        <div>
          <div className="grid lg:grid-cols-3 justify-center gap-y-12 lg:gap-y-24 lg:gap-x-8">
            {servicesData.map((service, index) => (
              <Card
                key={index}
                className="mt-12 max-w-[350px] w-full max-w[420px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative transition-transform transform hover:scale-105 duration-300 ease-in-out"
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-background flex items-center justify-center">
                    {service.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{service.title}</CardTitle>
                  <CardDescription className="text-md">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
