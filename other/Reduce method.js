{/* ЗАДАЧА 1:Сумма элементов массива: Напишите функцию, которая возвращает сумму всех чисел в массиве. */
}

const sumArray = (arr) => arr.reduce((preValue, curValue) => preValue + curValue, 0)
console.log(sumArray([0, 1, 2, 3, 4]))

{/* ЗАДАЧА 2:Произведение элементов массива: Напишите функцию, которая возвращает произведение всех чисел в массиве.*/
}
const product = (arr) => arr.reduce((prevVal, curVal) => prevVal * curVal, 1)
console.log(product([1, 2, 3, 4]))

{/* ЗАДАЧА 3:Нахождение максимального элемента
* Напишите функцию, которая принимает массив чисел и возвращает максимальный элемент, используя метод .reduce().
*/
}

function maxElement(arr) {
    return arr.reduce((a, b) => Math.max(a, b), -Infinity)
}

console.log(maxElement([1, 2, 3, 4, 5]));

{/* ЗАДАЧА 4:Подсчет количества элементов
* Напишите функцию, которая принимает массив и возвращает количество элементов в массиве, используя метод .reduce().
*/
}

function countElements(arr) {
    return arr.reduce((acc) => acc + 1, 0)
}

console.log(countElements([1, 2, 3, 4, 5]));

{/* ЗАДАЧА 5:Преобразование массива объектов в объект
* Напишите функцию, которая принимает массив объектов и возвращает объект,
 где ключи - это значения определенного свойства объектов,
  а значения - это сами объекты.
*/
}

function arrayToObject(arr, key) {
    return arr.reduce((acc, cur) => {
        acc[cur[key]] = cur;
        return acc
    }, {})
}

console.log(arrayToObject([{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}], 'id'));

{/* ЗАДАЧА 6:Фильтрация и преобразование массива
* Напишите функцию, которая принимает массив чисел
 и возвращает новый массив, содержащий только четные числа,
  умноженные на 2.
*/
}

function filterAndTransform(arr) {
    return arr.reduce((acc, cur) => {
        if (cur % 2 === 0) {
            acc.push(cur*2)
        } return acc
    },[])
}

console.log(filterAndTransform([1, 2, 3, 4, 5]));

{/* ЗАДАЧА 7:Нахождение суммы квадратов элементов
Напишите функцию, которая принимает массив чисел и возвращает сумму квадратов этих чисел, используя метод .reduce().
*/
}

function sumOfSquares(arr) {
    return arr.reduce((cur,prevValue) =>
        Math.pow(prevValue,2) + Math.pow(cur,2)
        ,[])
}
console.log(sumOfSquares([1, 2]));

{/* ЗАДАЧА 8:Нахождение среднего значения
Напишите функцию, которая принимает массив чисел и возвращает их среднее значение, используя метод .reduce().
*/
}
function average(arr) {
    return arr.reduce((cur,prev) =>
    cur + prev,[])/arr.length
}
console.log(average([1, 2, 3, 4, 5]));
