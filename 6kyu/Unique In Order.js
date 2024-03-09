{/*
* Unique In Order
*
* Реализуйте функцию unique_in_order,
*  которая принимает в качестве аргумента последовательность и возвращает список элементов,
*  в котором нет ни одного элемента с одинаковым значением, расположенного рядом друг с другом и сохраняющего исходный
*  порядок элементов.

Например:
*
* uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
* uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
* uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*
* */}

const uniqueInOrder = (iterable) => {
    const sortedFunc = (arr) => arr.reduce((acc, cur, idx, src) => {
        if (idx === 0 || cur !== src[idx - 1]) {
            acc.push(cur);
        }
        return acc;
    }, [])

    return Array.isArray(iterable)
        ? sortedFunc(iterable) : sortedFunc(iterable.split(''))
}
uniqueInOrder('AAAABBBCCDAABBB')


{/*
var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}
*/}
