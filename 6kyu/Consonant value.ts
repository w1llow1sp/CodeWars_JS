{/*
* В строке, состоящей только из букв алфавита и не содержащей пробелов, верните наибольшее значение согласных подстрок. Согласными считаются любые буквы алфавита, кроме "aeiou".

Присвоим следующие значения: a = 1, b = 2, c = 3, .... z = 26.

Например, для слова "зодиаки" вычеркнем гласные. Получаем: "z o d ia cs"

-Подстроки согласных это: "z", "d" и "cs", а значения: z = 26, d = 4 и cs = 3 + 19 = 22. Наибольшее значение - 26.
solve("zodiacs") = 26

Для слова "сила" solve("сила") = 57
-- Подстроки согласных звуков: "str" и "ngth" со значениями "str" = 19 + 20 + 18 = 57 и "ngth" = 14 + 7 + 20 + 8 = 49. Наибольшее значение - 57.
Для C: не мутируйте входные данные.

Больше примеров в тестовых примерах. Удачи!
* */}

export function solve(s: string) {
    let maxValue =  0;
    let sum =  0;
    for (let i =  0; i < s.length; i++) {
        let c = s[i].toLowerCase();
        if (c >= 'a' && c <= 'z') {
            if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
                if (sum > maxValue) {
                    maxValue = sum;
                }
                sum =  0;
            } else {
                sum += c.charCodeAt(0) - 'a'.charCodeAt(0) +  1;
            }
        }
    }
    if (sum > maxValue) {
        maxValue = sum;
    }
    return maxValue;
}


{/*
export function solve(s: string) {
  // your code here
  return Math.max(
    ...s
      .split(/[aeiou]/)
      .map(x => [...x].reduce((a, b) => a + b.charCodeAt(0) - 96, 0))
  );
}

*/}
