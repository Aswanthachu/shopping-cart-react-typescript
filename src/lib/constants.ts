export interface NavItem {
  key: number;
  title: string;
  path: string;
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
