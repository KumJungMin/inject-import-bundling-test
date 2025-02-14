// 5. chunkArray
export function chunkArray<T>(arr: T[], size: number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  }
  
  // 6. flattenArray
  export function flattenArray<T>(arr: any[]): T[] {
    return arr.reduce((acc: T[], val: any) => {
      return Array.isArray(val)
        ? acc.concat(flattenArray<T>(val))
        : acc.concat(val);
    }, []);
  }
  
  // 7. uniqueArray
  export function uniqueArray<T>(arr: T[]): T[] {
    return [...new Set(arr)];
  }