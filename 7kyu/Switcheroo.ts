{/*
* Switcheroo
*
* Задав строку, состоящую из букв a, b и/или c,
* поменяйте местами буквы a и b (замените a на b и наоборот).
* Оставьте нетронутыми все случаи появления буквы c.

Пример:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
* */}


export function switcheroo(x: string): string {
    return x.replace(/[ab]/g, match => match === 'a' ? 'b' : 'a')
}
