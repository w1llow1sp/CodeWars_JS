{/*
* Задав последовательность чисел, найдите наибольшую парную сумму в этой последовательности.

Например

[10, 14, 2, 23, 19] --> 42 (= 23 + 19)
[99, 2, 2, 23, 19] --> 122 (= 99 + 23)
Входная последовательность содержит минимум два элемента, и каждый элемент является целым числом.
*
* */}
function largestPairSum (numbers) {
    return numbers
        .sort((a,b) => {return b-a})
        .slice(0,2)
        .reduce((a,b) => a+b,0)
}

{/*
function largestPairSum(numbers){
  numbers.sort(function(a, b){ return b - a });
  return numbers[0] + numbers[1];
}

*/}
