{/*
* Филипу только что исполнилось четыре года, и он хочет знать,
*  сколько ему будет лет в разные годы будущего, например в 2090 или 3044.
* Его родители не успевают вычислять, поэтому они просят вас помочь им, написав программу,
*  которая сможет ответить на бесконечные вопросы Филипа.

Ваша задача - написать функцию, которая принимает два параметра: год рождения и год,
*  по отношению к которому нужно считать годы.
* Поскольку Филипп с каждым днем становится все более любопытным, он может вскоре захотеть узнать
* , сколько лет осталось до его рождения, поэтому ваша функция должна работать как с датами в будущем, так и в прошлом.

Предоставьте вывод в таком формате:
*  Для дат в будущем: "Вам ... года(ов)". Для дат в прошлом: "Вы родитесь в ... году(ах)".
*  Если год рождения равен запрашиваемому году, вернитесь: "Вы родились в этом году!".

"..." следует заменить цифрой, за которой следует пробел.
* Имейте в виду, что в зависимости от результата вам нужно учитывать и "год", и "годы".

Удачи!
*
* */}


function calculateAge(birthYear, year) {
    let age = year - birthYear;
    let message = "";

    if (year < birthYear) {
        // The year of birth is in the future.
        message = "You will be born in ";
    } else if (year > birthYear) {
        // The year of birth is in the past.
        message = "You are ";
        // Append "old" only for past years
        message += Math.abs(age) + " year" + (Math.abs(age) === 1 ? "" : "s") + " old.";
        return message;
    } else {
        // The year of birth is the current year.
        return "You were born this very year!";
    }

    // Adjust the message based on the age for future years.
    message += Math.abs(age) + " year" + (Math.abs(age) === 1 ? "" : "s") + ".";

    return message;
}

{/*
function  calculateAge(m, n) {
	if(m == n) return 'You were born this very year!';
  var year = Math.abs(m-n) == 1 ? 'year' : 'years';
  if(m < n) return "You are "+(n-m)+' '+year+' old.';
  if(m > n) return "You will be born in "+(-n+m)+' '+year+'.';
}
*/}
