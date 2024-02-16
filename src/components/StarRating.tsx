import  { useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (index:number) => {
    setRating(index + 1);
  };

  return (
    <div className="flex my-20">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 fill-current cursor-pointer ${
            index < rating ? 'text-[#F9A65A]' : 'text-gray-400'
          }`}
          viewBox="0 0 24 24"
          onClick={() => handleClick(index)}
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
