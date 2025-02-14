// 16. isEmail
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export function isEmail(str: string): boolean {
  return emailRegex.test(str);
}

// 17. isPhone
const phoneRegex = /^[0-9]{2,3}-?[0-9]{3,4}-?[0-9]{4}$/;
export function isPhone(str: string): boolean {
  return phoneRegex.test(str);
}

// 18. isURL
const urlRegex = /^https?:\/\/[^\s$.?#].[^\s]*$/;
export function isURL(str: string): boolean {
  return urlRegex.test(str);
}