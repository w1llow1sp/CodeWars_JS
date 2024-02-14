{/*
* Инструкции
Напишите функцию, которая принимает в качестве аргумента одну непустую строку,
* состоящую только из строчных и прописных букв ascii (слово), и возвращает упорядоченный список,
*  содержащий индексы всех заглавных (прописных) букв в этой строке.

Пример (вход --> выход)
"CodEWaRs" --> [0,3,4,6]*/}


export function capitals (word: string): number[] {
    return word.split('')
        .map((char, index) => char === char.toUpperCase() ? index : -1)
        .filter(index => index !== -1);
}
capitals('CodEWaRs')
