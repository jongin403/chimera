export type SiteMapItem = {
  label: string;
  link: string;
  children?: SiteMapItem[];
};

const SiteMapInfo: SiteMapItem[] = [
  {
    label: 'Home',
    link: '/home',
  },
  {
    label: 'Products',
    link: '/home',
    children: [
      {
        label: 'Electronics',
        link: '/Electronics',
      },
      {
        label: 'Clothing',
        link: '/Clothing',
      },
    ],
  },
  {
    label: 'About Us',
    link: '/about-us',
  },
];

export default SiteMapInfo;
