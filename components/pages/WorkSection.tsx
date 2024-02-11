"use client";
import React from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/partials/ProjectCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { projectData } from "@/constants";



const WorkSection = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container flex flex-col gap-6 lg:flex-row justify-between">
        <div className="lg:w-1/3 max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Here are some of my latest projects. You can check out more of my
            projects on my GitHub.
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        <div className="lg:w-2/3 flex justify-center items-center">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
          >
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
