export interface MenuItem {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  category: 'Starters' | 'Mains' | 'Desserts' | 'Drinks';
}

export interface GalleryImage {
  id: number;
  url: string;
  alt: string;
}

export interface NavLink {
  name: string;
  href: string;
}