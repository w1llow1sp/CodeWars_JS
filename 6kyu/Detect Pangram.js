{/*
* Панграмма – это предложение, которое содержит каждую букву алфавита хотя бы один раз.
*  Например, предложение «The quick brown fox jumps over the lazy dog» является панграммой,
*  поскольку в нем хотя бы один раз используются буквы A-Z (регистр не имеет значения).

Учитывая строку, определите, является ли она панграммой.
* Возвращайте True, если это так, и False, если нет.
* Не обращайте внимания на цифры и знаки препинания.*/}


function isPangram(string){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowerCaseString = string.toLowerCase();

    return [...alphabet].every(char => lowerCaseString.includes(char));
}

{/*
function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}*/}