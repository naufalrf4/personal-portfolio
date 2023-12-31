import { imageProps } from "@/constants/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DevImage: React.FC<imageProps> = ({ containerStyles, imgSrc, imgLink }) => {
    return (
        <div className={`${containerStyles}`}>
            <Link href={`${imgLink}`}>
              <Image
                className="object-cover rounded-2xl"
                src={`${imgSrc}`}
                alt="NaufalRF Photo"
                width={500}
                height={500}
              />
            </Link>
          </div>
    );
};

export default DevImage;
