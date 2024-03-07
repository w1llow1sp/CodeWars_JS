{/*
* На фабрике принтер печатает этикетки для коробок.
*  Для одного вида коробок принтер должен использовать цвета,
* которые для простоты названы буквами от a до m.

Цвета, используемые принтером, записываются в управляющую строку.
* Например, "хорошей" управляющей строкой будет aaabbbbhaijjm, что означает,
* что принтер использовал три раза цвет a, четыре раза цвет b, один раз цвет h, затем один раз цвет a...

Иногда возникают проблемы: отсутствие цветов,
* технические неполадки, и получается "плохая" управляющая строка,
*  например aaaxbbbbyyhwawiwjjwwm с буквами не от a до m.

Необходимо написать функцию printer_error,
*  которая при задании строки возвращает количество ошибок принтера в виде строки,
*  представляющей собой рациональное число, числитель которого - количество ошибок
* , а знаменатель - длина контрольной строки. Не сводите эту дробь к более простому выражению.

Строка имеет длину больше или равную единице и содержит только буквы от at до z.

Примеры:
s="aaabbbbhaijjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjwwm"
printer_error(s) => "8/22"
*
* */}

const printerError = (s) => {
    return  `${(s.match(/[^a-m]/g)|| []).length}/${s.length}`
}

