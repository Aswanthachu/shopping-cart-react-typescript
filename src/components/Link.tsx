import React from "react";
import ArrowTopIcon from "../assets/svgs/ArrowTopIcon";
import { cn } from "../lib/utils";

interface LinkProps {
  className: string;
  text: string;
  iconColor:string
}

const Link: React.FC<LinkProps> = ({ className, text,iconColor }) => {
  return (
    <span className={className}>
      <p >{text}</p>
      <ArrowTopIcon className={cn(iconColor,"w-3 h-3")} />
    </span>
  );
};

export default Link;
