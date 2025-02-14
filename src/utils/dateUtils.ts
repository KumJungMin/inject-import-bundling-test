// 12. formatDate
export function formatDate(date: Date = new Date()): string {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }
  
  // 13. parseDate
  export function parseDate(str: string): Date {
    const [year, month, day] = str.split('-').map(Number);
    return new Date(year, month - 1, day);
  }
  
  // 14. getDayOfWeek
  export function getDayOfWeek(date: Date = new Date()): number {
    return date.getDay();
  }
  
  // 15. isWeekend
  export function isWeekend(date: Date = new Date()): boolean {
    const day = date.getDay();
    return day === 6 || day === 0;
  }