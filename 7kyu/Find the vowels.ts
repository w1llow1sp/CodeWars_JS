{/*
* Мы хотим узнать индекс гласных в заданном слове, например,
*  в слове super есть две гласные (вторая и четвертая буквы).

Поэтому, задав строку "super", мы должны вернуть список [2, 4].

Некоторые примеры:
Mmmm => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
ПРИМЕЧАНИЯ
Гласные в данном контексте означают: a e i o u y (включая верхний регистр).
Индексируется от [1..n] (не нулевой индекс!)

*
* */}


export function vowelIndices(word: string): number[] {
    return word
        .toLowerCase()
        .split('')
        .reduce((acc: number[], el: string, index: number) => {
            if (el.match(/[aeiouy]/g)) {
                acc.push(index + 1);
            }
            return acc;
        }, []);
}

