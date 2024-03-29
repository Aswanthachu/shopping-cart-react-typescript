import React from "react";
import {
  Banner,
  FeaturedBanner,
  FeaturedCard,
  GiftCard,
  InspirationSection,
  NavBar,
  OfferSection,
  ProductList,
  ReviewSection,
  SlideButtons,
} from "./components";
import Social from "./assets/images/Social.png";
import Footer from "./components/Footer";

function App() {
  return (
    <section className="flex flex-col bg-bgColor">
      <NavBar />
      <ProductList />
      <Banner />
      <div className=" mt-[400px] md:mt-[500px] lg:mt-0 min-h-fit py-5 font-mons space-y-10 ">
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
      <div className=" lg:mt-0 min-h-fit py-5 lg:py-16 font-mons space-y-10 ">
        <div className="px-5 md:px-10 lg:px-16 flex justify-between flex-col lg:flex-row space-y-3">
          <h1 className=" text-3xl lg:text-4xl font-bold lg:font-semibold font-mons">
            Top 10 Gifts
          </h1>
          <SlideButtons />
        </div>
        <div className=" grid grid-cols-2 gap-4 lg:gap-0 lg:flex lg:overflow-x-auto w-full h-fit lg:h-full py-5 pl-5 md:pl-10 lg:pl-16 lg:styled-scrollbar pr-5">
          {[...Array(10)].map((_, index) => (
            <React.Fragment key={index}>
              <GiftCard />
            </React.Fragment>
          ))}
        </div>
      </div>
      <InspirationSection />
      <FeaturedBanner />
      <div className="px-5 md:px-10 lg:px-16 my-5 lg:my-20 space-y-5">
        <h1 className="font-mons text-2xl lg:text-[40px] font-bold lg:font-semibold">
          LET’S BE FRIENDS @INSTAGRAM_HANDLE
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:flex lg:justify-between">
        {[...Array(6)].map((_, index) => (
          <React.Fragment key={index}>
            <img src={Social} alt="social" />
          </React.Fragment>
        ))}
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default App;
