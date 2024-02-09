{/*
Рассмотрим слово "abode".
 Мы видим, что буква a находится в позиции 1, а b - в позиции 2.
 В алфавите a и b также находятся в позициях 1 и 2.
 Заметьте также, что d и e в слове abode занимают те позиции, которые они занимали бы в алфавите, а именно 4 и 5.

Если дан массив слов, верните массив с количеством букв, которые занимают свои позиции в алфавите для каждого слова. Например,

solve(["abode", "ABc", "xyzD"]) = [4, 3, 1].
Дополнительные примеры смотрите в тестовых примерах.

Ввод состоит из символов алфавита, как прописных, так и строчных. Без пробелов.

Удачи!
* */}

export function solve(arr: string[]): number[] {
    return arr.map(word => {
        let count =   0;
        for (let i =   0; i < word.length; i++) {
            const char = word[i].toLowerCase();
            // Проверяем, что символ является буквой алфавита и его позиция в алфавите соответствует позиции в слове
            if (char >= 'a' && char <= 'z' && char === 'abcdefghijklmnopqrstuvwxyz'[i]) {
                count++;
            }
        }
        return count;
    });
}


{/*
1.Метод map применяется к каждому слову в массиве arr.
 Для каждого слова создается переменная count, которая будет хранить количество символов,
 находящихся на своих позициях в алфавите.
2.Внутри цикла for происходит проверка каждого символа слова.
 Символ преобразуется в нижний регистр с помощью метода toLowerCase(),
  чтобы учесть как строчные, так и прописные буквы. Затем проверяется,
   что символ находится в диапазоне от 'a' до 'z' и что его позиция в алфавите соответствует позиции
    в слове (это достигается сравнением с символом на той же позиции в строке 'abcdefghijklmnopqrstuvwxyz').
     Если условие выполняется, то счетчик увеличивается.
*/}

{/*
export function solve(arr: string[]) {
  const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
  return arr.map(s=>
    s.split('').reduce(
      (t,c,i) => c.toLowerCase() === alphabet[i] ? t + 1 : t
    , 0)
  );

}*/}