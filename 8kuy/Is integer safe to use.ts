/*Не все целые числа могут быть представлены с помощью JavaScript/TypeScript.
 В нем есть место для представления 53-битных целых чисел со знаком.
  В этом ката нам предстоит определить,
  безопасно ли использовать целое число или нет. Чтобы найти это, используйте новейшие функции ES6.*/

export function SafeInteger(n: number): boolean {
   // @ts-ignore
   return Number.isSafeInteger(n)
}

//export const SafeInteger = Number.isSafeInteger;
//export function SafeInteger(n) {
//   return Number.isSafeInteger(n) ? true : false;
// }