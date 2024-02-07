{/*
* The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]*/}

export const getEvenNumbers = (numbersArray : number[]) : number[] => {
    // Фильтрация массива, чтобы получить только четные числа
    return numbersArray.filter(number => number %  2 ===  0);
}
