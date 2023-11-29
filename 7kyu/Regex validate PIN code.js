/*Банкоматы допускают использование 4- или 6-значных PIN-кодов, а PIN-коды не могут содержать ничего, кроме ровно 4 или ровно 6 цифр.

Если функции передана действительная строка PIN-кода, верните true, иначе верните false.

Примеры (Ввод -> Вывод)
«1234» --> правда
«12345» --> ложь
«a234» -> ложь*/

function validatePIN(pin) {
    return (pin.length === 4 || pin.length === 6) && !isNaN(pin) && !pin.includes('.') && !pin.includes(',');
}


console.log()

//function validatePIN(pin) {
//   let regex = new RegExp(/^\d{4}$|^\d{6}$/);
//   return regex.test(pin) && !/[.,]/.test(pin);
// }