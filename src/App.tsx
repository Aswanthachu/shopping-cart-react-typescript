import React from "react";
import { Banner, FeaturedCard, NavBar, OfferSection, ProductList, ReviewSection, SlideButtons } from "./components";

function App() {
  return (
    <section className="flex flex-col bg-bgColor">
      <NavBar />
      <ProductList />
      <Banner />
      <div className=" mt-[400px] lg:mt-0 min-h-fit py-5 font-mons space-y-10 ">
        <div className="px-5 md:px-10 lg:px-16 flex justify-between flex-col lg:flex-row space-y-3">
          <h1 className=" text-3xl lg:text-4xl font-bold lg:font-semibold font-mons">
            Featured Products
          </h1>
          <SlideButtons />
        </div>
        <div className="flex gap-10 lg:gap-20 overflow-x-auto w-full h-fit lg:h-full py-5 pl-5 md:pl-10 lg:pl-16 styled-scrollbar pr-5">
        {[...Array(5)].map((_, index) => (
          <React.Fragment key={index}>
            <FeaturedCard />
          </React.Fragment>
        ))}
        </div>
      </div>
      <ReviewSection />
      <OfferSection />
    </section>
  );
}

export default App;
