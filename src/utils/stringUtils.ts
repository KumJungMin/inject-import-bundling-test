// 1. capitalize
export function capitalize(str: string): string {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  // 2. reverseString
  export function reverseString(str: string): string {
    return [...str].reverse().join('');
  }
  
  // 3. slugify
  export function slugify(str: string): string {
    return str
      .toLowerCase()
      .replace(/[\s\W-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
  
  // 4. toCamelCase
  export function toCamelCase(str: string): string {
    return str.replace(/[-_](\w)/g, (_, c) => (c ? c.toUpperCase() : ''));
  }
  