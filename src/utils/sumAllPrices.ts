export const sumAllPrices = (products: any): number => 
  products.reduce((acc: any, product: { price: string; }) => acc + parseFloat(product.price), 0);