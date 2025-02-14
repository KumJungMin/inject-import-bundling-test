// 8. add
export function add(a: number, b: number): number {
    return a + b;
  }
  
  // 9. subtract
  export function subtract(a: number, b: number): number {
    return a - b;
  }
  
  // 10. randomInt
  export function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // 11. clamp
  export function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
  }