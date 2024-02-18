import { productItem, productsList } from "../lib/constants";

const ProductList = () => {
  return (
    <div className="w-full border-black border-y-2    font-mons pt-5 pb-3 bg-[#FCFAF4]">
      <ul className="flex gap-4 overflow-x-auto w-full font-bold styled-scrollbar pl-5 md:pl-10 lg:pl-16 pr-2">
        {productsList.map((item: productItem) => (
          <li key={item.key} className="flex items-center gap-2 min-w-fit text-md md:text-base"><div className="w-1.5 h-1.5 rounded-full bg-[#9D3FE7] "></div>{item.productname}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
