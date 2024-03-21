function getNumber(str: string): any {
    const getInitNumber = str.match(/\d/gi)
    const getRomanNumber = str.match(/{a-z}/gi)
}

getNumber('0..XIX')
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
