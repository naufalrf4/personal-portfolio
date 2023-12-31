import React from "react";
import {
  RiLinkedinBoxFill,
  RiInstagramLine,
  RiDribbbleFill,
  RiMailFill,
  RiGithubFill,
} from "react-icons/ri";
import Link from "next/link";
import { socialProps } from "@/constants/types";

const socialLinks = [
  {
    path: "https://github.com/naufalrf4",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.instagram.com/naufalrf__/",
    name: <RiInstagramLine />,
  },
  {
    path: "https://www.linkedin.com/in/naufalrf/",
    name: <RiLinkedinBoxFill />,
  },
  {
    path: "mailto:naufalrf4@gmail.com",
    name: <RiMailFill />,
  },
];

const Socials: React.FC<socialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {socialLinks.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
