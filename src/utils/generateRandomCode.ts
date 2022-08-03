interface GenerateRandomCodeOptions {
  length?: number;
  prefix?: string;
}

export default function generateRandomAlphaNumericCode({ prefix = '', length = 4 }: GenerateRandomCodeOptions): string {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  const sanitizedPrefix = changeSpaceToDash(prefix);

  let result = `${prefix && `${sanitizedPrefix}-`}`;
  
  for (let i = length; i > 0; --i) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

function changeSpaceToDash(str: string): string {
  return str.replace(/\s/g, '-');
}