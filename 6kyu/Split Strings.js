{/*
*Доработайте решение так, чтобы оно разбивало строку
* на пары из двух символов. Если строка содержит
* нечетное количество символов,
*  то недостающий второй символ последней пары
*  следует заменить знаком подчеркивания ('_').

Примеры:

* 'abc' => ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*
* */
}


//match(/..?/g) -- количснвто точек - шабльон по сколько надо разбить
function solution(str) {
  return  str.length===0
      ? []
      : str.match(/..?/g).map(v => v.length === 1
        ? v + '_'
        : v)
}


console.log(solution("abcdef"))

{/*
function solution(s){
   return (s+"_").match(/.{2}/g)||[]
}
*/}
