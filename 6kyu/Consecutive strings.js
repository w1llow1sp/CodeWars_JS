{/*
* Вам дан массив (список) strarr строк и целое число k.
* Ваша задача — вернуть первую самую длинную строку, состоящую из k последовательных строк, взятых в массиве.
*Примеры:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
n — длина массива строк, если n = 0или возвращает «» (возврат в Elm, «ничего» в Erlang).k > nk <= 0Nothing

Примечание
последовательные строки: следуют друг за другом без перерыва
* */}
function longestConsec(strarr, k) {
    const n = strarr.length;

    if (n === 0 || k > n || k <= 0) {
        return "";
    }

    let longest = "";

    for (let i = 0; i <= n - k; i++) {
        const currentConcatenation = strarr.slice(i, i + k).join("");
        if (currentConcatenation.length > longest.length) {
            longest = currentConcatenation;
        }
    }

    return longest;
}


{/*
function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) {
    return '';
  }

  return strarr.reduce((long, item, i) => {
    const currString = strarr.slice(i, i + k).join('');
    return (currString.length > long.length)
      ? currString
      : long;
  }, '');
}*/}
