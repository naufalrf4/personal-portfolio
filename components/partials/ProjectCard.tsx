import React from "react";
import Image from "next/image";
import { Card, CardHeader } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { Button } from "../ui/button";
import { GithubIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const ProjectCard = ({ project }: any) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="mb-14 cursor-pointer transition-transform transform hover:scale-95 duration-300 ease-in-out h-[425px]">
          <CardHeader className="py-4">
            <Image
              className="rounded-sm border-primary border-2"
              src={project.image}
              alt={project.title}
              width={450}
              height={200}
            />
          </CardHeader>
          <div className="px-4 pb-6">
            <h3 className="font-semibold text-lg lg:text-xl mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {project.description.length > 100
                ? project.description.substring(0, 100) + "..."
                : project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              <Badge>{project.category}</Badge>
            </div>
          </div>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="mb-4">{project.title}</DialogTitle>
          <div className="flex items-center justify-center">
            <Image
              className="border-primary border-2"
              src={project.image1}
              alt={project.title}
              width={768}
              height={432}
            />
          </div>
        </DialogHeader>

        <div className="mt-4">
          <DialogDescription>{project.description}</DialogDescription>
        </div>
        <DialogFooter>
          <Link href={project.link}>
            <Button variant="outline" className="mr-2">
              Visit Site
            </Button>
          </Link>
          <Link href={project.github}>
            <Button className="mr-2">
              <GithubIcon size={20} />
            </Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCard;
