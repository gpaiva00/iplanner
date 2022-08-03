export const getStoreNameFromURL = (url: string): string => {
  const storeName = url.split('.')[1];
  return storeName.charAt(0).toUpperCase() + storeName.slice(1);
}