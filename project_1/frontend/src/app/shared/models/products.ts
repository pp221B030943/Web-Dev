export interface Product {
  id: number,
  category_id: number,
  price: number,
  rating: number,
  name: string,
  description: string,
  image: string,
  link: string
}

export const products = []