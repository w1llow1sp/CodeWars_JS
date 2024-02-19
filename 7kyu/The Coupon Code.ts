{/*
* История
Ваш интернет-магазин любит раздавать купоны по особым случаям.
* Некоторые покупатели пытаются обмануть систему, вводя недействительные коды или используя купоны с истекшим сроком действия.

Задание
Ваша задача:
Напишите функцию checkCoupon, которая проверяет, является ли код купона действительным и не истек ли срок его действия.

Купон становится недействительным на следующий день после даты истечения срока действия.
*  Все даты будут передаваться в виде строк в таком формате: "МЕСЯЦ ДАТА, ГОД".

Примеры:
checkCoupon("123", "123", "9 июля 2015", "9 июля 2015") === true
checkCoupon("123", "123", "9 июля 2015", "2 июля 2015") === false
* */}
export function checkCoupon(
    enteredCode: string,
    correctCode: string,
    currentDate: string,
    expirationDate: string): boolean {
    // Проверяем, что введенный код совпадает с правильным
    if (enteredCode !== correctCode) {
        return false;
    }

    // Преобразуем строки с датами в объекты Date
    let current = new Date(currentDate);
    let expiration = new Date(expirationDate);

    // Купон действителен до конца даты истечения, поэтому сравниваем с датой истечения, добавляя один день
    expiration.setDate(expiration.getDate() +   1);

    // Проверяем, что текущая дата меньше или равна дате истечения
    return current <= expiration;
}


{/*
 export function checkCoupon(enteredCode: string, correctCode: string, currentDate: string, expirationDate: string): boolean {
  return enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate);
}
*/}
