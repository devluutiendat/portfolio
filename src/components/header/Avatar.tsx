import siteMetadata from "@/data/siteMetadata";
import Image from "next/image";
import React from "react";

const Avatar: React.FC = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative h-10 w-10 overflow-hidden rounded-full sm:h-12 sm:w-12">
        <Image
          src={siteMetadata.avatar}
          alt="Profile avatar"
          fill
          sizes="(max-width: 768px) 40px, 48px"
          className="object-cover"
          priority
        />
      </div>
      <span className="text-sm font-bold sm:text-xl">
        {siteMetadata.author}
      </span>
    </div>
  );
};

export default Avatar;
