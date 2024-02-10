{/*
* Я дам вам целое число. Верните мне фигуру, длина и ширина которой равны целому числу.
*  Целым числом будет целое число от 1 до 50.

Пример
n = 3, поэтому я ожидаю получить квадрат 3x3, как показано ниже, в виде строки:

+++
+++
+++
* */}

export function generateShape(int: number): string {
    // @ts-ignore
    return ("+".repeat(int) + "\n")
        // @ts-ignore
        .repeat(int)
        .trim();
}


{/*
export function generateShape(int: number): string {
  return `${"+".repeat(int)}\n`.repeat(int).slice(0, -1);
}*/}