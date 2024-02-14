import React, { useState } from "react";
import ArrowTopIcon from "../assets/svgs/ArrowTopIcon";
import { cn } from "../lib/utils";

interface ButtonProps {
  className: string;
  type?: "submit" | "reset" | "button";
  text: string;
  iconColor:string;
}

const Button: React.FC<ButtonProps> = ({ className, type, text,iconColor }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      className={className}
      type={type}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
      {isHovered && <ArrowTopIcon className={cn(iconColor,"w-3 h-3")} />}
    </button>
  );
};

export default Button;
