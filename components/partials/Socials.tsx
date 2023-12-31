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
    element: <RiGithubFill />,
  },
  {
    path: "https://www.instagram.com/naufalrf__/",
    element: <RiInstagramLine />,
  },
  {
    path: "https://www.linkedin.com/in/naufalrf/",
    element: <RiLinkedinBoxFill />,
  },
  {
    path: "mailto:naufalrf4@gmail.com",
    element: <RiMailFill />,
  },
];

const Socials: React.FC<socialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {socialLinks.map((icon, index) => {
        return (
          <Link href={icon.path} key={index} aria-label="Naufal RF Social Media Links">
            <div className={`${iconStyles}`} >{icon.element}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
