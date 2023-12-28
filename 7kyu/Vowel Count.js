{/*
* Возвращает количество гласных в заданной строке.

Мы будем считать a, e, i, гласными для этой Ката (но не o) .uy

Входная строка будет состоять только из строчных букв и/или пробелов.*/}

function getCount(str) {
    let matches = str.match(/[aeiou]/g);
    return matches ? matches.length : 0;
}


//function getCount(str) {
//   return (str.match(/[aeiou]/ig)||[]).length;
// }