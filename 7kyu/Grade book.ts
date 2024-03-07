{/*
* Доработайте функцию так, чтобы она находила среднее значение из трех переданных ей оценок
* и возвращала буквенное значение, связанное с этой оценкой.

Числовой балл Буквенная оценка
90 <= оценка <= 100 'A'
80 <= оценка < 90 'B'
70 <= оценка < 80 'C'
60 <= оценка < 70 'D'
0 <= балл < 60 "F
Все проверяемые значения находятся в диапазоне от 0 до 100. Нет необходимости проверять отрицательные значения или значения, превышающие 100.
* */}
export function getGrade(a: number, b: number, c: number): string {
    const average = (a + b + c) / 3;
    if (average >= 90) {
        return 'A';
    } else if (average >= 80) {
        return 'B';
    } else if (average >= 70) {
        return 'C';
    } else if (average >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

{/*
 export function getGrade(a: number, b: number, c: number) {
  let avg = (a+b+c)/3;
  return avg<60?"F":avg<70?"D":avg<80?"C":avg<90?"B":"A";
}
 */}

