export interface Budget {
  name: string;
  description: string;
  image: string;
  items: BudgetItem[];
}

export interface BudgetItem {
  id: number;
  name: string;
  image?: string;
  link?: string;
  price: number;
  category: string;
  type: "wishlist" | "purchased";
}