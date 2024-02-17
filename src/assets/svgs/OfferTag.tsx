import React from "react";

interface OfferTagProps {
  className: string;
}

const OfferTag: React.FC<OfferTagProps> = ({ className }) => {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 98 289"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0H98V289L49 214.452L0 289V0Z" fill="#111111" />
      <path
        d="M28.0766 29.44C29.6232 29.9467 30.8499 30.8 31.7566 32C32.6632 33.1733 33.1166 34.64 33.1166 36.4C33.1166 38.8267 32.1832 40.7067 30.3166 42.04C28.4499 43.3467 25.7299 44 22.1566 44H8.23656V16H21.3566C24.6632 16 27.2099 16.6533 28.9966 17.96C30.7832 19.24 31.6766 21.0133 31.6766 23.28C31.6766 24.6667 31.3566 25.8933 30.7166 26.96C30.0766 28.0267 29.1966 28.8533 28.0766 29.44ZM13.4366 20.08V27.8H20.7966C22.6099 27.8 23.9966 27.48 24.9566 26.84C25.9432 26.1733 26.4366 25.2133 26.4366 23.96C26.4366 22.68 25.9432 21.72 24.9566 21.08C23.9966 20.4133 22.6099 20.08 20.7966 20.08H13.4366ZM21.8366 39.92C25.8632 39.92 27.8766 38.5733 27.8766 35.88C27.8766 33.1867 25.8632 31.84 21.8366 31.84H13.4366V39.92H21.8366ZM50.7063 44.4C46.8396 44.4 43.8263 43.32 41.6663 41.16C39.5063 38.9733 38.4263 35.8533 38.4263 31.8V16H43.6263V31.6C43.6263 37.0933 45.9996 39.84 50.7463 39.84C55.4663 39.84 57.8263 37.0933 57.8263 31.6V16H62.9463V31.8C62.9463 35.8533 61.8663 38.9733 59.7063 41.16C57.5729 43.32 54.5729 44.4 50.7063 44.4ZM81.9181 34.12V44H76.7181V34.2L65.7181 16H71.2781L79.4781 29.64L87.7581 16H92.8781L81.9181 34.12ZM52.3228 65V93H47.1228V69.36H41.2028V65H52.3228ZM30.5011 127.68H35.4211V138.84C33.9811 139.987 32.3011 140.867 30.3811 141.48C28.4611 142.093 26.4878 142.4 24.4611 142.4C21.6078 142.4 19.0344 141.787 16.7411 140.56C14.4478 139.307 12.6478 137.587 11.3411 135.4C10.0344 133.213 9.38109 130.747 9.38109 128C9.38109 125.253 10.0344 122.787 11.3411 120.6C12.6478 118.413 14.4478 116.707 16.7411 115.48C19.0611 114.227 21.6611 113.6 24.5411 113.6C26.8878 113.6 29.0211 113.987 30.9411 114.76C32.8611 115.533 34.4744 116.667 35.7811 118.16L32.5011 121.36C30.3678 119.227 27.7944 118.16 24.7811 118.16C22.8078 118.16 21.0478 118.573 19.5011 119.4C17.9811 120.227 16.7811 121.387 15.9011 122.88C15.0478 124.373 14.6211 126.08 14.6211 128C14.6211 129.867 15.0478 131.547 15.9011 133.04C16.7811 134.533 17.9811 135.707 19.5011 136.56C21.0478 137.413 22.7944 137.84 24.7411 137.84C26.9278 137.84 28.8478 137.36 30.5011 136.4V127.68ZM63.2795 137.64V142H42.2795V114H62.7195V118.36H47.4795V125.64H60.9995V129.92H47.4795V137.64H63.2795ZM74.7564 118.4H65.4764V114H89.2364V118.4H79.9564V142H74.7564V118.4ZM52.3228 163V191H47.1228V167.36H41.2028V163H52.3228Z"
        fill="white"
      />
    </svg>
  );
};

export default OfferTag;