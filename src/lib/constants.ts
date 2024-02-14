export interface NavItem {
  key: number;
  title: string;
  path: string;
}

export interface productItem{
  key:number,
  productname:string,
  link:string
}

export const navItems: NavItem[] = [
  {
    key: 0,
    title: "Home",
    path: "/",
  },
  {
    key: 1,
    title: "Shop",
    path: "/shop",
  },
  {
    key: 2,
    title: "About",
    path: "/about",
  },
  {
    key: 3,
    title: "Contact",
    path: "/",
  },
];

export const productsList : productItem[]=[
  {
    key:0,
    productname:"TEXT PRODUCT",
    link:"/product"
  },
  {
    key:1,
    productname:"TEXT PRODUCT",
    link:"/product"
  },
  {
    key:2,
    productname:"TEXT PRODUCT",
    link:"/product"
  },
  {
    key:3,
    productname:"TEXT PRODUCT",
    link:"/product"
  },
  {
    key:4,
    productname:"TEXT PRODUCT",
    link:"/product"
  },
  {
    key:5,
    productname:"TEXT PRODUCT",
    link:"/product"
  },
  {
    key:6,
    productname:"TEXT PRODUCT",
    link:"/product"
  },
  {
    key:7,
    productname:"TEXT PRODUCT",
    link:"/product"
  },
  {
    key:8,
    productname:"TEXT PRODUCT",
    link:"/product"
  },
  {
    key:9,
    productname:"TEXT PRODUCT",
    link:"/product"
  },
  {
    key:10,
    productname:"TEXT PRODUCT",
    link:"/product"
  },
]
