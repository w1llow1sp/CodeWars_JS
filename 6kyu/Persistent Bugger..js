{/*
Напишите функцию persistence,
которая принимает положительный параметр num и возвращает его мультипликативную стойкость,
 то есть количество раз, которое нужно перемножить цифры в num, пока не получится одна цифра.

Например (Вход --> Выход):

39 --> 3 (потому что 3*9 = 27, 2*7 = 14, 1*4 = 4 и 4 имеет только одну цифру)
999 --> 4 (потому что 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, и, наконец, 1*2 = 2)
4 --> 0 (потому что 4 - это уже однозначное число)
* */}
function persistence(num) {
    if (num <  10) {
        // Если число уже однозначное, возвращаем  0, так как нет необходимости дальше умножать
        return  0;
    } else {
        // Перемножаем цифры числа и увеличиваем счетчик на  1
        let product = Array.from(String(num)).reduce((acc, curr) => acc * parseInt(curr),  1);
        return  1 + persistence(product);
    }
}


{/*
function persistence(num) {
   var times = 0;

   num = num.toString();

   while (num.length > 1) {
     times++;
     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
   }

   return times;
}
*/}