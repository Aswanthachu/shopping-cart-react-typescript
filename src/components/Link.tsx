import React from "react";
import ArrowTopIcon from "../assets/svgs/ArrowTopIcon";

interface LinkProps {
  className: string;
  text: string;
}

const Link: React.FC<LinkProps> = ({ className, text }) => {
  return (
    <span className={className}>
      <p >{text}</p>
      <ArrowTopIcon className="w-3 h-3" />
    </span>
  );
};

export default Link;
