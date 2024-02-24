{/*
*
* Summing a number's digits
*
*
* Напишите функцию с именем sumDigits, которая принимает на вход число и возвращает сумму абсолютного значения каждой из
*  десятичных цифр этого числа.

Например: (Вход --> Выход)

10 --> 1
99 --> 18
-32 --> 5
* */}


function sumDigits(number) {
    return number.toString()
        .replace(/-/g,'')
        .split('')
        .map(str => parseInt(str))
        .reduce(  (accumulator, currentValue) => accumulator + currentValue,0)
}

{/*
sumDigits = n => Math.abs(n).toString().split('').reduce((s, e) => s + +e, 0);
*/}
