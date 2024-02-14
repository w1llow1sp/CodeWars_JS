{/*
* Задано положительное число n > 1, найдите разложение n по простым факторам.
*  Результатом будет строка следующего вида :

 "(p1**n1)(p2**n2)...(pk**nk)"
причем p(i) расположены в порядке возрастания, а n(i) пусто, если n(i) равно 1.

Пример: n = 86240 должно возвращать "(2**5)(5)(7**2)(11)".*/}


function primeFactors(n) {
// Initialize an empty object to store the prime factors and their counts
    let factors = {};

// Loop through all numbers from  2 up to the square root of n
    for (let i =   2; i * i <= n; i++) {
        // While the current number is divisible by i
        while (n % i ===   0) {
            // If the factor has not been encountered yet, initialize its count
            if (!factors[i]) {
                factors[i] =   0;
            }
            // Increment the count for the current factor
            factors[i]++;
            // Divide n by the current factor
            n /= i;
        }
    }

// If n is greater than  1 after the loop, it is a prime factor itself
    if (n >   1) {
        factors[n] =   1;
    }

// Build the resulting string
    let result = '';
// For each factor in the factors object
    for (let key in factors) {
        // If the power of the factor is greater than  1, add the key and the power to the string
        if (factors[key] >   1) {
            result += `(${key}**${factors[key]})`;
        } else {
            // Otherwise, just add the key
            result += `(${key})`;
        }
    }

// Return the resulting string
    return result;}

{/*
function primeFactors(n){
  for (var i=2, res="", f; i <= n; i++) {
    f=0;
    while (n%i == 0) { f++; n/=i }
    res += f ? "(" + ( f>1 ? i+"**"+f  : i ) +")" : ""
  }
  return res || "("+n+")"
}*/}


