/* Help the bookseller !
Книготорговец имеет множество книг, отнесенных к 26 категориям, обозначенным A, B, ... Z.
Каждая книга имеет код c, состоящий из 3, 4, 5 или более символов. Первый символ кода — заглавная буква, определяющая категорию книги.

В списке книготорговца за каждым кодом c следует пробел и целое положительное число n (int n >= 0), которое указывает количество книг с этим кодом на складе.

Например, выдержка из номенклатуры может быть такой:

L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
или
L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] или ....
Вам будет предоставлен список товаров (например: L) и список категорий, написанный заглавными буквами, например:

М = {"А", "Б", "С", "Ш"}
или
M = ["A", "B", "C", "W"] или ...
и ваша задача — найти все книги L с кодами, принадлежащими каждой категории M, и просуммировать их количество по каждой категории.

Для списков L и M примера вам нужно вернуть строку (в Haskell/Clojure/Racket/Prolog список пар):

(А: 20) - (Б: 114) - (Ц: 50) - (Ж: 0)
где A, B, C, W — категории, 20 — сумма уникальной книги категории A, 114 — сумма, соответствующая «BKWRK» и «BTSQZ», 50 — «CDXEF» и 0 — категории «W». поскольку нет кода, начинающегося с W.

Если L или M пусты, возвращаемая строка равна "" (вместо этого Clojure/Racket/Prolog должен возвращать пустой массив/список).
* */

function stockList(listOfArt, listOfCat){
/*  1. Создается пустой объект objOfKeys с помощью метода reduce.
    2. Создается новый массив newPolishArr с помощью метода map.
    3. Массив newPolishArr сортируется по ключам в алфавитном порядке с помощью метода sort и функции сравнения.
    4. Создается объект resultObj с помощью метода reduce.
    5. Создается переменная resultString.
    6. Если listOfArt пустой или не является массивом, resultString становится пустой строкой.
    7. Иначе, resultString содержит строки вида "(категория : количество)" для каждой категории из objOfKeys.
    8. Возвращается resultString.
    */

    let objOfKeys = listOfCat.reduce((acc, item) => {
        acc[item] = 0;
        return acc;
    }, {});

    let newPolishArr = listOfArt.map((el)=>{
        let [type, number] = el.split(' ');
        return {[type[0]]: parseInt(number)};
    })

    newPolishArr.sort((a, b) => {
        let keyA = Object.keys(a)[0];
        let keyB = Object.keys(b)[0];
        return keyA.localeCompare(keyB);
    });

    let resultObj = newPolishArr.reduce((acc, item) => {
        let key = Object.keys(item)[0];
        let value = Object.values(item)[0];
        if (acc[key]) {
            acc[key] += value;
        } else {
            acc[key] = value;
        }
        return acc;
    }, {});

    let resultString;
    if (!Array.isArray(listOfArt) || !listOfArt.length) {
        //Мне больше нравится так, но тест не проходит
        //resultString = Object.keys(objOfKeys).map(key => `(${key} : 0)`).join(' - ');
        resultString = ''
    } else {
        resultString = Object.keys(objOfKeys).map(key => `(${key} : ${resultObj[key] || 0})`).join(' - ');
    }

    return resultString
}

console.log(stockList([],["B ", "R" , "D", "X"]));

