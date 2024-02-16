import { productItem, productsList } from "../lib/constants";

const ProductList = () => {
  return (
    <div className="w-full border-black border-y-2 px-5 md:px-10 lg:px-16  font-mons pt-5 pb-3 bg-[#FCFAF4]">
      <ul className="flex gap-4 overflow-x-auto w-full font-bold styled-scrollbar">
        {productsList.map((item: productItem) => (
          <li key={item.key} className="flex items-center gap-2 min-w-fit text-md md:text-base"><div className="w-1.5 h-1.5 rounded-full bg-[#9D3FE7] "></div>{item.productname}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
