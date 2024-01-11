{/*
* Создайте метод, который принимает в качестве входных данных имя, город и штат, чтобы приветствовать человека. Обратите внимание, что это nameбудет массив, состоящий из одного или нескольких значений, которые должны быть объединены одним пробелом между каждым, а длина массива nameв тестовых примерах будет варьироваться.

Пример:

['John', 'Smith'], 'Phoenix', 'Arizona'
Этот пример вернет строкуHello, John Smith! Welcome to Phoenix, Arizona!

*/}

export const sayHello = (name: string[], city: string, state: string):string => {
    return `Hello ${name.join(' ')}! Welcome to ${city},${state}`;
}