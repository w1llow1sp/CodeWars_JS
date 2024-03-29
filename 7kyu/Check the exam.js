{/*
*
* Первый входной массив - это ключ к правильным ответам на экзамене, например ["a", "a", "b", "d"].
*  Второй содержит ответы студента.

Оба массива не пусты и имеют одинаковую длину.
* Верните оценку для этого массива ответов,
* давая +4 за каждый правильный ответ,
* -1 за каждый неправильный ответ и
* +0 за каждый пустой ответ, представленный как пустая строка (в C используется символ пробела).

Если оценка < 0, верните 0.

Например:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]) → 0
* */}


function checkExam(array1, array2) {
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] === array2[i]) {
            result.push(4); // Правильный ответ
        } else if (array2[i] === '') {
            result.push(0); // Пустой ответ
        } else {
            result.push(-1); // Неправильный ответ
        }
    }
    let total = result.reduce((a, b) => a + b, 0);
    return total < 0 ? 0 : total; // Если общая оценка меньше нуля, возвращаем 0
}


checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""])
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"])
