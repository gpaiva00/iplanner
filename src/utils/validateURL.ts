export default function validateURL(url: string): boolean {
  const pattern = /^(http|https):\/\/[^ "]+$/;
  return pattern.test(url);
}