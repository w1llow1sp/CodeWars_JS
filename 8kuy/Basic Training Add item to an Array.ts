{/*
* Добавьте значение «codewars» в массив веб-сайтов.
После выполнения вашего кода массив веб-сайтов должен == ["codewars"]

Массив веб-сайтов уже определен для вас с помощью следующего кода:
*
* export const websites: string[] = [];*/}

// @ts-ignore
import { websites } from "./preloaded";
// add the value "codewars" to the `websites` array
websites.push('codewars')

export { websites };