/**
 * 1. capitalize
 * 문자열의 첫 글자를 대문자로 변환
 */
export function capitalize(str: string): string {
    if (typeof str !== 'string' || !str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  /**
   * 2. reverseString
   * 문자열을 뒤집어 반환
   */
  export function reverseString(str: string): string {
    return [...str].reverse().join('');
  }
  
  /**
   * 3. slugify
   * 공백·특수문자를 하이픈(-)으로 치환
   */
  export function slugify(str: string): string {
    return str
      .toLowerCase()
      .replace(/[\s\W-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
  
  /**
   * 4. toCamelCase
   * snake_case나 kebab-case를 camelCase로 변환
   */
  export function toCamelCase(str: string): string {
    return str.replace(/[-_](\w)/g, (_, c) => (c ? c.toUpperCase() : ''));
  }
  
  /**
   * 5. chunkArray
   * 배열을 size씩 잘라 2차원 배열로 반환
   */
  export function chunkArray(arr: any[], size: number): any[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  }
  
  /**
   * 6. flattenArray
   * 중첩 배열을 1차원 배열로 평탄화
   * (재귀 사용)
   */
  export function flattenArray(arr: any[]): any[] {
    return arr.reduce((acc, val) => {
      return Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val);
    }, []);
  }
  
  /**
   * 7. uniqueArray
   * 배열 내 중복 제거
   */
  export function uniqueArray(arr: any[]): any[] {
    return [...new Set(arr)];
  }
  
  /**
   * 8. add
   * 두 수의 합
   */
  export function add(a: number, b: number): number {
    return a + b;
  }
  
  /**
   * 9. subtract
   * 두 수의 차
   */
  export function subtract(a: number, b: number): number {
    return a - b;
  }
  
  /**
   * 10. randomInt
   * min 이상 max 이하 범위의 정수 난수 반환
   */
  export function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  /**
   * 11. clamp
   * value를 min과 max 범위 내로 고정
   */
  export function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
  }
  
  /**
   * 12. formatDate
   * Date 객체(또는 생략 시 현재 시간)를 YYYY-MM-DD 형태로 반환
   */
  export function formatDate(date = new Date()): string {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }
  
  /**
   * 13. parseDate
   * "YYYY-MM-DD" 형식 문자열을 받아 Date 객체로 변환
   * (단순 파싱 예시)
   */
  export function parseDate(str: string): Date {
    const [year, month, day] = str.split('-').map(Number);
    return new Date(year, month - 1, day);
  }
  
  /**
   * 14. getDayOfWeek
   * Date 객체(또는 생략 시 현재 시간)의 요일 인덱스(일=0, 월=1, ...) 반환
   */
  export function getDayOfWeek(date = new Date()): number {
    return date.getDay();
  }
  
  /**
   * 15. isWeekend
   * Date 객체(또는 생략 시 현재 시간)가 토요일(6) 또는 일요일(0)인지 여부
   */
  export function isWeekend(date = new Date()): boolean {
    const day = date.getDay();
    return day === 6 || day === 0;
  }
  
  /**
   * 16. isEmail
   * 간단한 정규식을 사용해 문자열이 이메일 형태인지 판별
   */
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  export function isEmail(str: string): boolean {
    return emailRegex.test(str);
  }
  
  /**
   * 17. isPhone
   * 간단한 정규식을 사용해 문자열이 전화번호 형태인지 판별
   * (국가별/지역별 세부 차이는 고려하지 않은 예시)
   */
  const phoneRegex = /^[0-9]{2,3}-?[0-9]{3,4}-?[0-9]{4}$/;
  export function isPhone(str: string): boolean {
    return phoneRegex.test(str);
  }
  
  /**
   * 18. isURL
   * 간단한 정규식을 사용해 문자열이 URL 형태인지 판별
   */
  const urlRegex = /^https?:\/\/[^\s$.?#].[^\s]*$/;
  export function isURL(str: string): boolean {
    return urlRegex.test(str);
  }
  
  /**
   * 19. deepClone
   * 객체(또는 배열)를 깊은 복사
   * (JSON.parse/JSON.stringify 이용, 함수·순환참조 등은 비지원)
   */
  export function deepClone(obj: any): any {
    return JSON.parse(JSON.stringify(obj));
  }
  
  /**
   * 20. pick
   * 객체에서 지정한 키들만 추출해 새 객체로 반환
   */
  export function pick(obj: any, keys: string[]): any {
    const result: any = {};
    for (const key of keys) {
      if (key in obj) {
        result[key] = obj[key];
      }
    }
    return result;
  }
