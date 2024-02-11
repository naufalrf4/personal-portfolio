import React from "react";
import { Metadata } from "next";

import { Tabs } from "@/components/ui/tabs";
import ProjectCard from "@/components/partials/ProjectCard";
import ProjectSection from "@/components/pages/ProjectSection";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Naufal RF's diverse portfolio of web development projects. From front-end to back-end, discover innovative solutions and technologies implemented by Naufal RF, a junior web developer at IPB University.",
};


const ProjectPage = () => {
  return <ProjectSection />;
};

export default ProjectPage;
