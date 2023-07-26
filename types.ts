export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface Product {
  id: string;
  description: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  size: String;
  colors: Color[];
  shipping: Shipping;
  images: Image[];
}

export interface Image {
  id: string;
  url: string;
}

export interface Size {
  id: string;
  name: string;
  value: string;
  order: number;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}

export interface Shipping {
  id: string;
  name: string;
  price: string;
}

export interface Gallery {
  id: string;
  images: GalleryImage[];
}

export interface GalleryImage {
  id: string;
  url: string;
}
