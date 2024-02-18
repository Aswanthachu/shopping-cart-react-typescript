import React from "react";
import ArrowTopIcon from "../assets/svgs/ArrowTopIcon";
import { cn } from "../lib/utils";

interface ButtonProps {
  className: string;
  type?: "submit" | "reset" | "button";
  text: string;
  iconColor: string;
}

const Button: React.FC<ButtonProps> = ({
  className,
  type,
  text,
  iconColor,
}) => {
  return (
    <button className={cn(className, "group")} type={type}>
      {text}
      <ArrowTopIcon
        className={cn(iconColor, "w-3 min-w-3 h-3 min-h-3 hidden group-hover:block ")}
      />
    </button>
  );
};

export default Button;
