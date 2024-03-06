{/*
* Мой дедушка всегда предсказывал, как стареют люди, и перед самой смертью он раскрыл свой секрет!

В честь памяти моего дедушки мы напишем функцию по его формуле!

Возьмите список возрастов, когда умер каждый из ваших прабабушек и прадедушек.
Умножьте каждое число на себя.
Сложите их все вместе.
Возьмите квадратный корень из полученного результата.
Разделите на два.
Пример
predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
Примечание: результат следует округлить до ближайшего целого числа.

Некоторые случайные тесты могут не пройти из-за ошибки в реализации JavaScript. В этом случае просто повторно отправьте тест.


*
* */}
export function predictAge(
    age1:number,
    age2:number,
    age3:number,
    age4:number,
    age5:number,
    age6:number,
    age7:number,
    age8:number): number {
    let ageArr = [age1, age2, age3, age4, age5, age6, age7, age8];
    const sumOfSquares = ageArr.reduce((acc, item) => acc + item * item, 0);
    const squareRoot = Math.sqrt(sumOfSquares);
    return Math.floor(squareRoot / 2);
};

{/*
export const predictAge=(...a)=>Math.sqrt(a.reduce((b,c)=>b+c*c,0))>>
export function predictAge(...ages: number[]): number {
  return Math.trunc(
      Math.sqrt(
        ages
        .map(x => x*x)
        .reduce((a, b) => a + b, 0)
      ) / 2
    );
};
*/}
