import React from "react";
import Link from "next/link";
import {ExternalLink, ArrowUpRight} from "lucide-react"

interface ServiceCardInfo {
  id: String;
  title: String;
  description: String;
  link: String;
}

const ServiceCard = ({id, title, description, link}: ServiceCardInfo) => {
  return (
    <div className="border border-border-color text-primary-text font-light bg-background-lighter p-8 flex flex-col gap-6 flex-1">
      <div>
        <p className="mb-2">{id}</p>
        <h3 className="mb-2 uppercase text-xl">{title}</h3>
        <p className="font-extralight leading-7">{description}</p>
      </div>
      <Link href="#" className="flex gap-2 items-center">
          <span className="p-2 rounded-full border border-border-color bg-background-lighter flex justify-center items-center">
          <ArrowUpRight size={15} />
          </span>
          <p>See related experience</p>
        </Link>
    </div>
  );
};

export default ServiceCard;
