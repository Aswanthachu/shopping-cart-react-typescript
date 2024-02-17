import { useState } from "react";
import { cn } from "../lib/utils";

const FavoriteIcon = () => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleHeartColor = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={cn(isClicked? "block":"hidden group-hover:block","absolute right-1 lg:right-5 top-1 lg:top-2 z-40 ")}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={cn(
          isClicked ? "fill-red-500 stroke-red-500" : "fill-transparent stroke-2 stroke-black",
          "h-12 w-12 cursor-pointer rounded-full p-2 transition-colors"
        )}
        onClick={toggleHeartColor}
      >
        <path
          strokeWidth="1"
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"
        />
      </svg>
    </div>
  );
};

export default FavoriteIcon;
