{/*
* Пятница 13-е или Черная пятница считается несчастливым днем.
* Подсчитайте, сколько несчастливых дней приходится на данный год.

Найдите число пятницы 13-го в данном году.

Входные данные: Год по григорианскому календарю в виде целого числа.

Выходные данные: Количество черных пятниц в году как целое число.*/}


export function unluckyDays(year: number): number {
    let unlucky = 0;
    for (let month = 1; month <= 12; month++) {
        const date = new Date(year, month - 1, 13);
        if (date.getDay() === 5) {
            unlucky++;
        }
    }
    return unlucky;
}
{/*
export function unluckyDays(year: number): number {
   return Array.from({length: 12}, (_, idx: number) => idx).filter((m: number) => new Date(year, m, 13).getDay() === 5).length
}

*/}
