export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'men' | 'women';
  subcategory: string;
  description: string;
  sizes?: string[];
  colors?: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export interface FilterOptions {
  category: 'all' | 'men' | 'women';
  priceRange: [number, number];
  subcategory: string;
  inStock: boolean;
}
