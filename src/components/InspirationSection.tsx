import React from "react";
import InspirationCard from "./InspirationCard";

const InspirationSection = () => {
  return (
    <div className="font-mons lg:px-16 py-10">
      <div className="flex w-full flex-col text-center space-y-3">
        <h1 className="text-4xl font-bold">Need Some Inspiration?</h1>
        <p className="text-lg font-medium">
          Check some of our categories and we guaranty you will find the perfect
          gift.
        </p>
      </div>
      <div className="flex my-10 gap-5 overflow-x-auto overflow-y-hidden w-full styled-scrollbar">
        {[...Array(6)].map((_, index) => (
          <React.Fragment key={index}>
            <InspirationCard />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default InspirationSection;
