{/*
* Ваша задача - суммировать разности между последовательными парами в массиве в порядке убывания.

Пример
[2, 1, 10] --> 9
В порядке убывания: [10, 2, 1]

Сумма: (10 - 2) + (2 - 1) = 8 + 1 = 9

Если массив пуст или в нем только один элемент, результат должен быть равен 0 (Nothing в Haskell, None в Rust).
* */}
function sumOfDifferences(arr) {
    if (arr.length <=  1) {
        return  0; // If the array has  0 or  1 element, the result is  0
    }
    return arr
        .sort((a, b) => b - a) // Sort the array in descending order
        .reduce((acc, curr, index, array) => {
            const next = array[index +  1];
            if (next !== undefined) { // Check if there is a next element to subtract from
                acc += curr - next; // Subtract the next element from the current one and add to accumulator
            }
            return acc;
        },  0); // Start with an accumulator of  0
}

{/*
function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

const sumOfDifferences = arr => arr
  .sort((a, b) => b - a)
  .map((a, i) => a - arr[i + 1] || 0)
  .reduce((a, b) => a + b, 0);

*/}
