"use client";
import { projectData } from "@/constants";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import ProjectCard from "../partials/ProjectCard";

const filtered = [
  "all projects", // @ts-ignore
  ...new Set(projectData.map((item) => item.category)),
];

const ProjectSection = () => {
  const [categories, setCategories] = React.useState(filtered);
  const [category, setCategory] = React.useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    return category === "all projects" ? true : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-10 text-center mx-auto">
          My Projects
        </h2>
        <Tabs defaultValue={category}>
          <TabsList className="w-full grid h-full md:grid-cols-2 lg:max-w-[320px] mb-12 mx-auto md:border">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  className="capitalize px-6 py-2"
                  value={category}
                  key={index}
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="text-lg grid grid-cols-1 gap-0 md:gap-4 md:grid-cols-2 lg:grid-cols-3 ">
            {filteredProjects.map((project, index) => (
              <TabsContent value={category} key={index}>
                <ProjectCard className="transition-opacity duration-500" project={project} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectSection;
